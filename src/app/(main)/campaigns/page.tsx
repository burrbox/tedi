import { Metadata } from "next";
import { getCldOgImageUrl, getCldImageUrl } from "next-cloudinary";
import { env } from "@/env";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Campaigns",
	description: "Learn about our campaigns.",
	alternates: { canonical: `${env.URL}/campaigns` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/campaigns`,
		title: "Campaigns - TEDI",
		type: "website",
		description: "Learn about our campaigns",
		images: {
			url: getCldOgImageUrl({ src: "nature/tallForest" }),
			width: 1200,
			height: 627,
			alt: "An image of the Redwood Forest",
		},
	},
};

export default async function Campaigns() {
	return (
		<>
			<section
				title="An image of a waterfall"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/cqdwyikqyeqqfwemsrek" })})` }}
				className="flex h-[50vh] w-screen bg-cover bg-fixed bg-center bg-no-repeat"
			>
				<div className="container relative mx-auto h-fit w-full px-4 py-16">
					<div className="absolute inset-0 mx-auto mt-28 w-fit md:mt-32 lg:mt-44" data-aos="fade-down">
						<div className="flex flex-col justify-center rounded-xl bg-stone-100 p-10 lg:p-20 dark:bg-stone-800">
							<h1 className="text-center text-5xl font-semibold text-green-600 md:text-6xl dark:text-green-400">
								Campaigns
							</h1>
							<h2 className="text-wrap pt-6 text-center text-3xl">Find out how you can help your local community</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div>
						<CloudinaryClientWrapper
							src="other/dajm8gabnmhhuaeuj37a"
							width="600"
							height="400"
							alt="A clothing rack filled with fast fashion clothing"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Featured Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Fall Fast Fashion Campaign
						</h2>
						<p className="font-medium md:text-lg">
							Join our movement to end fast fashion and promote sustainable clothing choices. Together, we can make a
							difference.
						</p>
					</div>
				</div>
				<div className="w-full pt-12 md:pt-24 lg:pt-32">
					<div className="container grid grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								What is Fast Fashion?
							</h2>
							<p className="md:text-lg lg:text-base">so much stuff here</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
