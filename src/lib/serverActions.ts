import { db } from "@/server/db";

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
