"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function getPosts() {
	return db.post.findMany({});
}

export async function getPost(slug: string) {
	return db.post.findFirst({ where: { slug } });
}

export async function addEmailSubscription(email: string) {
	await db.subscription.create({ data: { email: z.string().email().parse(email) } });
}

export async function upsertArticle(
	oldSlug: string,
	article: { title: string; content: string; slug: string; summary: string; author: string },
) {
	const session = await auth();
	if (!session || !["editor", "admin"].includes(session.user.role)) redirect("/unauthorized");

	await db.post.upsert({
		create: { ...article, image: "" },
		update: article,
		where: { slug: oldSlug },
	});
}
