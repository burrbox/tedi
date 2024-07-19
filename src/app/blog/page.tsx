import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/serverActions";
import { type Prisma } from "@prisma/client";
import { team } from "@/lib/constants";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { format } from "date-fns";
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
			<section className="w-full py-12 md:py-16 lg:py-20">
				{/* Header in case we ever want to use it */}
				{/*<div className="relative h-[400px] w-full bg-fixed pb-10">
					<CloudinaryClientWrapper
						className="relative h-full w-full object-cover"
						src="nature/forest"
						alt="background image"
						width={1440}
						height={1080}
					/>
					<div className="absolute inset-0 mx-auto flex justify-center pt-10">
						<div
							className="h-1/2 w-1/2 rounded-xl bg-white px-20 py-5 text-center dark:bg-emerald-950/85"
							data-aos="fade-down">
							<h1 className="text-6xl dark:text-white">Blogs</h1>
							<p className="text-wrap py-10 dark:text-green-500">
								Theres a lot of text that goes here but I don't want to go look for it right now. This is just a demo.
							</p>
						</div>
					</div>
				</div>*/}
				<div className="mx-auto mb-3 max-w-6xl md:mb-4 lg:mb-5">
					<input
						className="size-full rounded-full bg-green-100 py-2 pl-4 text-blue-900 dark:bg-white dark:text-black"
						placeholder="Search..."
					/>
					<button className="bg-gren-500 w-1/8 inline rounded-full">Search</button>
				</div>
				<div className="lg:mb-18 mx-auto mb-12 max-w-6xl md:mb-16">
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
										<h1 className="mb-3 text-3xl font-bold text-blue-600 md:mb-4 md:text-4xl lg:mb-5 lg:text-5xl dark:text-blue-400">
											{featuredPost.title}
										</h1>
										<div className="mb-4 flex items-center text-sm text-black md:mb-5 md:text-base lg:mb-6 lg:text-lg dark:text-white">
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
										<p className="mb-6 line-clamp-3 text-base text-gray-600 md:mb-8 md:text-lg lg:mb-10 lg:text-xl dark:text-stone-300">
											{featuredPost.summary}
										</p>
										<div>
											<Link
												href={`/blog/${featuredPost.slug}`}
												className="rounded-xl border-2 border-green-600 bg-green-600 py-2 text-white duration-300 hover:bg-white hover:text-green-600">
												<label className="px-10 py-2 md:px-16">Read More</label>
											</Link>
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
								<h2 className="h3 font-red-hat-display mb-4 dark:text-green-500">Latest</h2>
								<hr className="border-1 mb-4 border-green-500 pb-4 md:pb-10" />

								{/* Articles container */}
								<div
									className="grid items-start gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8"
									data-aos="fade-down"
									data-aos-delay="200">
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
