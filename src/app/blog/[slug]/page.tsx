import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Mdx } from "@/components/mdx/mdx";
// import RelatedPosts from "@/components/related-posts-02";
import { getPosts } from "@/lib/serverActions";
import { team } from "@/lib/constants";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { format } from "date-fns";

export async function generateStaticParams() {
	return (await getPosts()).map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const post = (await getPosts()).find((post) => post.slug === params.slug);

	if (!post) return;

	const { title, summary: description } = post;

	return {
		title,
		description,
	};
}

export default async function SinglePost({ params }: { params: { slug: string } }) {
	const post = (await getPosts()).find((post) => post.slug === params.slug);
	if (!post) notFound();

	const author = team.find((member) => member.name.toLowerCase() === post.author) ?? team[1]!;

	return (
		<>
			<section className="relative">
				{/* Background image */}
				{post.image && (
					<div className="h-128 absolute inset-0 box-content pt-16">
						<Image
							className="absolute inset-0 h-full w-full object-cover opacity-25"
							src={post.image}
							width={1440}
							height={577}
							priority
							alt={post.title}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true" />
					</div>
				)}

				<div className="relative mx-auto max-w-6xl px-4 sm:px-6 dark:bg-stone-900">
					<div className="pb-12 pt-32 md:pb-20 md:pt-40">
						<div className="mx-auto max-w-3xl">
							<article>
								{/* Article header */}
								<header className="mb-8">
									{/* Title and excerpt */}
									<div className="text-center md:text-left">
										<h1 className="h1 font-red-hat-display mb-4 dark:text-green-600" data-aos="fade-down">
											{post.title}
										</h1>
										<p className="text-xl text-gray-600 dark:text-stone-300" data-aos="fade-down" data-aos-delay="150">
											{post.summary}
										</p>
									</div>
									{/* Article meta */}
									<div className="mt-5 md:flex md:items-center md:justify-between">
										{/* Author meta */}
										<div className="flex items-center justify-center" data-aos="fade-down" data-aos-delay="300">
											<a href="#0">
												<CloudinaryClientWrapper
													className="mr-3 shrink-0 rounded-full"
													src={author.image ?? "/avatar.jpg"}
													width={32}
													height={32}
													alt={author.name ?? "Anonymous Author"}
												/>
											</a>
											<div>
												<span className="text-gray-600 dark:text-blue-400">By </span>
												<a className="font-medium text-gray-800 hover:underline dark:text-blue-300" href="#0">
													{author.name ?? "Anonymous Author"}
												</a>
												<span className="text-gray-600 dark:text-blue-400">
													{" · "}
													<time dateTime={post.createdAt.toISOString()}>{format(post.createdAt, "MMM d, yyyy")}</time>
												</span>
											</div>
										</div>
									</div>
								</header>
								<hr
									className="mb-8 h-px w-5 border-0 bg-gray-400 pt-px dark:bg-white"
									data-aos="fade-down"
									data-aos-delay="450"
								/>

								{/* Article content */}
								<div className="mb-8" data-aos="fade-up" data-aos-delay="450">
									<Mdx content={post.content} />
								</div>
							</article>
							<div className="dark:bg-stone-900">
								<div className="mx-auto flex flex-col justify-center">
									<h3 className="text-wrap text-blue-500 dark:text-blue-400">
										Stay updated and active by following the Environmental Defense Initiative on Medium and all our
										social media platforms!
									</h3>
									<div className="py-6 text-black dark:text-white">
										<ul className="mx-auto mb-4 flex flex-wrap justify-center gap-2 md:order-2 md:mb-0 md:ml-4 md:gap-4">
											<button className="w-32 rounded-xl bg-green-700 py-2">
												<label>
													<a href="https://www.instagram.com/environmentaldefenseinitiative/">Instagram</a>
												</label>
											</button>
											<button className="w-32 rounded-xl bg-green-700 py-2">
												<label>
													<a href="https://medium.com/@environmentaldefenseinitiative">Medium</a>
												</label>
											</button>
											<button className="w-32 rounded-xl bg-green-700 py-2">
												<label>
													<a href="https://www.youtube.com/channel/UCLJIczzKZWeqsa2Pmg55F6g">YouTube</a>
												</label>
											</button>
											<button className="w-32 rounded-xl bg-green-700 py-2">
												<label>
													<a href="https://www.tiktok.com/@tediactivism">TikTok</a>
												</label>
											</button>
										</ul>
									</div>
									<div>
										<p className="text-green-500">
											Author: <span>{team.find((member) => member.name.toLowerCase() === post.author)?.name}</span>
											<br />
											Editor: <span>{team.find((member) => member.name.toLowerCase() === post.author)?.name}</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <RelatedPosts /> */}
		</>
	);
}
