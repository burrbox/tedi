"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function getPosts() {
	return [
		{
			title: "The Art of Writing",
			summary: "A quick guide to writing well",
			content: `This is _the_ content **of** the post \n
# hello world
[hi](https://example.com)`,
			slug: "the-art-of-writing",
			image: "/images/blog/01.jpg",
			author: { name: "John Doe" as string | null, image: "/images/team/01.jpg" as string | null },
			createdAt: new Date("2022-01-01"),
		},
	].concat(await db.post.findMany({ include: { author: true } }));
}

export async function addEmailSubscription(email: string) {
	await db.subscription.create({ data: { email: z.string().email().parse(email) } });
}

export async function createArticle(article: { title: string; content: string; slug: string; summary: string }) {
	const session = await auth();
	if (!session || ["editor", "admin"].includes(session.user.role)) redirect("/unauthorized");

	await db.post.create({ data: { ...article, image: "", authorId: session?.user.id } });
}
