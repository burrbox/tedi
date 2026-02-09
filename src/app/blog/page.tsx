import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/serverActions";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { format } from "date-fns";
import { type Metadata } from "next";
import { env } from "@/env";
import { BlogSearch } from "./blogSearch";
import { auth } from "@/server/auth";
import { getPostAuthor } from "@/lib/utils";
import { type WebPage, type WebSite, type WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
// import RelatedPosts from "@/components/related-posts-01";

export const revalidate = 300; // 5 minutes

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
			{/* Featured post */}
			<section className="w-full pt-6">
				<div className="relative mx-auto mb-3 max-w-6xl justify-center space-y-4 md:mb-4 lg:mb-5">
					{/* <BlogSearch articles={allPosts} /> */}
					{session?.user && ["editor", "admin"].includes(session.user.role) && (
						<div>
							<Link
								className="my-4 rounded-xl bg-green-600 px-4 py-2 text-white hover:bg-green-700"
								title="Edit this article"
								href="/blog/admin/edit/new"
							>
								New article
							</Link>
						</div>
					)}
				</div>
				<div className="container mx-auto mb-8 max-w-7xl justify-center">
					<div
						className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-8 shadow-lg md:flex-row md:items-center md:gap-8 md:p-10 lg:p-12 dark:from-green-950/40 dark:via-blue-950/40 dark:to-emerald-950/40"
						data-aos="fade-in"
						data-aos-delay="100"
					>
						{/* Decorative background elements */}
						<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10" />
						<div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" />

						<div className="relative z-10 flex-1 text-center md:text-left">
							<div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="h-7 w-7 text-green-600 dark:text-green-400"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									/>
								</svg>
								<h3 className="text-3xl font-bold text-green-700 dark:text-green-400">Want to take action?</h3>
							</div>
							<p className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
								We&apos;ve opened our blog submissions to anyone interested!
								<br />
								<span className="font-medium">Try your hand at writing an article</span> — it may even be featured on
								our website!
							</p>
						</div>
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLScPyNKW82l-B3YJypShgVB6m6WKZ4dqpyFsuzFvKhVdQPbmaA/viewform"
							className="group relative z-10 mx-auto flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl md:mx-0 md:shrink-0"
						>
							<span className="relative z-10">Submit an Article</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2.5}
								stroke="currentColor"
								className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>
							<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						</Link>
					</div>
				</div>
				<div className="lg:mb-18 mx-auto mb-12 max-w-7xl md:mb-16">
					{featuredPost.image && (
						<div
							className="relative mx-5 h-[400px] overflow-hidden rounded-lg md:h-[500px] lg:h-[600px]"
							data-aos="fade-in"
							data-aos-delay="200"
						>
							<Image
								className="relative inset-0 h-full w-full object-cover opacity-50"
								src={featuredPost.image}
								width={1440}
								height={577}
								priority
								alt={featuredPost.title}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent dark:from-black/50" />
							<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
								<div className="max-w-xl">
									<div className="mb-2 md:mb-3 lg:mb-4">
										<span className="inline-block rounded-full bg-green-600 px-3 py-1 font-medium text-white">
											Featured
										</span>
										<h1 className="mb-3 text-3xl font-bold text-blue-600 md:mb-4 md:text-4xl lg:mb-5 lg:text-5xl dark:text-blue-400">
											{featuredPost.title}
										</h1>
										<div className="mb-4 flex items-center text-sm text-black md:mb-5 md:text-base lg:mb-6 lg:text-lg dark:text-white">
											<div className="mr-4">
												<CloudinaryClientWrapper
													className="mr-3 shrink-0 rounded-full"
													src={getPostAuthor(featuredPost).image ?? "utter"}
													width={32}
													height={32}
													crop="thumb"
													gravity="face"
													alt={getPostAuthor(featuredPost).name ?? "Anonymous Author"}
												/>
												<span>
													<span className="font-medium">{getPostAuthor(featuredPost).name}</span>
													<span className="mx-2">•</span>
													<time dateTime={featuredPost.createdAt.toISOString()}>
														{format(featuredPost.createdAt, "MMM d, yyyy")}
													</time>
												</span>
											</div>
										</div>
										<p className="mb-6 line-clamp-3 text-base text-gray-600 md:mb-8 md:text-lg lg:mb-10 lg:text-xl dark:text-stone-300">
											{featuredPost.summary}
										</p>
										<div className="">
											<Link
												href={`/blog/${featuredPost.slug}`}
												className="rounded-xl border-2 border-green-600 bg-green-600 px-10 py-2 text-white duration-300 hover:bg-white hover:text-green-600 md:px-16"
											>
												Read More
											</Link>
											{session?.user && ["editor", "admin"].includes(session.user.role) && (
												<span data-aos="fade-in" data-aos-delay="450">
													<Link
														className="mx-5 rounded-xl border-2 border-blue-600 bg-blue-600 px-5 py-2 text-white duration-300 hover:bg-stone-300 hover:text-blue-600"
														title="Edit this article"
														href={`/blog/admin/edit/${featuredPost.slug}`}
													>
														Edit this article
													</Link>
												</span>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>

			{/* <RelatedPosts /> */}

			{/* Articles list */}
			<section className="bg-white dark:bg-stone-900">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<div className="pb-12 md:pb-20">
						<div className="lg:flex lg:justify-between">
							{/* Main content */}
							<div className="lg:grow">
								{/* Section title */}
								<h2 className="h3 font-red-hat-display mb-4 text-center dark:text-green-500">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="mx-3 inline size-6 animate-bounce"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
									</svg>
									Recent Articles
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="mx-3 inline size-6 animate-bounce"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
									</svg>
								</h2>

								<hr className="border-1 mb-4 border-green-500 pb-4 md:pb-10" />

								{/* Articles container */}
								<div className="grid items-start gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8">
									{posts.map((post, postIndex) => (
										<article
											key={postIndex}
											className="flex h-full flex-col rounded-xl bg-blue-100 p-10 duration-300 hover:bg-blue-200 dark:bg-emerald-950 dark:hover:bg-emerald-900"
											data-aos="fade-down"
											data-aos-delay="200"
										>
											<header>
												{post.image && (
													<Link className="mb-4 block" href={`/blog/${post.slug}`}>
														<figure className="pb-9/16 relative h-0">
															<Image
																className="absolute inset-0 h-full w-full object-cover"
																src={post.image}
																width={352}
																height={198}
																alt={post.title}
															/>
														</figure>
													</Link>
												)}
												<Link className="hover:underline" href={`/blog/${post.slug}`}>
													<h3 className="h4 font-red-hat-display mb-2 dark:text-white">{post.title}</h3>
												</Link>
											</header>
											<p className="grow text-gray-600 dark:text-stone-300">{post.summary}</p>
											<footer className="mt-4 flex items-center">
												<a href="#0">
													<CloudinaryClientWrapper
														className="mr-3 rounded-full"
														src={getPostAuthor(post).image ?? "utter"}
														width={32}
														height={32}
														crop="thumb"
														gravity="face"
														alt={getPostAuthor(post).name ?? "Anonymous Author"}
													/>
												</a>
												<div className="text-sm text-stone-400">
													By{" "}
													<a className="font-medium text-gray-800 hover:underline dark:text-stone-200" href="#0">
														{getPostAuthor(post).name ?? "Anonymous Author"}
													</a>
													{" · "}
													<span className="text-gray-500 dark:text-blue-400">
														<time dateTime={post.createdAt.toISOString()}>{format(post.createdAt, "MMM d, yyyy")}</time>
													</span>
												</div>
											</footer>
										</article>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
