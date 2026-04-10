"use client";

import { EnvelopeIcon, RssIcon } from "@heroicons/react/24/solid";
import { addEmailSubscription } from "@/lib/serverActions";
import { useState } from "react";
import { InstagramIcon, LinkedInIcon, TikTokIcon, TwitterXIcon, YouTubeIcon } from "./icons";
import Link from "next/link";

const socialLinks = [
	{ href: "mailto:team@tedinitiative.org", label: "Email", icon: EnvelopeIcon },
	{ href: "https://www.tiktok.com/@tedi_youth", label: "TikTok", icon: TikTokIcon },
	{ href: "https://twitter.com/TEDIactivism", label: "Twitter", icon: TwitterXIcon },
	{ href: "https://www.youtube.com/@EnvironmentalDefenseInitiative", label: "YouTube", icon: YouTubeIcon },
	{ href: "https://www.instagram.com/environmentaldefenseinitiative/", label: "Instagram", icon: InstagramIcon },
	{
		href: "https://www.linkedin.com/company/the-environmental-defense-initiative/posts",
		label: "LinkedIn",
		icon: LinkedInIcon,
	},
	{ href: "/rss.xml", label: "RSS Feed", icon: RssIcon },
];

export default function Footer() {
	const [email, setEmail] = useState("");
	const [done, setDone] = useState(false);

	return (
		<footer className="border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
				<div className="grid gap-10 md:grid-cols-2 md:gap-16">
					{/* Email subscription */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200">Stay in the loop</h3>
						<p className="text-sm text-stone-500 dark:text-stone-400">
							Subscribe to our monthly membership emails for updates on our campaigns and initiatives.
						</p>
						{!done ? (
							<form
								name="email-subscription"
								onSubmit={async (e) => {
									e.preventDefault();
									setDone(true);
									await addEmailSubscription(email);
								}}
								className="flex flex-col gap-3 sm:flex-row"
							>
								<input
									id="email"
									name="email"
									type="email"
									className="flex-1 rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 placeholder-stone-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:placeholder-stone-500"
									placeholder="your@email.com"
									value={email}
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
								<button
									type="submit"
									className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-700"
								>
									Subscribe
								</button>
							</form>
						) : (
							<p className="text-sm text-green-600 dark:text-green-400">
								Thanks for subscribing! Want to do more?{" "}
								<Link href="/join-us" className="font-medium underline">
									Join our team.
								</Link>
							</p>
						)}
					</div>

					{/* Social + links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200">Follow us</h3>
						<ul className="flex flex-wrap gap-3">
							{socialLinks.map(({ href, label, icon: Icon }) => (
								<li key={label}>
									<a
										className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-green-600 hover:text-white dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-green-700 dark:hover:text-white"
										href={href}
										target="_blank"
										rel="noreferrer"
										aria-label={label}
									>
										<Icon className="h-4 w-4 fill-current" />
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-10 flex flex-col items-start gap-3 border-t border-stone-200 pt-8 md:flex-row md:items-center md:justify-between dark:border-stone-800">
					<p className="text-sm text-stone-500 dark:text-stone-400">
						&copy; {new Date().getFullYear()} The Environmental Defense Initiative. All rights reserved.
					</p>
					<a
						className="text-sm text-stone-500 transition-colors hover:text-stone-800 hover:underline dark:text-stone-400 dark:hover:text-stone-200"
						href="/privacy-policy"
						target="_blank"
					>
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
}
