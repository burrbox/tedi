import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
// import PostDate from "@/components/post-date";
import { Mdx } from "@/components/mdx/mdx";
// import RelatedPosts from "@/components/related-posts-02";
import { getPosts } from "@/lib/serverActions";
import { team } from "@/lib/constants";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";

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

				<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
					<div className="pb-12 pt-32 md:pb-20 md:pt-40">
						<div className="mx-auto max-w-3xl">
							<article>
								{/* Article header */}
								<header className="mb-8">
									{/* Title and excerpt */}
									<div className="text-center md:text-left">
										<h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">
											{post.title}
										</h1>
										<p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
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
												<span className="text-gray-600 dark:text-gray-400">By </span>
												<a className="font-medium text-gray-800 hover:underline dark:text-gray-300" href="#0">
													{author.name ?? "Anonymous Author"}
												</a>
												<span className="text-gray-600 dark:text-gray-400">
													{" "}
													{/* · <PostDate dateString={post.createdAt} /> */}
												</span>
											</div>
										</div>
									</div>
								</header>
								<hr
									className="mb-8 h-px w-5 border-0 bg-gray-400 pt-px dark:bg-gray-500"
									data-aos="fade-down"
									data-aos-delay="450"
								/>

								{/* Article content */}
								<div
									className="prose mb-8 prose-td:border-2 prose-td:border-gray-500 prose-td:p-2"
									data-aos="fade-up"
									data-aos-delay="450">
									<Mdx content={post.content} />
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
			{/* <RelatedPosts /> */}
		</>
	);
}
