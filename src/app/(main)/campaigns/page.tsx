import { type Metadata } from "next";
import { getCldOgImageUrl, getCldImageUrl } from "next-cloudinary";
import { env } from "@/env";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import CampaignsCarousel from "./campaignsCarousel";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
				<div className="container relative mx-2 h-fit w-full px-4 py-16 md:mx-auto">
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
			<section className="w-full pt-6 md:pt-12">
				<div className="container grid items-center gap-6 px-4 py-10 pb-6 md:px-6 md:pb-12 lg:grid-cols-2 lg:gap-10">
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
				<div className="w-full bg-stone-100 py-6 md:py-12 lg:py-24 dark:bg-stone-800">
					<div className="container grid grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-2">
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								What is Fast Fashion?
							</h2>
							<p className="md:text-lg lg:text-base">
								Most companies that you order clothing from now are fast fashion companies, meaning they{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">mass produce</span> trendy, cheap
								clothing that quickly moves from design to retail. Many people have taken to discarding clothing once a
								trend is over or a certain style is no longer popular, leading to an{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">excessive buildup</span> of textiles in
								landfills and contributing to the{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">microplastic pollution issue</span>.
								Read more about the origins of fast fashion here.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								Action Plan
							</h2>
							<p className="md:text-lg lg:text-base">
								This campaign aims to mitigate the environmental harm that fast fashion causes by hosting clothing
								drives across the{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">United States and Canada</span>.
								Clothing drives are an excellent way to{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">
									repurpose, reuse, and recycle clothing
								</span>{" "}
								to prevent waste from accumulating in landfills.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								Getting Involved
							</h2>
							<p className="md:text-lg lg:text-base">
								<span className="font-semibold text-blue-600 dark:text-blue-400">Donate</span> old/used clothing at one
								of our several clothing drive donation bins! If you don’t see a clothing drive in your area, consider
								hosting one yourself. <Link href="/join-us">Become a member</Link> today to receive free, one-on-one
								guidance on{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">starting a clothing drive</span> from a
								member of our campaign team and gain access to an exclusive action toolkit including all of the
								materials you need to launch a{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">successful drive</span>.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								Past Locations
							</h2>
							<p className="md:text-lg lg:text-base">
								<span className="font-semibold">Hopewell Junction, New York, USA</span> - October 19st 12-4pm @{" "}
								<Link
									className="text-blue-500 underline"
									href="https://www.google.com/maps/place/Hopewell+Recreation+Park/@41.5749365,-73.8121169,15.79z/data=!4m14!1m7!3m6!1s0x89dd4818425ae529:0x696af3813e741117!2sJohn+Jay+Senior+High+School!8m2!3d41.5406214!4d-73.8332066!16s%2Fm%2F025wqkv!3m5!1s0x89dd4742b5ea7787:0x73795bf9d941a3b4!8m2!3d41.5768458!4d-73.804657!16s%2Fg%2F11k61m0mfd?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
								>
									Hopewell Recreation Park
								</Link>
								<br />
								{/* <span className="font-semibold">Shrub Oak, New York, USA</span> - donation bin addresses TBD
								<br /> <span className="font-semibold">Verona, New Jersey, USA</span> - donation bin addresses TBD */}
								<Popover>
									<PopoverTrigger>
										<span className="font-semibold underline">Toronto, Ontario, Canada *</span>
									</PopoverTrigger>
									<PopoverContent>
										<div className="flex space-x-6">
											<div className="space-y-2">
												<h4 className="font-medium leading-none text-green-600 dark:text-green-400">
													Pickup Clothing Drive
												</h4>
												<p className="text-muted-foreground">
													A truck from{" "}
													<Link href="https://www.diabetes.ca/" className="italic underline">
														Diabetes Canada
													</Link>{" "}
													will be picking up clothing donations along with a few books. They accept donations around the{" "}
													<Link href="https://declutterfordiabetes.ca/donation-bin" className="italic underline">
														General Toronto Area
													</Link>
													!
												</p>
											</div>
										</div>
									</PopoverContent>
									- All Day on December 9
								</Popover>
								{/* <br /> <span className="font-semibold">Miami, Florida, USA</span> - donation bin addresses TBD */}
							</p>
						</div>
					</div>
				</div>
			</section>
			<CampaignsCarousel />
		</>
	);
}
