import { type Metadata } from "next";
import { getCldOgImageUrl, getCldImageUrl } from "next-cloudinary";
import { env } from "@/env";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import CampaignsCarousel from "./campaignsCarousel";
import { SectionBadge } from "@/components/ui/section-badge";

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

export default function Campaigns() {
	return (
		<>
			{/* Hero */}
			<section
				title="An image of a waterfall"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/cqdwyikqyeqqfwemsrek" })})` }}
				className="flex w-screen bg-cover bg-fixed bg-center bg-no-repeat lg:h-[50vh]"
			>
				<div className="container flex items-center justify-center px-5 py-10" data-aos="fade-in">
					<div className="flex flex-col justify-center rounded-2xl bg-white/90 p-10 shadow-xl backdrop-blur-sm lg:p-20 dark:bg-stone-900/90">
						<h1 className="text-center text-5xl font-bold text-green-600 md:text-6xl dark:text-green-400">Campaigns</h1>
						<p className="pt-4 text-center text-xl text-stone-600 dark:text-stone-300">
							Find out how you can help your local community
						</p>
					</div>
				</div>
			</section>

			{/* Sustainable Merchandise */}
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-8 px-4 py-10 md:px-6 lg:grid-cols-2 lg:gap-12">
					<CloudinaryClientWrapper
						src="tshirtcampaign_n1edai"
						width="600"
						height="600"
						alt="Sustainable merchandise including eco-friendly t-shirts and tote bags"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full"
					/>
					<div className="space-y-4">
						<SectionBadge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
							Current Campaign
						</SectionBadge>
						<h2 className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
							Sustainable Merchandise Fundraiser
						</h2>
						<p className="text-stone-600 md:text-lg dark:text-stone-300">
							Combat fast fashion and excessive textile waste with TEDI&apos;s Sustainable Merchandise Fundraiser!
							We&apos;ve partnered with TapStitch to offer affordable, ethically-sourced clothing options including
							t-shirts, sweaters, hoodies, and tote bags. All products are made from eco-friendly fabrics and nontoxic
							dyes, with packaging made from recycled materials.
						</p>
						<p className="text-sm text-stone-500 dark:text-stone-400">
							Help us promote this fundraiser to make even bigger and BOLDER environmental actions possible! Share with
							friends, family, and your community.
						</p>
						<Link
							href="https://www.etsy.com/shop/tedinitiative/"
							className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700"
						>
							Buy Here
						</Link>
					</div>
				</div>
				<div className="w-full bg-stone-100 py-8 md:py-12 lg:py-16 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">Eco-Friendly Materials</h3>
							<p className="text-stone-600 dark:text-stone-300">
								All clothing products are made from sustainable, eco-friendly fabrics using nontoxic dyes. Our partner
								TapStitch ensures every item meets high environmental and ethical standards.
							</p>
							<p className="text-sm text-stone-500 dark:text-stone-400">
								<strong className="text-stone-700 dark:text-stone-300">Partner:</strong> TapStitch — committed to
								sustainable fashion and ethical manufacturing
							</p>
						</div>
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">Community Impact</h3>
							<p className="text-stone-600 dark:text-stone-300">
								Every purchase supports TEDI&apos;s mission to host bigger environmental actions. Help us spread the
								word by sharing our store link, reposting on social media, and putting up flyers in your community.
							</p>
							<p className="text-sm text-stone-500 dark:text-stone-400">
								<strong className="text-stone-700 dark:text-stone-300">Available Items:</strong> T-shirts, sweaters,
								hoodies, and tote bags at affordable prices
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* College Sustainability Initiative */}
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-8 px-4 py-10 md:px-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4 lg:order-first">
						<SectionBadge>Fall Campaign</SectionBadge>
						<h2 className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
							College Sustainability Initiative
						</h2>
						<p className="text-stone-600 md:text-lg dark:text-stone-300">
							Take action for a greener campus! The College Sustainability Initiative challenges students to host an
							environmental campaign at their local college. From tree planting to reverse vending machine challenge,
							TEDI has listed many different ideas ranked from easy to challenging that encourages students to raise
							awareness about different environmental issues.
						</p>
						<p className="text-sm text-stone-500 dark:text-stone-400">
							*Subscribe to become a TEDI member for FREE today and get access to our campaign toolkits for
							September&apos;s initiative on the website!
						</p>
					</div>
					<CloudinaryClientWrapper
						src="27f1bd8f-8b55-4b13-afda-fbaafb068140"
						width="600"
						height="400"
						alt="College Sustainability Initiative - hands drawing peace signs with chalk on pavement"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full"
					/>
				</div>
				<div className="w-full bg-stone-100 py-8 md:py-12 lg:py-16 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
								Reverse Vending Machine Challenge
							</h3>
							<p className="text-stone-600 dark:text-stone-300">
								Students can participate in recycling challenges using reverse vending machines to recycle rigid plastic
								containers, promoting circular economy practices on campus.
							</p>
							<a
								href="https://www.recyclingtoday.com/news/olyns-mars-partner-reverse-vending-machine-challenge/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
							>
								Olyns, Mars partner to recycle rigid plastic candy containers →
							</a>
						</div>
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">Tree Planting Initiatives</h3>
							<p className="text-stone-600 dark:text-stone-300">
								Organize campus tree planting events to increase green spaces, improve air quality, and create lasting
								environmental impact in your college community.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pollinator Campaign */}
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-8 px-4 py-10 md:px-6 lg:grid-cols-2 lg:gap-12">
					<CloudinaryClientWrapper
						src="bee_fhkq1l"
						width="600"
						height="400"
						alt="A bee pollinator on a flower"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full"
					/>
					<div className="space-y-4">
						<SectionBadge>Past Campaign</SectionBadge>
						<h2 className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">Pollinator Campaign</h2>
						<p className="text-stone-600 md:text-lg dark:text-stone-300">
							Join the movement to restore native plants and support pollinators—one seed at a time! Hosting your own
							seed spreading campaign is easy, fun, and impactful. All you need is a handheld salt sprinkler, native
							seeds, and some green space.
						</p>
						<a
							href="https://docs.google.com/document/d/1x0GCtd_Gr5aV39RxFEp5emQ-OSQ_Tpf3XMmHvFlG2Kg/edit?usp=drivesdk"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center text-sm font-medium text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
						>
							View Campaign Toolkit →
						</a>
					</div>
				</div>
				<div className="w-full bg-stone-100 py-8 md:py-12 lg:py-16 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
								Seed Sculptures in Downsview Park
							</h3>
							<p className="text-stone-600 dark:text-stone-300">
								We created seed sculptures by embedding seeds into clay and then distributed them throughout Downsview
								Park to encourage natural growth and environmental restoration.
							</p>
							<p className="text-sm text-stone-500 dark:text-stone-400">
								<strong className="text-stone-700 dark:text-stone-300">Location:</strong> Downsview Park, Toronto, ON ·{" "}
								<strong className="text-stone-700 dark:text-stone-300">Date:</strong> May 21, 2025
							</p>
						</div>
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
								Wildflower Planting in Hopewell Junction
							</h3>
							<p className="text-stone-600 dark:text-stone-300">
								Plant one seed for every follower and every 10 likes gained on Instagram and TikTok.
							</p>
							<p className="text-sm text-stone-500 dark:text-stone-400">
								<strong className="text-stone-700 dark:text-stone-300">Location:</strong> Hopewell Junction, NY ·{" "}
								<strong className="text-stone-700 dark:text-stone-300">Date:</strong> Aug 1–31, 2025
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Youth Sustainability Workshop */}
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-8 px-4 py-10 md:px-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<SectionBadge>Past Campaign</SectionBadge>
						<h2 className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
							Youth Sustainability Workshop Campaign
						</h2>
						<p className="text-stone-600 md:text-lg dark:text-stone-300">
							TEDI hosted a crafts workshop to educate youth on the importance of sustainability. Read on to find out
							how you could host one yourself and double the impact!
						</p>
					</div>
					<CloudinaryClientWrapper
						src="other/xgusyuyln9ry0rhojhmx"
						width="600"
						height="400"
						alt="A sidewalk covered in chalk art"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full"
					/>
				</div>
				<div className="w-full bg-stone-100 py-8 md:py-12 lg:py-16 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">HJ Chalking Event</h3>
							<p className="text-stone-600 dark:text-stone-300">
								We decorated the sidewalks of East Fishkill Rec with spring chalk art and made flower crowns and other
								nature-related crafts for kids.
							</p>
							<p className="text-sm text-stone-500 dark:text-stone-400">
								<strong className="text-stone-700 dark:text-stone-300">Location:</strong> Hopewell Junction, NY ·{" "}
								<strong className="text-stone-700 dark:text-stone-300">Date:</strong> March 29, 2025
							</p>
						</div>
						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
								Elementary School Visits in Toronto
							</h3>
							<p className="text-stone-600 dark:text-stone-300">
								We delivered interactive presentations about waste energy management, discussed recent environmental
								news, collaborated with school Eco Councils, and provided opportunities for students to learn about
								environmental stewardship.
							</p>
							<p className="text-sm text-stone-500 dark:text-stone-400">
								<strong className="text-stone-700 dark:text-stone-300">Location:</strong> Multiple Elementary Schools,
								Toronto GTA ·{" "}
								<strong className="text-stone-700 dark:text-stone-300">Dates:</strong> April 22–25, 2025
							</p>
						</div>
					</div>
				</div>
			</section>

			<CampaignsCarousel />
		</>
	);
}
