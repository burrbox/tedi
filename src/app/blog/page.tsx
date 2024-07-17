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
			<section>
				<div
					className="relative flex h-1/2 w-full"
					style={{
						backgroundImage:
							"url(https://static.wixstatic.com/media/7cc6b0344c9440818bad598dd590ed27.jpg/v1/fill/w_1587,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7cc6b0344c9440818bad598dd590ed27.jpg)",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						width: "100vw",
						minHeight: "47vh",
					}}>
					<div className="container relative mx-auto h-full w-full px-4">
						<div className="absolute inset-0 mx-auto mt-12 w-fit md:mt-16 lg:mt-20 2xl:mt-32" data-aos="fade-down">
							<div className="flex flex-col justify-center rounded-xl bg-white p-10">
								<h1 className="text-center text-6xl text-blue-600">Blogs</h1>
								<h2 className="max-w-96 text-wrap pt-6 text-center text-lg text-green-600">
									Environmental education is the foundation of long-term solutions and sustainable action.
									<br />
									Learn about current environmental issues and how to take action in your own communities.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Featured post */}
			<section className="relative h-1/2">
				{/* Background image */}
				{featuredPost.image && (
					<div className="absolute inset-0 -z-10 box-content h-full pt-16">
						<Image
							className="absolute inset-0 h-full w-full object-cover opacity-25"
							src={featuredPost.image}
							width={1440}
							height={577}
							priority
							alt={featuredPost.title}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true" />
					</div>
				)}
				<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
					<div className="pb-12 pt-32 md:pb-16 md:pt-40">
						{/* Featured article */}
						<div className="max-w-3xl" data-aos="fade-down">
							<article>
								<header>
									{/* Title and excerpt */}
									<div className="text-center md:text-left">
										<Link href={`/blog/${featuredPost.slug}`}>
											<h1 className="h1 font-red-hat-display mb-4">{featuredPost.title}</h1>
										</Link>
										<p className="text-xl text-gray-600 dark:text-gray-400">{featuredPost.summary}</p>
									</div>
									{/* Article meta */}
									<div className="mt-5 md:flex md:items-center md:justify-between">
										{/* Author meta */}
										<div className="flex items-center justify-center">
											<a href="#0">
												<CloudinaryClientWrapper
													className="mr-3 shrink-0 rounded-full"
													src={getPostAuthor(featuredPost).image ?? "/avatar.jpg"}
													width={32}
													height={32}
													alt={getPostAuthor(featuredPost).name ?? "Anonymous Author"}
												/>
											</a>
											<div>
												<span className="text-gray-600 dark:text-gray-400">By </span>
												<a className="font-medium text-gray-800 hover:underline dark:text-gray-300" href="#0">
													{getPostAuthor(featuredPost).name ?? "Anonymous Author"}
												</a>
												<span className="text-gray-600 dark:text-gray-400">
													{" "}
													{/* · <PostDate dateString={featuredPost.createdAt} /> */}
												</span>
											</div>
										</div>
									</div>
								</header>
							</article>
						</div>
					</div>
				</div>
			</section>

			{/* <RelatedPosts /> */}

			{/* Articles list */}
			<section>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<div className="pb-12 md:pb-20">
						<div className="lg:flex lg:justify-between">
							{/* Main content */}
							<div className="lg:grow" data-aos="fade-down" data-aos-delay="200">
								{/* Section title */}
								<h4 className="h3 font-red-hat-display mb-4">Latest</h4>
								<hr className="border-1 mb-4 border-green-500" />

								{/* Articles container */}
								<div className="grid items-start gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8">
									{posts.map((post, postIndex) => (
										<article
											key={postIndex}
											className="flex h-full flex-col rounded-xl bg-gray-100 p-10 duration-300 hover:bg-gray-200">
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
													<h3 className="h4 font-red-hat-display mb-2">{post.title}</h3>
												</Link>
											</header>
											<p className="grow text-gray-600 dark:text-gray-400">{post.summary}</p>
											<footer className="mt-4 flex items-center">
												<a href="#0">
													<CloudinaryClientWrapper
														className="mr-3 shrink-0 rounded-full"
														src={getPostAuthor(post).image ?? "/avatar.jpg"}
														width={32}
														height={32}
														alt={getPostAuthor(post).name ?? "Anonymous Author"}
													/>
												</a>
												<div className="text-sm text-gray-500">
													By{" "}
													<a className="font-medium text-gray-800 hover:underline dark:text-gray-400" href="#0">
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
