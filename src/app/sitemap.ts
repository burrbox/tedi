import { env } from "@/env";
import { getPosts } from "@/lib/serverActions";
import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getPosts();
	return (
		[
			{
				url: `${env.URL}`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 1,
			},
			{
				url: `${env.URL}/about`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.8,
			},
			{
				url: `${env.URL}/petitions`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 1,
			},
			{
				url: `${env.URL}/signin`,
				lastModified: new Date(),
				changeFrequency: "yearly",
				priority: 0.1,
			},
			{
				url: `${env.URL}/blog`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 1,
			},
		] as MetadataRoute.Sitemap
	).concat(
		posts.map((post) => ({
			url: `${env.URL}/blog/${post.slug}`,
			lastModified: post.updatedAt,
			changeFrequency: "never" as const,
			priority: 0.8,
		})),
	);
}
