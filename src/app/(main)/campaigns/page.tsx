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
							Chalking Event
						</h2>
						<p className="font-medium md:text-lg">
							Decorate sidewalks with chalk, participate in fun spring activities, and enjoy a morning with friends. All
							ages are welcome!
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
								The <span className="font-semibold text-blue-600 dark:text-blue-400">Chalking Event by TEDI</span> is
								dedicated to making a difference through{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">art and community engagement</span>.
								The event hopes to bring people together to create a vibrant and{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">colorful environment</span> that
								inspires creativity and joy. We will also be making flower crowns and having other{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">nature-related crafts</span>
								for kids.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl dark:text-green-400">
								Our Goals
							</h2>
							<p className="md:text-lg lg:text-base">
								We will be decorating the sidewalks of the{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">East Fishkill Rec</span> with spring
								images drawn in chalk. The idea is to cover as much of the sidewalk as we can with cute pictures to get
								everyone excited for spring and{" "}
								<span className="font-semibold text-blue-600 dark:text-blue-400">
									bring people in our community together
								</span>
								.
							</p>
						</div>
						<div className="space-y-4 rounded-3xl bg-stone-200 px-3 py-5 lg:col-span-2 lg:px-5 lg:py-10 dark:bg-stone-900">
							<h2 className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl lg:text-center dark:text-green-400">
								Getting Involved
							</h2>
							<div className="container grid grid-cols-1 gap-6 px-4 md:px-6 lg:grid-cols-2">
								<div>
									<h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Location</h3>
									<p className="md:text-lg lg:text-base">
										<span>Hopewell Junction, New York, USA</span> -{" "}
										<Link className="text-blue-500 underline" href="https://g.co/kgs/ZXfrb1v">
											East Fishkill Recreation
										</Link>
									</p>
									<h3 className="pt-3 text-lg font-semibold text-blue-600 dark:text-blue-400">Time</h3>
									<p className="md:text-lg lg:text-base">
										<span>March 29th 10-12pm</span>
									</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Register</h3>
									<p>
										We recommend that you invite your friends and family to come to the event with you, especially if
										you have younger siblings or cousins in the area! <br />
										<br />
										To register for the event fill out the form{" "}
										<Link className="text-blue-500 underline" href="https://forms.gle/SbQLbppGq8JEXtdd9">
											here
										</Link>
										!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
