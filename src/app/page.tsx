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
			className="flex h-[400px] w-full flex-col justify-items-center pb-8"
			style={{
				backgroundImage:
					"url(https://static.wixstatic.com/media/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg/v1/fill/w_1587,h_934,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
			}}>
			<div className="container absolute inset-x-0 mt-20 flex w-1/2 flex-col items-center justify-center rounded-xl bg-white py-6 opacity-80">
				<div className="text-wrap text-center text-blue-500">
					<h1 className="m-10 sm:text-4xl md:text-6xl lg:text-6xl">Save Our Environment</h1>
					<p className="text-wrap text-xl">
						Join our initiative.
						<br />
						Help us fight for a cleaner world!
					</p>
				</div>
				<div className="flex w-96 justify-center py-5 text-center">
					<h2 className="btn w-32 rounded-lg border border-green-500 bg-green-500 text-white duration-300 ease-in-out hover:bg-white hover:text-green-500">
						<a href="/join-us">Join Us</a>
					</h2>
				</div>
			</div>
		</div>
	);
}
