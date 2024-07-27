import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Our Work - TEDI",
	description: "Fidn out about all the work we do for our environPetitionsment!",
	keywords: ["nature", "defense", "environment", "climate", "sustainability"],
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/our-work`,
		title: "Our Work - TEDI",
		type: "website",
		description: "Find out about all the work we do for our environment!",
		images: [
			{
				url: getCldOgImageUrl({ src: "nature/mountainWide" }),
				width: 1200,
				height: 627,
				alt: "An image of a mountain",
			},
		],
	},
};

export default async function OurWork({}) {
	return (
		<div className="flex min-h-screen flex-col">
			<section className="flex h-screen w-full items-center">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div className="flex flex-col justify-center space-y-4" data-aos="fade-right">
							<div className="space-y-2">
								<h1 className="text-wrap text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl xl:text-6xl/none dark:text-white">
									Together, <br />
									We Can Make a Difference
								</h1>
								<p className="max-w-[600px] text-wrap md:text-xl dark:text-green-500">
									The Environmental Defense Initiative is dedicated to environmental conservation and sustainability.
									Join us in our mission to create a greener, healthier future.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									href="/join"
									className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-green-700">
									Join Us
								</Link>
								<Link
									href="https://docs.google.com/forms/d/e/1FAIpQLSdRxjerrXZqC4LlJaQDmklnCyL-liINyCnZFoRvL3WCieS1mw/viewform?usp=sharing"
									className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-blue-700">
									Help our summer clean up
								</Link>
							</div>
						</div>
						<CloudinaryClientWrapper
							src="nature/vu7xxkgfzwfykqg0yosl"
							alt="An image of an ocean"
							className="rounded-lg"
							data-aos="fade-left"
							width={550}
							height={550}
						/>
					</div>
				</div>
				{/* <div
					title="An image of the Redwood Forest"
					style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/tallForest" })})` }}
					className="flex h-[70vh] w-screen bg-cover bg-fixed bg-center bg-no-repeat">
					<div className="container relative mx-auto h-fit w-full px-4 py-16">
						<div className="absolute inset-0 mx-auto mt-28 w-fit md:mt-32 lg:mt-44 2xl:mt-52" data-aos="fade-down">
							<div className="flex flex-col justify-center rounded-xl bg-white p-10 lg:p-20 dark:bg-emerald-950">
								<h1 className="text-center text-6xl font-bold text-blue-600 dark:text-white">Petitions</h1>
								<h2 className="text-wrap pt-6 text-center text-xl text-green-600 dark:text-green-300">
									Be the change you want to see in the world.
									<br />
									Sign a petition; every signature counts.
								</h2>
							</div>
						</div>
					</div>
				</div> */}
			</section>
			<section className="w-full bg-stone-800 py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2" data-aos="fade-down">
							<div className="inline-block rounded-lg bg-stone-300 px-3 py-1 text-sm text-black">Our Initiatives</div>
							<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl">
								Protecting the Environment, One Step at a Time
							</h2>
							<p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								From local cleanups to raising awareness through webinars, our club is dedicated defending our{" "}
								<span className="font-medium text-green-600">precious environment</span>. Join us in creating a more
								sustainable future.
							</p>
						</div>
						<div
							className="mx-auto grid items-start gap-8 py-4 sm:max-w-4xl sm:grid-cols-2 md:max-w-5xl md:gap-20 lg:max-w-7xl lg:grid-cols-3"
							data-aos="fade-in">
							<div className="grid w-full gap-1">
								<div className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 dark:bg-green-700"></div>
								<h2 className="text-center text-2xl text-white">Cleanups</h2>
								<p>
									we do all sorts of cool stuff! for example we do cool stuff! for example we do cool stuff! for example
									we do cool stuff! for example we do cool stuff!
								</p>
							</div>
							<div className="grid w-full gap-1">
								<div className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 dark:bg-green-700"></div>
								<h2 className="text-center text-2xl text-white">Webinars</h2>
								<p>we do all sorts of cool stuff!</p>
							</div>
							<div className="grid w-full gap-1">
								<div className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 dark:bg-green-700"></div>
								<h2 className="text-center text-2xl text-white">Petitions</h2>
								<p>we do all sorts of cool stuff!</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
