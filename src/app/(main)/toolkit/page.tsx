import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { toolkits } from "@/lib/constants";
import { Download, Mail } from "lucide-react";
import React from "react";

function formatDescription(description: string) {
	return description.split(/(\[.*?\])/).map((part, index) => {
		if (part.startsWith("[") && part.endsWith("]")) {
			return (
				<span key={index} className="font-semibold text-green-700 dark:text-green-400">
					{part.slice(1, -1)}
				</span>
			);
		}
		return part;
	});
}

export const metadata: Metadata = {
	title: "Toolkits",
	description: "Our advocacy toolkits.",
	alternates: { canonical: `${env.URL}/toolkit` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/toolkit`,
		title: "Toolkit - TEDI",
		type: "website",
		description: "Our advocacy toolkits.",
		images: {
			url: getCldOgImageUrl({ src: "nature/tallForest" }),
			width: 1200,
			height: 627,
			alt: "An image of the Redwood Forest",
		},
	},
};

export default async function Toolkit() {
	const session = await auth();
	if (!session) redirect("/signin");

	return (
		<>
			{/* Hero */}
			<section
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/tallForest" })})` }}
				className="relative flex min-h-[45vh] w-screen items-center bg-cover bg-center bg-no-repeat"
			>
				<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/70" />
				<div className="container relative z-10 py-32 text-center">
					<h1 className="mb-4 text-5xl font-bold text-white drop-shadow-md md:text-6xl">Toolkits</h1>
					<p className="text-xl text-white/90 drop-shadow">
						Resources for TEDI members to take action in their communities
					</p>
				</div>
			</section>

			{/* Intro */}
			<section className="w-full bg-white py-12 dark:bg-stone-900">
				<div className="container mx-auto max-w-3xl px-4 text-center">
					<p className="text-lg text-stone-600 dark:text-stone-300">
						Our campaign team develops toolkits to help members start environmental initiatives as easily as possible.
						Each toolkit is a starting point — simple, stress-free, and ready to use.
					</p>
					<p className="mt-4 text-stone-500 dark:text-stone-400">
						Need personalized guidance?{" "}
						<Link
							href="mailto:environmentaldefenseinitiative@gmail.com?subject=Member Initiative Guidance"
							className="inline-flex items-center gap-1 text-green-600 hover:underline dark:text-green-400"
						>
							<Mail className="h-4 w-4" />
							Contact our campaign team
						</Link>{" "}
						for 1:1 support.
					</p>
				</div>
			</section>

			{/* Toolkits */}
			<section className="w-full bg-stone-50 py-8 dark:bg-stone-950">
				<div className="container mx-auto max-w-5xl space-y-8 px-4">
					{toolkits.map((toolkit, index) => (
						<div
							key={toolkit.title}
							className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-800"
							data-aos="fade-up"
						>
							<div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
								{/* Image */}
								<div className="shrink-0 md:w-56 lg:w-72">
									<CloudinaryClientWrapper
										className="h-56 w-full object-cover md:h-full"
										src={toolkit.image}
										alt={toolkit.alt}
										width={288}
										height={400}
									/>
								</div>

								{/* Content */}
								<div className="flex flex-1 flex-col justify-between p-6 md:p-8">
									<div>
										<h2 className="mb-2 text-2xl font-bold text-stone-800 dark:text-stone-100">{toolkit.title}</h2>
										<p className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">{toolkit.tagline}</p>
										<p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
											{formatDescription(toolkit.description)}
										</p>
									</div>
									<div className="mt-6">
										<Link
											href={toolkit.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
										>
											<Download className="h-4 w-4" />
											Download Toolkit
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Bottom CTA */}
			<section className="w-full bg-white py-16 dark:bg-stone-900">
				<div className="container mx-auto max-w-2xl px-4 text-center">
					<div className="rounded-2xl border border-green-200 bg-green-50 p-8 dark:border-green-800/40 dark:bg-green-900/20">
						<h3 className="mb-2 text-xl font-bold text-green-800 dark:text-green-300">Have a campaign idea?</h3>
						<p className="mb-6 text-sm text-green-700 dark:text-green-400">
							Submit your event after hosting and earn points for your city on the leaderboard.
						</p>
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLSfEWkGAauRBi07E8-4WRlay7RyXJlLII85dt1FCV2C0m-hI1Q/viewform"
							className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
						>
							Submit a Campaign Event
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
