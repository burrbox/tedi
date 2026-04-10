import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Mdx } from "@/components/mdx/mdx";
// import RelatedPosts from "@/components/related-posts-02";
import { getPost, getPosts } from "@/lib/serverActions";
import { fullTeam } from "@/lib/constants";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { format } from "date-fns";
import { env } from "@/env";
import Link from "next/link";
import { auth } from "@/server/auth";
import { TwitterXIcon } from "@/components/icons";
import { getPostAuthor, getPostEditor } from "@/lib/utils";
import { type Article, type WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";
import { Eye, Pencil, PenLine, ArrowRight } from "lucide-react";
import { ViewTracker } from "./view-tracker";

export const revalidate = 30;

export async function generateStaticParams() {
	return (await getPosts()).map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	_parent: ResolvingMetadata,
): Promise<Metadata | undefined> {
	const post = (await getPosts()).find((post) => post.slug === params.slug);

	if (!post) return;

	const { title, summary: description } = post;

	return {
		title,
		description,
		alternates: { canonical: `${env.URL}/blog/${params.slug}` },
		keywords: ["blog", "articles", "news", "environment", "climate", "sustainability"],
		authors: [{ name: getPostAuthor(post)?.name ?? "Anonymous Author", url: getPostAuthor(post)?.website }],
		openGraph: {
			siteName: "The Environmental Defense Initiative",
			type: "article",
			title,
			description,
			url: `${env.URL}/blog/${params.slug}`,
		},
	};
}

export default async function SinglePost({ params }: { params: { slug: string } }) {
	const post = await getPost(params.slug);
	if (!post) notFound();

	const author = getPostAuthor(post) ?? fullTeam[0]!;
	const editor = getPostEditor(post) ?? fullTeam[0]!;

	const session = await auth();

	const jsonLd: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.summary,
		author: { "@type": "Person", name: author.name ?? "Anonymous Author", email: author.email ?? undefined },
		image: post.image ? post.image : undefined,
		datePublished: post.createdAt.toISOString(),
		dateModified: post.updatedAt.toISOString(),
	};

	return (
		<>
			<JsonLd data={jsonLd} />
			<ViewTracker slug={post.slug} />

			{/* Hero image */}
			{post.image && (
				<div className="relative h-[50vh] min-h-[380px] w-full">
					<Image
						className="h-full w-full object-cover"
						src={post.image}
						fill
						priority
						alt={post.title}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
					<div className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-16">
						<div className="container mx-auto max-w-3xl">
							<h1 className="mb-3 text-3xl font-bold leading-tight text-white drop-shadow md:text-4xl lg:text-5xl">
								{post.title}
							</h1>
							<p className="mb-4 line-clamp-2 text-base text-white/80 md:text-lg">{post.summary}</p>
							{/* Meta row */}
							<div className="flex flex-wrap items-center gap-3">
								<CloudinaryClientWrapper
									className="shrink-0 rounded-full ring-2 ring-white/40"
									src={author.image ?? "utter"}
									width={32}
									height={32}
									crop="thumb"
									gravity="face"
									alt={author.name ?? "Anonymous Author"}
								/>
								<span className="text-sm text-white/90">
									<span className="font-medium">{author.name ?? "Anonymous Author"}</span>
									<span className="mx-2 opacity-60">·</span>
									<time dateTime={post.createdAt.toISOString()}>{format(post.createdAt, "MMM d, yyyy")}</time>
									<span className="mx-2 opacity-60">·</span>
								</span>
								<span className="flex items-center gap-1 text-sm text-white/70">
									<Eye className="h-3.5 w-3.5" />
									{post.views.toLocaleString()}
								</span>
								{session?.user && ["editor", "admin"].includes(session.user.role) && (
									<Link
										href={`/blog/admin/edit/${post.slug}`}
										className="ml-auto flex items-center gap-1.5 rounded-md bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25"
									>
										<Pencil className="h-3.5 w-3.5" />
										Edit
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			<section className="bg-white dark:bg-stone-950">
				<div className="container mx-auto max-w-3xl px-4 py-10">
					{/* Submit article banner */}
					<div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-stone-200 bg-stone-50 p-5 sm:flex-row sm:items-center dark:border-stone-700/50 dark:bg-stone-800/60">
						<div className="flex items-start gap-3">
							<div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
								<PenLine className="h-4 w-4 text-green-600 dark:text-green-400" />
							</div>
							<div>
								<p className="font-semibold text-stone-800 dark:text-stone-100">Like these articles?</p>
								<p className="text-sm text-stone-500 dark:text-stone-400">
									Want to try your hand at writing your own? We&apos;ve opened blog submissions to anyone.
								</p>
							</div>
						</div>
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLScPyNKW82l-B3YJypShgVB6m6WKZ4dqpyFsuzFvKhVdQPbmaA/viewform"
							className="inline-flex shrink-0 items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
						>
							Submit an Article
							<ArrowRight className="h-3.5 w-3.5" />
						</Link>
					</div>

					{/* Article content */}
					<article>
						<div data-aos="fade-up">
							<Mdx content={post.content} />
						</div>
					</article>

					{/* Divider */}
					<hr className="my-10 border-stone-200 dark:border-stone-700" />

					{/* Social share */}
					<div className="mb-8 flex items-center gap-4">
						<span className="text-sm text-stone-500 dark:text-stone-400">Share:</span>
						<Link href={`https://twitter.com/intent/tweet?text=${post.slug}`}>
							<TwitterXIcon className="h-5 w-5 fill-stone-600 dark:fill-stone-400" name="Share on X / Twitter" />
						</Link>
					</div>

					{/* Follow us */}
					<div className="rounded-xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-700 dark:bg-stone-800">
						<h3 className="mb-1 font-semibold text-stone-800 dark:text-stone-100">Stay connected</h3>
						<p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
							Follow the Environmental Defense Initiative on our social platforms.
						</p>
						<div className="flex flex-wrap gap-2">
							{[
								{ label: "Instagram", href: "https://www.instagram.com/environmentaldefenseinitiative/" },
								{ label: "Medium", href: "https://medium.com/@environmentaldefenseinitiative" },
								{ label: "YouTube", href: "https://www.youtube.com/@EnvironmentalDefenseInitiative" },
								{ label: "TikTok", href: "https://www.tiktok.com/@tediactivism" },
							].map(({ label, href }) => (
								<Link
									key={label}
									href={href}
									className="rounded-md bg-green-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
								>
									{label}
								</Link>
							))}
						</div>
					</div>

					{/* Author / editor credit */}
					<div className="mt-6 text-sm text-stone-400 dark:text-stone-500">
						Written by <span className="font-medium text-stone-600 dark:text-stone-300">{author.name}</span>
						{editor.name !== author.name && (
							<>
								{" · "}Edited by <span className="font-medium text-stone-600 dark:text-stone-300">{editor.name}</span>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
