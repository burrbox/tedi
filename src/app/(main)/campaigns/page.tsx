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
				<div className="container px-4 py-10 pb-6 md:px-6">
					<div className="space-y-4 rounded-2xl bg-stone-100 p-8 shadow-md dark:bg-stone-800/80">
						<div className="inline-block rounded-lg bg-stone-200 px-3 py-1 text-sm text-black">Seasonal Campaign</div>
						<h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Holiday Food Drive Initiative
						</h2>
						<p className="font-medium md:text-lg">
							Join us and host your own food drive campaign from Thanksgiving to the New Year. By hosting or
							participating in a food drive in YOUR community, it would ensure more households can have the ability to
							enjoy a warm, festive meal, while also reducing food waste, cutting methane emissions, and conserving the
							resources used to produce the food products. This seasonal campaign encourages gratitude, conscious
							consumption, and important environmental actions that may seem small, but makes a huge impact!!
						</p>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Duration: Thanksgiving Holiday to New Year Holiday
						</p>
					</div>
				</div>
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div>
						<CloudinaryClientWrapper
							src="tshirtcampaign_n1edai"
							width="600"
							height="600"
							alt="Sustainable merchandise including eco-friendly t-shirts and tote bags"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Current Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Sustainable Merchandise Fundraiser
						</h2>
						<p className="font-medium md:text-lg">
							Combat fast fashion and excessive textile waste with TEDI&apos;s Sustainable Merchandise Fundraiser!
							We&apos;ve partnered with TapStitch to offer affordable, ethically-sourced clothing options including
							t-shirts, sweaters, hoodies, and tote bags. All products are made from eco-friendly fabrics and nontoxic
							dyes, with packaging made from recycled materials.
						</p>
						<div className="pt-2">
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Help us promote this fundraiser to make even bigger and BOLDER environmental actions possible! Share
								with friends, family, and your community.
							</p>
						</div>
						<div className="flex justify-center pt-4">
							<Link href="https://www.etsy.com/shop/tedinitiative/">
								<div className="rounded-lg bg-blue-300 px-16 py-2 text-sm font-medium text-black transition-colors hover:bg-blue-400">
									Buy Here
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full bg-stone-100 py-6 md:py-12 lg:py-16 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								Eco-Friendly Materials
							</h3>
							<p className="md:text-base lg:text-sm">
								All clothing products are made from sustainable, eco-friendly fabrics using nontoxic dyes. Our partner
								TapStitch ensures every item meets high environmental and ethical standards.
							</p>
							<div className="text-sm">
								<strong>Partner:</strong> TapStitch - committed to sustainable fashion and ethical manufacturing
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								Community Impact
							</h3>
							<p className="md:text-base lg:text-sm">
								Every purchase supports TEDI&apos;s mission to host bigger environmental actions. Help us spread the
								word by sharing our store link, reposting on social media, and putting up flyers in your community.
							</p>
							<div className="text-sm">
								<strong>Available Items:</strong> T-shirts, sweaters, hoodies, and tote bags at affordable prices
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="w-full pt-6 md:pt-12">
				<div className="container px-4 py-10 pb-6 md:px-6 md:pb-12">
					<div className="mb-12">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Fall Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							September & October College Sustainability Campaign
						</h2>
					</div>
					<div className="grid gap-8 md:grid-cols-2">
						<div className="rounded-lg bg-blue-100 p-8 shadow-md dark:bg-emerald-900">
							<h3 className="mb-4 text-2xl font-bold text-blue-700 dark:text-blue-200">Hanover</h3>
							<div className="space-y-3">
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Coordinator</h4>
									<p className="text-blue-600 dark:text-blue-400">Maggie Yang</p>
								</div>
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Date</h4>
									<p className="text-blue-600 dark:text-blue-400">October (Full Month)</p>
								</div>
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Progress</h4>
									<p className="text-blue-600 dark:text-blue-400">In Progress</p>
								</div>
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Campaign Focus</h4>
									<p className="text-blue-600 dark:text-blue-400">
										Sustainable merchandise promotion with coupon codes and exclusive discounts to drive engagement on
										social media platforms.
									</p>
								</div>
							</div>
						</div>
						<div className="rounded-lg bg-blue-100 p-8 shadow-md dark:bg-emerald-900">
							<h3 className="mb-4 text-2xl font-bold text-blue-700 dark:text-blue-200">New Paltz</h3>
							<div className="space-y-3">
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Coordinator</h4>
									<p className="text-blue-600 dark:text-blue-400">Devanshi Pandya</p>
								</div>
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Date</h4>
									<p className="text-blue-600 dark:text-blue-400">TBD</p>
								</div>
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Progress</h4>
									<p className="text-blue-600 dark:text-blue-400">Not Started</p>
								</div>
								<div>
									<h4 className="font-semibold text-blue-700 dark:text-blue-300">Campaign Focus</h4>
									<p className="text-blue-600 dark:text-blue-400">
										College sustainability event with workshops, fashion show, and community engagement initiatives on
										campus.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 md:pb-12 lg:grid-cols-2 lg:gap-10">
					<div>
						<CloudinaryClientWrapper
							src="bee_fhkq1l"
							width="600"
							height="400"
							alt="A bee pollinator on a flower"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Past Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Pollinator Campaign
						</h2>
						<p className="font-medium md:text-lg">
							Join the movement to restore native plants and support pollinators—one seed at a time! Hosting your own
							seed spreading campaign is easy, fun, and impactful. All you need is a handheld salt sprinkler, native
							seeds, and some green space. This event is suitable for everyone, you can walk or bike to spread native
							seeds whenever you pass by an empty green space, have fun spreading seeds!! 🌻🌸🌸🌧️💧
						</p>
						<div className="pt-2">
							<a
								href="https://docs.google.com/document/d/1x0GCtd_Gr5aV39RxFEp5emQ-OSQ_Tpf3XMmHvFlG2Kg/edit?usp=drivesdk"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center font-medium text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
							>
								View Campaign Toolkit →
							</a>
						</div>
					</div>
				</div>
				<div className="w-full bg-stone-100 py-6 md:py-12 lg:py-16 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								Feature #1: Seed Sculptures in Downsview Park
							</h3>
							<p className="md:text-base lg:text-sm">
								We created seed sculptures by embedding seeds into clay and then distributed them throughout Downsview
								Park to encourage natural growth and environmental restoration.
							</p>
							<div className="text-sm">
								<strong>Location:</strong> Downsview Park, Toronto, Ontario
								<br />
								<strong>Date:</strong> May 21, 2025
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								Feature #2: Wildflower Planting in Hopewell Junction
							</h3>
							<p className="md:text-base lg:text-sm">
								Plant one seed for every follower and every 10 likes gained on Instagram and TikTok
							</p>
							<div className="text-sm">
								<strong>Location:</strong> Hopewell Junction, New York
								<br />
								<strong>Date:</strong> August 1-31, 2025
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 md:pb-12 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Past Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Youth Sustainability Workshop Campaign
						</h2>
						<p className="font-medium md:text-lg">
							TEDI is working on hosting a crafts workshop this February to educate youth the importance of
							sustainability, continue reading to figure out how YOU could host one yourself and double the impact!
						</p>
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
				<div className="w-full bg-stone-100 py-6 md:py-12 lg:py-16 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								Feature #1: HJ Chalking Event
							</h3>
							<p className="md:text-base lg:text-sm">
								We decorated the sidewalks of East Fishkill Rec with spring chalk art to get everyone excited for spring
								and brought our community together. We also made flower crowns and other nature-related crafts for kids.
							</p>
							<div className="text-sm">
								<strong>Location:</strong> Hopewell Junction, New York
								<br />
								<strong>Date:</strong> March 29, 2025
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								Feature #2: Elementary School Visits in Toronto
							</h3>
							<p className="md:text-base lg:text-sm">
								We delivered interactive presentations about waste energy management, discussed recent environmental
								news, collaborated with school Eco Councils, and provided opportunities for students to learn about
								environmental stewardship.
							</p>
							<div className="text-sm">
								<strong>Location:</strong> Multiple Elementary Schools in the GTA, Toronto
								<br />
								<strong>Dates:</strong> April 22-25, 2025
							</div>
						</div>
					</div>
				</div>
			</section>
			<CampaignsCarousel />
		</>
	);
}
