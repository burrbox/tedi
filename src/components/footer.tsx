"use client";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { addEmailSubscription } from "@/lib/serverActions";
import { useState } from "react";

export default function Footer() {
	const [email, setEmail] = useState("");
	return (
		<footer className="relative">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="-mt-px border-t border-gray-200 py-12 dark:border-gray-800 md:py-16">
					{/* Footer illustration */}
					<div className="-z-1 pointer-events-none" aria-hidden="true">
						<svg
							className="absolute bottom-0 left-0 ml-24 -translate-x-1/2 transform dark:opacity-40"
							width="800"
							height="264"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
							<defs>
								<radialGradient
									id="footerglow_paint0_radial"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="rotate(90 0 400) scale(315.089)">
									<stop stopColor="#3ABAB4" />
									<stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
								</radialGradient>
							</defs>
						</svg>
					</div>

					{/* Footer Content */}
					<div className="w-full pb-8">
						<div>
							<h3 className="text-xl text-blue-600">Subscribe to our monthly newsletter!</h3>
						</div>
						<form
							name="email-subscription"
							onSubmit={async (e) => {
								e.preventDefault();
								await addEmailSubscription(email);
							}}>
							<h4 className="py-2 text-blue-600">Email*</h4>
							<span className="w-1/2 border-b-4 border-b-green-600 py-1 text-xl text-green-600">
								<input
									id="email"
									name="email"
									type="email"
									className="size-1/2 bg-transparent text-blue-700 outline-none"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<button type="submit">
									<label>Subscribe</label>
								</button>
							</span>
						</form>
					</div>
					<div className="md:flex md:items-center md:justify-between">
						{/* Social links */}
						<ul className="mb-4 flex md:order-2 md:mb-0 md:ml-4">
							<li>
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-gray-800 dark:text-blue-600"
									href="mailto:environmentaldefenseinitiative@gmail.com"
									aria-label="Email">
									<EnvelopeIcon className="h-4 w-4" />
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-gray-800 dark:text-blue-600"
									href="https://www.tiktok.com/@tedi_youth"
									aria-label="TikTok">
									<svg className="h-4 w-4 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
									</svg>
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-gray-800 dark:text-blue-600"
									href="https://www.youtube.com/channel/UCLJIczzKZWeqsa2Pmg55F6g"
									aria-label="Youtube">
									<svg
										role="img"
										className="h-4 w-4 fill-current"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
									</svg>
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-gray-800 dark:text-blue-600"
									href="https://www.instagram.com/environmentaldefenseinitiative/"
									aria-label="Instagram">
									<svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
										<circle cx="20.145" cy="11.892" r="1" />
										<path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
										<path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
									</svg>
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-gray-800 dark:text-blue-600"
									href="https://www.linkedin.com/company/97920980/admin/feed/posts/"
									aria-label="Linkedin">
									<svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
									</svg>
								</a>
							</li>
						</ul>

						{/* Middle links */}
						<div className="mb-2 text-sm text-gray-700 md:order-1 md:mb-0">
							{/* <a
								className="text-gray-600 transition duration-150 ease-in-out hover:underline dark:text-gray-400"
								href="#0">
								Terms
							</a>{" "}
							·{" "} */}
							<a
								className="text-gray-600 transition duration-150 ease-in-out hover:underline dark:text-gray-400"
								href="/privacy-policy">
								Privacy Policy
							</a>
						</div>

						{/* Copyrights note */}
						<div className="mr-4 text-sm text-gray-600 dark:text-gray-400">
							&copy; Nash and Hiro. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
