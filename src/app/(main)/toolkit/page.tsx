import { type Metadata } from "next";
import { env } from "@/env";
import { getCldOgImageUrl } from "next-cloudinary";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { toolkits } from "@/lib/constants";
import React from "react";

function formatDescription(description: string) {
	return description.split(/(\[.*?\])/).map((part, index) => {
		if (part.startsWith("[") && part.endsWith("]")) {
			return (
				<span key={index} className="text-blue-500">
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
			<div>
				<section className="mx-auto my-8 max-w-6xl">
					<div className="mx-auto my-8 max-w-[50vw] justify-center rounded-xl bg-stone-100 py-5 dark:bg-stone-800">
						<h2 className="py-5 text-center text-6xl font-semibold text-green-500">Toolkits</h2>
						<p className="text-center text-3xl font-medium">Now it’s your turn to take action!</p>
					</div>
					<div className="mx-auto w-full justify-center">
						<h3 className="text-center text-lg font-medium">
							Our campaign team works to develop toolkits for our members to use to start environmental initiatives in
							their communities as easily as possible. We make taking action simple, stress-free, and fun! Toolkits are
							meant to be a starting point for TEDI members looking to plan an action.
							<br />
							<br />
							If your group has special circumstances or you need additional guidance on planning your action,{" "}
							<Link
								href="mailto:environmentaldefenseinitiative@gmail.com?subject=Member Initiative Guidance"
								className="text-purple-500"
							>
								contact us
							</Link>{" "}
							today to receive 1:1 guidance from a member of our campaign team!
						</h3>
					</div>
				</section>
			</div>
			{toolkits.map((toolkit, index) => (
				<div
					className={`w-full px-8 py-10 ${index % 2 === 0 ? "bg-stone-100 dark:bg-stone-800" : ""}`}
					key={toolkit.title}
				>
					<section className="mx-auto mt-8 max-w-7xl">
						<div className="flex flex-col-reverse gap-8 sm:flex-row">
							<div>
								<CloudinaryClientWrapper
									className="max-h-[80vh] w-fit rounded-xl"
									src={toolkit.image}
									alt={toolkit.alt}
									width={1080}
									height={2160}
								/>
							</div>
							<div className="w-4/5 px-10">
								<h1 className="mt-2 w-full text-wrap text-6xl font-bold text-green-500">{toolkit.title}</h1>
								<hr className="mt-5 w-3/4 border-green-500" />
								<p className="my-10 text-xl">
									<span className="text-lg">{toolkit.tagline}</span>
									<br />
									<br />
									{formatDescription(toolkit.description)}
								</p>
								<div className="flex">
									<Link
										className="rounded-lg bg-green-500 px-5 py-3 text-center duration-300 hover:scale-110 hover:bg-green-400 dark:bg-green-600 dark:hover:bg-green-700"
										href={toolkit.link}
										target="_blank"
									>
										Download
									</Link>
								</div>
							</div>
						</div>
					</section>
				</div>
			))}
		</>
	);
}
