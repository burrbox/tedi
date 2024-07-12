import Link from "next/link";

import { LatestPost } from "@/components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
	const hello = await api.post.hello({ text: "from tRPC" });
	const session = await auth();

	void api.post.getLatest.prefetch();

	return (
		/*<HydrateClient>
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
						<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
				<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
					Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
						href="https://create.t3.gg/en/usage/first-steps"
						target="_blank">
						<h3 className="text-2xl font-bold">First Steps →</h3>
						<div className="text-lg">
							Just the basics - Everything you need to know to set up your database and authentication.
						</div>
					</Link>
					<Link
						className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
						href="https://create.t3.gg/en/introduction"
						target="_blank">
						<h3 className="text-2xl font-bold">Documentation →</h3>
						<div className="text-lg">Learn more about Create T3 App, the libraries it uses, and how to deploy it.</div>
					</Link>
				</div>
				<div className="flex flex-col items-center gap-2">
					<p className="text-2xl text-white">{hello ? hello.greeting : "Loading tRPC query..."}</p>

					<div className="flex flex-col items-center justify-center gap-4">
						<p className="text-center text-2xl text-white">
							{session && <span>Logged in as {session.user?.name}</span>}
						</p>
						<Link
							href={session ? "/api/auth/signout" : "/api/auth/signin"}
							className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20">
							{session ? "Sign out" : "Sign in"}
						</Link>
					</div>
				</div>

				{session?.user && <LatestPost />}
			</div>
			<div>
				<h1>hi</h1>
			</div>
		</main> 
		</HydrateClient>*/
		<div
			className="relative h-[400px] w-full pb-8"
			style={{
				backgroundImage:
					"url(https://static.wixstatic.com/media/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg/v1/fill/w_1587,h_934,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
			}}>
			<div className="container absolute inset-0 mt-20 flex h-1/3 w-2/5 min-w-96 flex-col items-center justify-center rounded-3xl bg-white py-6 opacity-90">
				<div className="text-wrap text-center text-blue-600">
					<h1 className="m-8 text-6xl">Save Our Environment</h1>
					<p className="text-wrap text-xl">
						Join our initiative.
						<br />
						Help us fight for a cleaner world!
					</p>
				</div>
				<div className="flex w-96 justify-center pb-4 pt-8 text-center">
					<h2 className="btn w-36 rounded-lg border border-green-500 bg-green-500 py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-green-500">
						<a href="/join-us">Join Us</a>
					</h2>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 mx-20 flex flex-row justify-around">
				<div className="relative flex flex-col bg-green-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">About</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">Learn about TEDI's mission and meet our team.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/about">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-lime-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Blog</h1>
						<h2 className="w-3/4 text-wrap pt-4 text-white">Read about the latest issues in our environment.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/blog">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-green-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Petitions</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">Sign a petition to advocate for new policies.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/petitions">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-lime-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Our Work</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">Learn about our upcoming campaigns and events.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/our-work">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-green-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Join Us</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">Become a member or join our team.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/join-us">View More</a>
						</span>
					</div>
				</div>
			</div>
			{/*			<div className="justify-betwen absolute inset-x-0 bottom-0 mx-20 flex flex-row">
				<div className="max-w-96 shrink flex-col rounded-tl-3xl bg-green-800 pt-4 opacity-70">
					<div className="mx-6 text-white opacity-100">
						<h1 className="text-3xl">About</h1>
						<h2 className="w-3/4 text-wrap py-4">Learn about TEDI's mission and meet our team.</h2>
					</div>
					<div className="btn flex justify-center">
						<div className="btn bottom-0 rounded-xl border-white bg-white px-4 text-center text-green-500 opacity-100 duration-300 hover:bg-green-500 hover:text-white">
							<a href="/about">View More</a>
						</div>
					</div>
				</div>
				<div className="max-w-96 shrink flex-col bg-lime-900 py-4 opacity-70">
					<div className="mx-6 text-white">
						<h1 className="text-3xl">Blog</h1>
						<h2 className="w-3/4 text-wrap py-4">Read about the latest issues in our environment.</h2>
					</div>
					<div className="btn flex justify-center align-bottom">
						<div className="btn rounded-xl border-white bg-white px-4 text-center text-green-500 duration-300 hover:bg-green-500 hover:text-white">
							<a href="/blog">View More</a>
						</div>
					</div>
				</div>
				<div className="max-w-96 shrink bg-green-800 py-4 opacity-70">
					<div className="mx-6 text-white">
						<h1 className="text-3xl">Petitions</h1>
						<h2 className="w-3/4 text-wrap py-4">Sign a petition to advocate for new policies.</h2>
					</div>
					<div className="btn flex justify-center">
						<div className="btn rounded-xl border-white bg-white px-4 text-center text-green-500 duration-300 hover:bg-green-500 hover:text-white">
							<a href="/petitions">View More</a>
						</div>
					</div>
				</div>
				<div className="max-w-96 shrink bg-lime-800 py-4 opacity-70">
					<div className="mx-6 text-white">
						<h1 className="text-3xl">Our Work</h1>
						<h2 className="w-3/4 text-wrap py-4">Learn about our upcoming campaigns and events.</h2>
					</div>
					<div className="btn flex justify-center">
						<div className="btn rounded-xl border-white bg-white px-4 text-center align-bottom text-green-500 duration-300 hover:bg-green-500 hover:text-white">
							<a href="/our-work">View More</a>
						</div>
					</div>
				</div>
				<div className="max-w-96 shrink rounded-tr-3xl bg-green-800 py-4 opacity-70">
					<div className="mx-6 text-white">
						<h1 className="text-3xl">Join Us</h1>
						<h2 className="w-3/4 text-wrap py-4">Become a member or join our team.</h2>
					</div>
					<div className="btn flex justify-center">
						<div className="btn rounded-xl border-white bg-white px-4 text-center text-green-500 duration-300 hover:bg-green-500 hover:text-white">
							<a href="/join-us">View More</a>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}
