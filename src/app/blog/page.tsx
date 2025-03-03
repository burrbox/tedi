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
				<div className="container mx-auto mb-8 justify-center px-5 md:px-10 lg:px-20">
					<div
						className="flex flex-col rounded-xl border-2 border-gray-500 bg-white px-2 py-3 text-center text-gray-950 md:flex-row md:px-5 md:py-5 md:text-left lg:px-10 dark:bg-gray-950 dark:text-gray-50"
						data-aos="fade-in"
						data-aos-delay="100"
					>
						<div>
							<h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">Want to take action?</h3>
							<p>
								We&apos;ve opened our blog submissions to anyone interested!
								<br />
								Try your hand at writing an article; it may even be featured on our website!
							</p>
						</div>
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLScPyNKW82l-B3YJypShgVB6m6WKZ4dqpyFsuzFvKhVdQPbmaA/viewform"
							className="mx-auto my-3 content-center justify-center rounded-xl bg-blue-400 px-3 py-4 text-gray-950 duration-200 hover:scale-105 md:my-auto"
						>
							Submit an Article
						</Link>
					</div>
				</div>
				<div className="lg:mb-18 mx-auto mb-12 max-w-6xl md:mb-16">
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
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
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
