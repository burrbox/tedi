"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Loading from "@/components/loading";
import { type SignInPageErrorParam } from "@auth/core/types";
import { DiscordIcon, GithubIcon, GoogleIcon } from "@/components/icons";

export default function SignIn({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
	const { status } = useSession();
	const [email, setEmail] = useState("");

	const [loading, setLoading] = useState(false);

	if (status === "authenticated") redirect("/courses");

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setLoading(true);

		const res = await signIn("email", { email, callbackUrl: (searchParams.redirect ?? "/blog").toString() });
		if (res?.error) alert(res.error);
	}

	async function handleSignIn(provider: string): Promise<void> {
		setLoading(true);
		const res = await signIn(provider, { callbackUrl: (searchParams.redirect ?? "/blog").toString() });
		if (res?.error) alert(res.error);
	}

	const errorMeanings = {
		OAuthAccountNotLinked: "This email is already associated with another account.",
		// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	} as Record<SignInPageErrorParam | string, string | undefined>;

	return (
		<div className="dark:bg-stone-900">
			<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
				<head>
					<title>Sign-In | TEDI</title>
					<meta name="description" content="Sign in to your TEDI account and get to learning!" />
				</head>
				<div className="pb-12 pt-24 md:pb-20 md:pt-32">
					{/* Page header */}
					<div className="mx-auto max-w-3xl pb-12 text-center">
						<h1 className="h2 dark:text-blue-400">Welcome back!</h1>
					</div>

					{/* Error message */}
					{searchParams.error && (
						<div className="mx-auto mb-8 max-w-sm">
							<div className="rounded border border-red-400 bg-red-100 p-4 text-red-700 dark:border-red-600 dark:bg-red-800 dark:text-red-100">
								{errorMeanings[searchParams.error.toString()] ?? "An error occurred. Please try again."}
							</div>
						</div>
					)}

					{/* Form */}
					<div className="mx-auto max-w-sm">
						<form onSubmit={handleSubmit}>
							<div className="space-y-4">
								<div>
									<label className="mb-1 block text-sm font-medium text-slate-400" htmlFor="email">
										Email
									</label>
									<input
										id="email"
										className="form-input w-full py-2 text-sm dark:text-white"
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>

							<div className="mb-4 mt-6">
								<button
									className="btn-sm group w-full bg-indigo-500 text-sm text-white shadow-sm hover:bg-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-indigo-800 disabled:text-gray-300"
									type="submit"
									disabled={loading || !email}>
									{loading ? (
										<Loading />
									) : (
										<>
											Sign In{" "}
											<span className="ml-1 tracking-normal text-sky-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
												-&gt;
											</span>
										</>
									)}
								</button>
							</div>
						</form>
						{/* Divider */}
						<div className="my-6 flex items-center">
							<div className="mr-3 grow border-t border-slate-800 dark:border-gray-400" aria-hidden="true" />
							<div className="text-sm italic text-slate-500 dark:text-gray-300">Or</div>
							<div className="ml-3 grow border-t border-slate-800 dark:border-gray-400" aria-hidden="true" />
						</div>
						{/* Social login */}
						<button
							className="btn-sm relative my-3 flex w-full bg-gray-200 text-sm text-white after:flex-1"
							type="button"
							onClick={() => handleSignIn("google")}>
							<div className="flex flex-1 items-center">
								<GoogleIcon className="h-6 w-6 shrink-0 fill-current" />
							</div>
							<span className="flex-auto pl-3 text-gray-800">Continue With Google</span>
						</button>
						<button
							className="btn-sm relative my-3 flex w-full bg-gray-700 text-sm text-white after:flex-1"
							type="button"
							onClick={() => handleSignIn("github")}>
							<div className="flex flex-1 items-center">
								<GithubIcon className="h-6 w-6 shrink-0 fill-current text-gray-300" />
							</div>
							<span className="flex-auto pl-3 text-rose-50">Continue With Github</span>
						</button>
						<button
							className="btn-sm relative my-3 flex w-full bg-gray-800 text-sm after:flex-1"
							type="button"
							onClick={() => handleSignIn("discord")}>
							<div className="flex flex-1 items-center">
								<DiscordIcon className="h-6 w-6 shrink-0 fill-current text-gray-300" />
							</div>
							<span className="flex-auto pl-3 text-gray-200">Continue With Discord</span>
						</button>
						{/* Privacy Policy */}
						<div className="flex gap-1 align-middle">
							<div className="mx-auto mb-1 block font-medium text-slate-700 dark:text-gray-200">
								By signing in you agree to our{" "}
								<Link href="/privacy-policy" className="text-blue-500 underline dark:text-blue-400">
									Privacy Policy
								</Link>
								.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
