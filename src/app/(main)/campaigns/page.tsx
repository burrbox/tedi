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
					<div className="flex flex-col justify-center rounded-xl bg-stone-100/85 p-10 lg:p-20 dark:bg-stone-800/85">
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
						<div className="inline-block rounded-lg bg-stone-200 px-3 py-1 text-sm text-black">Recent Campaign</div>
						<h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Little Free Libraries Campaign
						</h2>
						<p className="font-medium md:text-lg">
							Join TEDI&apos;s February mission on building Little Free Libraries this month!! Our campaign promotes
							sustainability and literature by exchanging and reusing books in the community. For more information,
							please check out our campaign toolkit by clicking{" "}
							<Link
								href="https://docs.google.com/document/d/1M3ctNekpzkXzC-G0MfTTch7eHLK_ltgjH9tPqItMt6s/edit?tab=t.0"
								className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
							>
								here!
							</Link>
						</p>
						<p className="text-sm text-gray-600 dark:text-gray-400">Duration: February</p>
					</div>
				</div>
			</section>
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div>
						<CloudinaryClientWrapper
							src="bookDrive_zrle0h"
							width="600"
							height="600"
							alt="Sustainable merchandise including eco-friendly t-shirts and tote bags"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Current Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							February&apos;s Book Drive Campaign
						</h2>
						<p className="font-medium md:text-lg">
							Join TEDI for February&apos;s Book Drive Campaign. This campaign is a simple way that helps reduce waste
							and makes books more accessible within YOUR community. This campaign encourages people to donate gently
							used books for new readers to enjoy, instead of letting the books sit and collect dust on the shelves.
							Collected books can be distributed to support Little Free Libraries, schools, shelters, community centers,
							malls, college campuses, and any other local spaces in need. With this simple campaign, YOU can turn these
							books into new opportunities for learning, community connection and make an impact on the environment!!📚
						</p>
						<div className="pt-2">
							<a
								href="https://docs.google.com/document/d/1Ctfb-qVEgCjOF-JRYqTgfM67EaEUIA2Ip3wAlHIEg4A/edit?tab=t.0"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center font-medium text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
							>
								View Campaign Toolkit →
							</a>
						</div>
					</div>
				</div>
				<div className="w-full rounded-b-3xl bg-stone-100 pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-20 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								📖 Promoting Literacy Access
							</h3>
							<p className="md:text-base lg:text-sm">
								By collecting and redistributing gently used books, we make reading accessible to everyone in the
								community. Books can be donated to Little Free Libraries, schools, shelters, and community centers.
							</p>
							<div className="text-sm">
								<strong>Impact:</strong> Turn unused books into opportunities for learning and community connection
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-green-600 sm:text-xl md:text-2xl dark:text-green-400">
								♻️ Reducing Waste
							</h3>
							<p className="md:text-base lg:text-sm">
								Instead of letting books collect dust or end up in landfills, this campaign encourages reuse and
								sharing. Help us promote sustainability by giving books a second life in your community.
							</p>
							<div className="text-sm">
								<strong>How to Help:</strong> Donate gently used books or spread the word on social media
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm text-black">Current Campaign</div>
						<h2 className="text-xl font-semibold text-blue-600 sm:text-4xl md:text-5xl dark:text-blue-400">
							Sustainable Merchandise Fundraiser
						</h2>
						<p className="font-medium md:text-lg">
							Combat fast fashion and excessive textile waste with TEDI&apos;s Sustainable Merchandise Fundraiser! 🌍
							We&apos;ve partnered with TapStitch to offer affordable, ethically-sourced clothing options including
							t-shirts, sweaters, hoodies, and tote bags. All products are made from eco-friendly fabrics and nontoxic
							dyes, with packaging made from recycled materials. ♻️
						</p>
						<div className="pt-2">
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Help us promote this fundraiser to make even bigger and BOLDER environmental actions possible! Share
								with friends, family, and your community.
							</p>
						</div>
						<div className="justify-left flex pt-4">
							<Link href="https://www.etsy.com/shop/tedinitiative/">
								<div className="rounded-lg bg-blue-300 px-16 py-2 text-sm font-medium text-black transition-colors hover:bg-blue-400">
									Buy Here
								</div>
							</Link>
						</div>
					</div>
					<div>
						<CloudinaryClientWrapper
							src="tshirtcampaign_n1edai"
							width="600"
							height="600"
							alt="Sustainable merchandise including eco-friendly t-shirts and tote bags"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</div>
				</div>
				<div className="w-full rounded-b-3xl bg-stone-100 pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-20 dark:bg-stone-800">
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
				<div className="w-full rounded-b-3xl bg-stone-100 pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-20 dark:bg-stone-800">
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
				<div className="w-full rounded-b-3xl bg-stone-100 pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-20 dark:bg-stone-800">
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
