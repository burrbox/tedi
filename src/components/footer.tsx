"use client";

import { EnvelopeIcon, RssIcon } from "@heroicons/react/24/solid";
import { addEmailSubscription } from "@/lib/serverActions";
import { useState } from "react";
import { InstagramIcon, LinkedInIcon, TikTokIcon, TwitterXIcon, YouTubeIcon } from "./icons";

export default function Footer() {
	const [email, setEmail] = useState("");
	return (
		<footer className="relative bg-white dark:bg-stone-950">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="-mt-px border-t border-gray-200 py-12 md:py-16 dark:border-gray-800">
					{/* Footer illustration */}
					<div className="-z-1 pointer-events-none" aria-hidden="true">
						<svg
							className="absolute bottom-0 left-0 ml-24 -translate-x-1/2 transform dark:opacity-40"
							width="800"
							height="264"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
							<defs>
								<radialGradient
									id="footerglow_paint0_radial"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="rotate(90 0 400) scale(315.089)"
								>
									<stop stopColor="#3ABAB4 dark:#7D55C3" />
									<stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
								</radialGradient>
							</defs>
						</svg>
					</div>

					{/* Footer Content */}
					<div className="w-full pb-8">
						<div>
							<h3 className="pb-2 text-xl text-blue-600 dark:text-blue-400">
								Subscribe to our monthly membership emails!
							</h3>
						</div>
						<form
							name="email-subscription"
							onSubmit={async (e) => {
								e.preventDefault();
								await addEmailSubscription(email);
							}}
						>
							<label className="py-2 text-blue-600 dark:text-blue-300">
								Email*
								<div className="flex w-1/2 border-b-4 border-b-green-600 py-1 text-xl text-green-600 dark:text-green-500">
									<input
										id="email"
										name="email"
										type="email"
										className="size-3/4 border-none bg-transparent text-blue-700 focus:outline-none"
										placeholder="Your email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<label className="inline w-1/4 text-center">
										<button type="submit">Subscribe</button>
									</label>
								</div>
							</label>
						</form>
					</div>
					<div className="md:flex md:items-center md:justify-between">
						{/* Social links */}
						<ul className="mb-4 flex md:order-2 md:mb-0 md:ml-4">
							<li>
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-emerald-800 dark:text-blue-600"
									href="mailto:environmentaldefenseinitiative@gmail.com"
									target="_blank"
									aria-label="Email"
								>
									<EnvelopeIcon className="h-4 w-4 dark:fill-white" />
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-emerald-800 dark:text-blue-600"
									href="https://www.tiktok.com/@tedi_youth"
									target="_blank"
									aria-label="TikTok"
								>
									<TikTokIcon className="h-4 w-4 fill-current dark:fill-white" />
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-emerald-800 dark:text-blue-600"
									href="https://twitter.com/TEDIactivism"
									target="_blank"
									aria-label="Twitter"
								>
									<TwitterXIcon className="h-4 w-4 fill-current dark:fill-white" />
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-emerald-800 dark:text-blue-600"
									href="https://www.youtube.com/channel/UCLJIczzKZWeqsa2Pmg55F6g"
									target="_blank"
									aria-label="Youtube"
								>
									<YouTubeIcon className="h-4 w-4 fill-current dark:fill-white" />
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-emerald-800 dark:text-blue-600"
									href="https://www.instagram.com/environmentaldefenseinitiative/"
									target="_blank"
									aria-label="Instagram"
								>
									<InstagramIcon className="h-4 w-4 fill-current dark:fill-white" />
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-emerald-800 dark:text-blue-600"
									href="https://www.linkedin.com/company/the-environmental-defense-initiative/posts"
									target="_blank"
									aria-label="Linkedin"
								>
									<LinkedInIcon className="h-4 w-4 fill-current dark:fill-white" />
								</a>
							</li>
							<li className="ml-4">
								<a
									className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition duration-150 ease-in-out hover:bg-purple-600 hover:underline dark:bg-emerald-800 dark:text-blue-600"
									href="/rss.xml"
									target="_blank"
									aria-label="RSS Feed"
								>
									<RssIcon className="h-4 w-4 fill-current dark:fill-white" />
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
								href="/privacy-policy"
								target="_blank"
							>
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
