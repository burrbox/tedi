"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function getPosts() {
	return db.post.findMany({ include: { author: true } });
}

export async function getPost(slug: string) {
	return db.post.findFirst({ where: { slug } });
}

export async function addEmailSubscription(email: string) {
	await db.subscription.create({ data: { email: z.string().email().parse(email) } });
}

export async function upsertArticle(article: { title: string; content: string; slug: string; summary: string }) {
	const session = await auth();
	if (!session || !["editor", "admin"].includes(session.user.role)) redirect("/unauthorized");

	await db.post.upsert({
		create: { ...article, image: "", authorId: session?.user.id },
		update: article,
		where: { slug: article.slug },
	});
}
