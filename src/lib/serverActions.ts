import { db } from "@/server/db";

export async function getPosts() {
	return db.post.findMany({ include: { author: true } });
}
