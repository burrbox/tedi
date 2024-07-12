"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
// import { envClient } from "@/envClient";

export default function SignIn({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
	const { status } = useSession();
	const [email, setEmail] = useState("");

	const [loading, setLoading] = useState(false);

	if (status === "authenticated") redirect("/courses");

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setLoading(true);

		const res = await signIn("email", {
			email,
			callbackUrl: Array.isArray(searchParams.redirect) ? "/blog" : searchParams.redirect ?? "/blog",
		});
		if (res?.error) alert(res.error);
	}

	async function handleSignIn(provider: string): Promise<void> {
		setLoading(true);
		const res = await signIn(provider, {
			callbackUrl: Array.isArray(searchParams.redirect) ? "/blog" : searchParams.redirect ?? "/blog",
		});
		if (res?.error) alert(res.error);
	}

	return (
		<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
			<head>
				<title>Sign-In | DeAP Learning Labs</title>
				<meta name="description" content="Sign in to your DeAP Learning Labs account and get to learning!" />
			</head>
			<div className="pb-12 pt-32 md:pb-20 md:pt-40">
				{/* Page header */}
				<div className="mx-auto max-w-3xl pb-12 text-center">
					<h1 className="h2 font-hkgrotesk">Welcome back!</h1>
				</div>

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
									className="form-input w-full py-2 text-sm"
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
									<svg
										className="h-5 w-5 animate-spin text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
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
						<div className="mr-3 grow border-t border-slate-800" aria-hidden="true" />
						<div className="text-sm italic text-slate-500">Or</div>
						<div className="ml-3 grow border-t border-slate-800" aria-hidden="true" />
					</div>
					{/* Social login */}
					<button
						className="btn-sm relative my-3 flex w-full bg-gray-200 text-sm text-white after:flex-1"
						type="button"
						onClick={() => handleSignIn("google")}>
						<div className="flex flex-1 items-center">
							<svg className="h-6 w-6 shrink-0 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
								<path
									fill="#EA4335"
									d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
								/>
								<path
									fill="#4285F4"
									d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
								/>
								<path
									fill="#FBBC05"
									d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
								/>
								<path
									fill="#34A853"
									d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
								/>
								<path fill="none" d="M0 0h48v48H0z" />
							</svg>
						</div>
						<span className="flex-auto pl-3 text-gray-800">Continue With Google</span>
					</button>
					<button
						className="btn-sm relative my-3 flex w-full bg-gray-700 text-sm text-white after:flex-1"
						type="button"
						onClick={() => handleSignIn("github")}>
						<div className="flex flex-1 items-center">
							<svg
								className="h-6 w-6 shrink-0 fill-current text-gray-300"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
								/>
							</svg>
						</div>
						<span className="flex-auto pl-3 text-rose-50">Continue With Github</span>
					</button>
					<button
						className="btn-sm relative my-3 flex w-full bg-gray-800 text-sm after:flex-1"
						type="button"
						onClick={() => handleSignIn("discord")}>
						<div className="flex flex-1 items-center">
							<svg
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 shrink-0 fill-current text-gray-300">
								<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
							</svg>
						</div>
						<span className="flex-auto pl-3 text-gray-200">Continue With Discord</span>
					</button>
					{/* Privacy Policy */}
					<div className="flex gap-1 align-middle">
						<div className="mx-auto mb-1 block font-medium text-slate-700">
							By signing in you agree to our{" "}
							<Link href="/privacy-policy" className="text-blue-500 underline">
								Privacy Policy
							</Link>
							.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
