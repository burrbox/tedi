"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import Stripe from "stripe";
import { env } from "@/env";

export async function getPosts() {
	return db.post.findMany({ orderBy: { createdAt: "desc" }, omit: { content: true } });
}

export async function getPost(slug: string) {
	return db.post.findFirst({ where: { slug } });
}

export async function addEmailSubscription(email: string) {
	await db.subscription.create({ data: { email: z.string().email().parse(email) } });
}

export async function upsertArticle(
	oldSlug: string,
	article: { title: string; content: string; slug: string; summary: string; author: string; image: string },
) {
	const session = await auth();
	if (!session || !["editor", "admin"].includes(session.user.role)) redirect("/unauthorized");

	await db.post.upsert({
		create: article,
		update: article,
		where: { slug: oldSlug },
	});
}

export async function savePetitionSignature(data: {
	firstName: string;
	lastName: string;
	email: string;
	zipCode: string;
	message?: string;
}) {
	await db.petitionSignature.create({
		data: z
			.object({
				firstName: z.string().min(1).max(50),
				lastName: z.string().min(1).max(50),
				email: z.string().email(),
				zipCode: z.string().length(5),
				message: z.string().optional(),
			})
			.parse(data),
	});
}

export async function stripeDonation() {
	const session = await auth();

	const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
	const prices = await stripe.prices.list({ lookup_keys: ["donation"], expand: ["data.product"] });

	if (!prices.data[0]) redirect("/error?error=StripeError");

	const stripeSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		mode: "payment",
		cancel_url: `${env.URL}/pricing`,
		success_url: `${env.URL}/blog`,
		line_items: [{ price: prices.data[0].id, quantity: 1 }],
		customer_email: session?.user.email ?? undefined,
	});

	redirect(stripeSession.url!);
}
