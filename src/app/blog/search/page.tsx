"use client";

import Image from "next/image";
import Link from "next/link";
import { getPost, getPosts } from "@/lib/serverActions";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { team } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { type Metadata } from "next";
import { type Prisma } from "@prisma/client";

{
	/*this is a test page i tried doing some stuff here. it did not work so im commenting it out for now 


const getPostAuthor = (post: Prisma.PostGetPayload<null>) =>
	team.find((member) => member.name.toLowerCase() === post.author) ?? team[1]!;

const [searchTerm, setSearchTerm] = useState("");
const [blogPosts, setBlogPosts] = useState([]);

export default async function search() {
	const allPosts = await getPosts();
	const posts = allPosts.slice(1);

	const searched = useMemo(() => {
		return posts.filter(
			(post) =>
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.author.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [blogPosts, searchTerm]);

	return (
		<section className="bg-white dark:bg-stone-900">
			<Input
				type="text"
				placeholder="Search blog posts..."
				className="bg-muted focus:ring-primary rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="pb-12 md:pb-20">
					<div className="lg:flex lg:justify-between">
						<div className="lg:grow">
							<h2 className="h3 font-red-hat-display mb-4 dark:text-green-500">Latest</h2>
							<hr className="border-1 mb-4 border-green-500 pb-4 md:pb-10" />

							<div className="grid items-start gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8">
								{searched.map((post, postIndex) => (
									<article
										key={postIndex}
										className="flex h-full flex-col rounded-xl bg-gray-100 p-10 duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
										data-aos="fade-down"
										data-aos-delay="200">
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
	);
}
*/
}
/* commenting this out because this will cause a build error. i dont know how any of this works
export default async function search() {
	const allPosts = await getPosts(); //list of all posts
	const posts = allPosts.slice(1); //individual posts
	const [searchQuery, setSearchQuery] = useState("");
	const filtered = useMemo(() => {
		return allPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
	}, [allPosts, searchQuery]);

	return (
		<div>
			<span className="text-red text-6xl">go away</span>
			<Input
				type="text"
				placeholder="Search blog posts..."
				className="bg-muted focus:ring-primary rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>

			<div className="grid items-start gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8">
				{filtered.map((post, postIndex) => (
					<article
						key={postIndex}
						className="flex h-full flex-col rounded-xl bg-gray-100 p-10 duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
						data-aos="fade-down"
						data-aos-delay="200">
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
							<a href="#0"></a>
						</footer>
					</article>
				))}
			</div>
		</div>
	);
} */
