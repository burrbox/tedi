import { NextResponse } from "next/server";
import { env } from "@/env";
import { getPosts } from "@/lib/serverActions";

export async function GET() {
	const articles = (await getPosts())
		.map((article) => {
			const url = `${env.URL}/blog/${article.slug}`;

			return `<item>
				<title>${article.title}</title>
				<link>${url}</link>
				<guid>${url}</guid>
				<pubDate>${article.createdAt.toUTCString()}</pubDate>
				${article.summary && `<description>${article.summary}</description>`}
				<content:encoded><![CDATA[${article.content}]]></content:encoded>
			</item>`;
		})
		.join("");

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
		<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
			<title>The Environmental Defense Initiative</title>
			<description>A nonprofit to defend the environment</description>
			<link>${env.URL}</link>
			<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
			${articles}
			</channel>
		</rss>`;

	return new NextResponse(feed, {
		status: 200,
		headers: { "Content-Type": "text/xml", "Cache-Control": "s-maxage=600" },
	});
}
