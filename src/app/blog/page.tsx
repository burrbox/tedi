import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/serverActions";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { format } from "date-fns";
import { type Metadata } from "next";
import { env } from "@/env";
import { auth } from "@/server/auth";
import { getPostAuthor } from "@/lib/utils";
import { type WebPage, type WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";
import { PenLine, ArrowRight } from "lucide-react";

export const revalidate = 300;

export const metadata: Metadata = {
	title: { default: "Blog", template: "%s - Blog" },
	description: "Read the latest articles from the Environmental Defense Initiative.",
	keywords: ["blog", "articles", "news", "environment", "climate", "sustainability"],
	alternates: { canonical: `${env.URL}/blog` },
	openGraph: {
		type: "website",
		siteName: "The Environmental Defense Initiative",
		title: "Blog - TEDI",
		description: "Read the latest articles from the Environmental Defense Initiative.",
		url: `${env.URL}/blog`,
	},
};

const jsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "The Environmental Defense Initiative Blog",
	description: "Read the latest articles from the Environmental Defense Initiative.",
	url: `${env.URL}/blog`,
};

export default async function Blog() {
	const allPosts = await getPosts();
	const session = await auth();

	const featuredPost = allPosts[0]!;
	const posts = allPosts.slice(1);

	return (
		<>
			<JsonLd data={jsonLd} />

			{/* Submit article banner */}
			<section className="w-full bg-gradient-to-b from-stone-100 to-white pt-24 dark:from-stone-800 dark:to-stone-950">
				<div className="container mx-auto max-w-6xl px-4 sm:px-6">
					{session?.user && ["editor", "admin"].includes(session.user.role) && (
						<div className="mb-4">
							<Link
								className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white hover:bg-green-700"
								href="/blog/admin/edit/new"
							>
								New article
							</Link>
						</div>
					)}
					<div
						className="flex flex-col items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:flex-row dark:border-stone-700/50 dark:bg-stone-800/60 dark:backdrop-blur-sm"
						data-aos="fade-in"
					>
						<div className="flex items-start gap-3">
							<div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
								<PenLine className="h-5 w-5 text-green-600 dark:text-green-400" />
							</div>
							<div>
								<h3 className="font-semibold text-stone-800 dark:text-stone-100">Want to take action?</h3>
								<p className="text-sm text-stone-500 dark:text-stone-400">
									We&apos;ve opened our blog submissions to anyone interested. Try your hand at writing an article!
								</p>
							</div>
						</div>
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLScPyNKW82l-B3YJypShgVB6m6WKZ4dqpyFsuzFvKhVdQPbmaA/viewform"
							className="inline-flex shrink-0 items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
						>
							Submit an Article
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* Featured post */}
			<section className="w-full bg-gradient-to-b from-white to-stone-50 py-8 dark:from-stone-950 dark:to-stone-900">
				<div className="container mx-auto max-w-6xl px-4 sm:px-6">
					{featuredPost.image && (
						<div
							className="relative overflow-hidden rounded-2xl shadow-xl"
							style={{ height: "clamp(360px, 50vh, 560px)" }}
							data-aos="fade-in"
						>
							<Image
								className="h-full w-full object-cover"
								src={featuredPost.image}
								width={1440}
								height={577}
								priority
								alt={featuredPost.title}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
								<div className="max-w-2xl space-y-3">
									<span className="inline-block rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white">
										Featured
									</span>
									<h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
										{featuredPost.title}
									</h1>
									<div className="flex items-center gap-3">
										<CloudinaryClientWrapper
											className="shrink-0 rounded-full"
											src={getPostAuthor(featuredPost).image ?? "utter"}
											width={32}
											height={32}
											crop="thumb"
											gravity="face"
											alt={getPostAuthor(featuredPost).name ?? "Anonymous Author"}
										/>
										<span className="text-sm text-stone-200">
											<span className="font-medium">{getPostAuthor(featuredPost).name}</span>
											<span className="mx-2 opacity-60">·</span>
											<time dateTime={featuredPost.createdAt.toISOString()}>
												{format(featuredPost.createdAt, "MMM d, yyyy")}
											</time>
										</span>
									</div>
									<p className="line-clamp-2 text-sm text-stone-300 md:text-base">{featuredPost.summary}</p>
									<div className="flex flex-wrap gap-3 pt-1">
										<Link
											href={`/blog/${featuredPost.slug}`}
											className="inline-flex h-9 items-center rounded-md bg-green-600 px-5 text-sm font-medium text-white transition-colors hover:bg-green-700"
										>
											Read More
										</Link>
										{session?.user && ["editor", "admin"].includes(session.user.role) && (
											<Link
												className="inline-flex h-9 items-center rounded-md border border-white/30 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
												href={`/blog/admin/edit/${featuredPost.slug}`}
											>
												Edit article
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>

			{/* Articles list */}
			<section className="w-full bg-stone-50 pb-16 pt-8 dark:bg-stone-900">
				<div className="container mx-auto max-w-6xl px-4 sm:px-6">
					<h2 className="mb-2 text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-100">Recent Articles</h2>
					<div className="mb-8 h-1 w-12 rounded-full bg-green-500" />
					<div className="grid gap-8 sm:grid-cols-2">
						{posts.map((post, postIndex) => (
							<article
								key={postIndex}
								className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-stone-700 dark:bg-stone-800"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								{post.image && (
									<Link className="block overflow-hidden" href={`/blog/${post.slug}`}>
										<div className="relative h-48 w-full">
											<Image
												className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
												src={post.image}
												fill
												sizes="(max-width: 640px) 100vw, 50vw"
												alt={post.title}
											/>
										</div>
									</Link>
								)}
								<div className="flex flex-1 flex-col p-6">
									<Link href={`/blog/${post.slug}`} className="hover:underline">
										<h3 className="mb-2 text-lg font-semibold text-stone-800 dark:text-stone-100">{post.title}</h3>
									</Link>
									<p className="mb-4 flex-1 text-sm text-stone-500 dark:text-stone-400">{post.summary}</p>
									<footer className="flex items-center gap-3">
										<CloudinaryClientWrapper
											className="shrink-0 rounded-full"
											src={getPostAuthor(post).image ?? "utter"}
											width={32}
											height={32}
											crop="thumb"
											gravity="face"
											alt={getPostAuthor(post).name ?? "Anonymous Author"}
										/>
										<div className="text-sm">
											<span className="font-medium text-stone-700 dark:text-stone-200">
												{getPostAuthor(post).name ?? "Anonymous Author"}
											</span>
											<span className="mx-1 text-stone-400">·</span>
											<time className="text-stone-400 dark:text-stone-500" dateTime={post.createdAt.toISOString()}>
												{format(post.createdAt, "MMM d, yyyy")}
											</time>
										</div>
									</footer>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
