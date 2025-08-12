import { type Metadata } from "next";
import { getCldOgImageUrl, getCldImageUrl } from "next-cloudinary";
import { env } from "@/env";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import CampaignsCarousel from "./campaignsCarousel";

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
				className="flex w-screen bg-cover bg-fixed bg-center bg-no-repeat lg:h-[50vh]"
			>
				<div className="container flex items-center justify-center px-5 py-10" data-aos="fade-in">
					<div className="flex flex-col justify-center rounded-xl bg-stone-100 p-10 lg:p-20 dark:bg-stone-800">
						<h1 className="text-center text-5xl font-semibold text-green-600 md:text-6xl dark:text-green-400">
							Campaigns
						</h1>
						<h2 className="text-wrap pt-6 text-center text-3xl">Find out how you can help your local community</h2>
					</div>
				</div>
			</section>
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 md:pb-12 lg:grid-cols-2 lg:gap-10">
					<div>
						<CloudinaryClientWrapper
							src="other/xgusyuyln9ry0rhojhmx"
							width="600"
							height="400"
							alt="A sidewalk covered in chalk art"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Featured Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Guest Speaking at Millard North High
						</h2>
						<p className="font-medium md:text-lg">
							Join us as we speak to multiple environmentally related clubs at Millard North High School about TEDI,
							sustainability, and encouraging youth to become members.
						</p>
					</div>
				</div>
				<div className="w-full bg-stone-100 py-6 md:py-12 lg:py-24 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								About The Event
							</h2>
							<p className="md:text-lg lg:text-base">
								The <span className="font-semibold text-blue-600 dark:text-blue-400">Guest Speaking Event by TEDI</span>{" "}
								is dedicated to inspiring the next generation of environmental advocates. We&apos;ll be speaking to
								multiple environmentally related clubs at Millard North High School, sharing our mission, discussing
								sustainability practices, and encouraging interested youth to join our organization.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								Our Goals
							</h2>
							<p className="md:text-lg lg:text-base">
								We aim to educate students about environmental issues, share TEDI&apos;s mission and initiatives, and
								inspire young people to get involved in environmental advocacy. By connecting with youth in our
								community, we hope to build a stronger network of environmental defenders.
							</p>
						</div>
						<div className="space-y-4 rounded-3xl bg-stone-200 px-3 py-5 lg:col-span-2 lg:px-5 lg:py-10 dark:bg-stone-900">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl lg:text-center dark:text-green-400">
								Event Details
							</h2>
							<div className="container grid grid-cols-1 gap-6 px-4 md:px-6 lg:grid-cols-2">
								<div>
									<h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Location</h3>
									<p className="md:text-lg lg:text-base">
										<span>Millard North High School</span>
										<br />
										<span>Omaha, Nebraska</span>
									</p>
									<h3 className="pt-3 text-lg font-semibold text-blue-600 dark:text-blue-400">Date</h3>
									<p className="md:text-lg lg:text-base">
										<span>TBD</span>
									</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">What to Expect</h3>
									<p className="md:text-lg lg:text-base">
										Interactive presentations about TEDI&apos;s mission, sustainability discussions, Q&A sessions, and
										opportunities for students to learn how they can get involved in environmental advocacy.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 md:pb-12 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Featured Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Seed Sculpture at Downsview Park
						</h2>
						<p className="font-medium md:text-lg">
							We put seeds into clay to create seed sculptures and spread them throughout the park to promote
							environmental growth and sustainability.
						</p>
						<div className="space-y-3 pt-4">
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">Location</h3>
								<p className="text-sm">Downsview Park, Toronto, Ontario, Canada</p>
							</div>
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">Date</h3>
								<p className="text-sm">May 21, 2025</p>
							</div>
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">What Happened</h3>
								<p className="text-sm">
									We created seed sculptures by embedding seeds into clay and then distributed them throughout Downsview
									Park to encourage natural growth and environmental restoration.
								</p>
							</div>
						</div>
					</div>
					<div>
						<CloudinaryClientWrapper
							src="other/xgusyuyln9ry0rhojhmx"
							width="600"
							height="400"
							alt="A sidewalk covered in chalk art"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
				</div>
			</section>

			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 md:pb-12 lg:grid-cols-2 lg:gap-10">
					<div>
						<CloudinaryClientWrapper
							src="other/xgusyuyln9ry0rhojhmx"
							width="600"
							height="400"
							alt="A sidewalk covered in chalk art"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Featured Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Elementary School Visits in Toronto
						</h2>
						<p className="font-medium md:text-lg">
							We visited multiple elementary schools around Toronto to discuss Waste Energy Management and recent
							environmental news with their Eco Councils.
						</p>
						<div className="space-y-3 pt-4">
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">Location</h3>
								<p className="text-sm">Multiple Elementary Schools in the GTA, Toronto, Ontario, Canada</p>
							</div>
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">Dates</h3>
								<p className="text-sm">
									April 22 - Claud Watson School for the Arts
									<br />
									April 24 - McKee Public School
									<br />
									April 25 - Yorkview Public School
								</p>
							</div>
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">What Happened</h3>
								<p className="text-sm">
									We delivered interactive presentations about waste energy management, discussed recent environmental
									news, collaborated with school Eco Councils, and provided opportunities for students to learn about
									environmental stewardship.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 md:pb-12 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Featured Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Chalking Event
						</h2>
						<p className="font-medium md:text-lg">
							We decorated sidewalks with chalk, participated in fun spring activities, and enjoyed a morning with
							friends. All ages were welcome!
						</p>
						<div className="space-y-3 pt-4">
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">Location</h3>
								<p className="text-sm">
									Hopewell Junction, New York, USA -{" "}
									<Link className="text-blue-500 underline" href="https://g.co/kgs/ZXfrb1v">
										East Fishkill Recreation
									</Link>
								</p>
							</div>
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">Time</h3>
								<p className="text-sm">March 29th 10-12pm</p>
							</div>
							<div>
								<h3 className="text-base font-semibold text-blue-600 dark:text-blue-400">What Happened</h3>
								<p className="text-sm">
									We decorated the sidewalks of East Fishkill Rec with spring chalk art to get everyone excited for
									spring and brought our community together. We also made flower crowns and other nature-related crafts
									for kids.
								</p>
							</div>
						</div>
					</div>
					<div>
						<CloudinaryClientWrapper
							src="other/xgusyuyln9ry0rhojhmx"
							width="600"
							height="400"
							alt="A sidewalk covered in chalk art"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
				</div>
			</section>
			<CampaignsCarousel />
		</>
	);
}
