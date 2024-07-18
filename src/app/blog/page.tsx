import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/serverActions";
import { type Prisma } from "@prisma/client";
import { team } from "@/lib/constants";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
// import PostDate from "@/components/post-date";
// import RelatedPosts from "@/components/related-posts-01";
// import PostItem from "@/components/post-item";

export const metadata = {
	title: "Blog - The Environmental Defense Initiative",
	description: "Read the latest articles from the Environmental Defense Initiative.",
};

const getPostAuthor = (post: Prisma.PostGetPayload<null>) =>
	team.find((member) => member.name.toLowerCase() === post.author) ?? team[1]!;

export default async function Blog() {
	// Sort posts by date
	const allPosts = await getPosts();

	const featuredPost = allPosts[0]!;
	const posts = allPosts.slice(1);

	return (
		<>
			{/* Featured post */}
			<section className="w-full py-12 dark:bg-stone-900 md:py-16 lg:py-20">
				<div className="mx-auto mb-12 max-w-6xl md:mb-16 lg:mb-20">
					{featuredPost.image && (
						<div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px] lg:h-[600px]">
							<Image
								className="relative inset-0 h-full w-full object-cover opacity-50"
								src={featuredPost.image}
								width={1440}
								height={577}
								priority
								alt={featuredPost.title}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-black/50" />
							<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
								<div className="max-w-xl">
									<div className="mb-2 md:mb-3 lg:mb-4">
										<span className="inline-block rounded-full bg-green-600 px-3 py-1 font-medium text-white">
											Featured
										</span>
										<h1 className="mb-3 text-3xl font-bold text-blue-600 dark:text-blue-400 md:mb-4 md:text-4xl lg:mb-5 lg:text-5xl">
											{featuredPost.title}
										</h1>
										<div className="mb-4 flex items-center text-sm text-black dark:text-white md:mb-5 md:text-base lg:mb-6 lg:text-lg">
											<div className="mr-4">
												<CloudinaryClientWrapper
													className="mr-3 shrink-0 rounded-full"
													src={getPostAuthor(featuredPost).image ?? "/avatar.jpg"}
													width={32}
													height={32}
													crop="thumb"
													gravity="face"
													alt={getPostAuthor(featuredPost).name ?? "Anonymous Author"}
												/>
												<span>
													<span className="font-medium">{getPostAuthor(featuredPost).name}</span>
													<span className="mx-2">•</span>
													<span className="text-muted-foreground">created at</span>
												</span>
											</div>
										</div>
										<p className="mb-6 line-clamp-3 text-base text-gray-600 dark:text-stone-300 md:mb-8 md:text-lg lg:mb-10 lg:text-xl">
											{featuredPost.summary}
										</p>
										<div>
											<button className="rounded-xl border-2 border-green-600 bg-green-600 text-white duration-300 hover:bg-white hover:text-green-600">
												<label className="px-10 py-2 md:px-16">Read More</label>
											</button>
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
							<div className="lg:grow" data-aos="fade-down" data-aos-delay="200">
								{/* Section title */}
								<h2 className="h3 font-red-hat-display mb-4 dark:text-green-500">Latest</h2>
								<hr className="border-1 mb-4 border-green-500" />

								{/* Articles container */}
								<div className="grid items-start gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8">
									{posts.map((post, postIndex) => (
										<article
											key={postIndex}
											className="flex h-full flex-col rounded-xl bg-gray-100 p-10 duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
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
														src={getPostAuthor(post).image ?? "/avatar.jpg"}
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
													</a>{" "}
													· <span className="text-gray-500">{/* <PostDate dateString={post.createdAt} /> */}</span>
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
