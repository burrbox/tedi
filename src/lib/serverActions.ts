export async function getPosts() {
	const posts = [
		{
			title: "The Art of Writing",
			summary: "A quick guide to writing well",
			content: `This is _the_ content **of** the post \n
# hello world
[hi](https://example.com)`,
			slug: "the-art-of-writing",
			image: "/images/blog/01.jpg",
			authorImg: "/images/team/01.jpg",
			author: "John Doe",
			publishedAt: "2022-01-01",
		},
	];
	return posts;
}
