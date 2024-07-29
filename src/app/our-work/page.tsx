import { type Metadata } from "next";
import { env } from "@/env";
import { getCldOgImageUrl } from "next-cloudinary";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import Carousel from "./carousel";

export const metadata: Metadata = {
	title: "Our Work - TEDI",
	description: "Find out about all the work we do for our environment!",
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
								<h1 className="text-wrap text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl xl:text-6xl/none">
									Together, <br />
									We Can Make a Difference
								</h1>
								<p className="max-w-[600px] text-wrap text-white md:text-xl">
									TEDI raises awareness of current evnironemntal issues and encourages individuals to take action in
									their own communities by posting frequently on various social media platforms, writing blogs,
									launching petitions, ad hosting webinars.
									<br />
									<br />
									<span className="dark:text-green-500">
										Join us in our mission to create a greener, healthier future.
									</span>
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
								At TEDI we believe that <span className="font-semibold text-green-600">anyone</span> can make a
								difference. All it takes is one signature, one plastic bottle recycled, or one conversation to have a
								positive impact on our planet. Join us <span className="font-semibold text-green-600">today</span> in
								working toward a more <span className="font-semibold text-green-600">sustainable</span> future.
							</p>
						</div>
						<div
							className="mx-auto grid items-start gap-8 py-4 sm:max-w-4xl sm:grid-cols-2 md:max-w-5xl md:gap-20 lg:max-w-7xl lg:grid-cols-3"
							data-aos="fade-in">
							<div className="grid w-full gap-1">
								<div className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 dark:bg-green-700"></div>
								<h2 className="text-center text-2xl text-white">Expert Interviews</h2>
								<p>
									Our expert interviews aim to inspire young activists to pursue careers in sustainability,
									conservation, environmental advocacy, and natural sciences. We interview experts from across the
									country about their professions and how young people can get involved at a local level!
								</p>
							</div>
							<div className="grid w-full gap-1">
								<div className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 dark:bg-green-700"></div>
								<h2 className="text-center text-2xl text-white">Cleanups</h2>
								<p>
									Cleanups are one of the few ways individuals are able to clearly see the tangible impact we are having
									on our environment. These events are excellent ways to connect with others in your community who are
									passionate about protecting the environment all while earning volunteer hours and doing something
									amazing for our planet.
								</p>
							</div>
							<div className="grid w-full gap-1">
								<div className="inline-flex h-12 items-center justify-center rounded-lg bg-green-600 dark:bg-green-700"></div>
								<h2 className="text-center text-2xl text-white">Petitions</h2>
								<p>
									Petitions are how we achieve not only change, but sustainable, long-lasting change that will last for
									generations. Policy and legislation reform is how we make progress - every signature counts!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32" data-aos="fade-in">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-stone-300 px-3 py-1 text-sm text-black">Get Involved</div>
							<h2 className="text-3xl font-bold tracking-tighter text-green-600 sm:text-5xl">Join the Movement</h2>
							<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join us in our next local clean up, hosted from 10-11:30am on August 4th at Patriot Way. <br /> Help us
								clean our local environment and make a difference in our community! Every small action counts in
								protecting the Earth.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link
								href="https://docs.google.com/forms/d/e/1FAIpQLSdRxjerrXZqC4LlJaQDmklnCyL-liINyCnZFoRvL3WCieS1mw/viewform?usp=sharing"
								className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-green-700">
								Sign Up
							</Link>
							<Link
								href="/our-work#gallery"
								className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-blue-700">
								See our past cleanups!
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-stone-800 py-12 md:py-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-32">
				<div className="aspect-video w-full overflow-hidden rounded-lg">
					<h2></h2>
					<iframe
						data-aos="fade-right"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=UmlRV3kb59TWgAGG"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						className="h-full w-full rounded-xl pl-12"
					/>
				</div>
				<div className="mr-12 flex flex-col items-center justify-center space-y-4 text-center" data-aos="fade-left">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-stone-300 px-3 py-1 text-sm text-black">Webinars</div>
						<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl">
							Learn from what Experts have to say
						</h2>
						<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Now, more than ever before, we are seeing the effects of human overpopulation on nature and the
							envionrment on an international level. Although these issues are broad in scope, every community has its
							own unique environment and therefore faces different problms. It is up to you to take action and protect
							the environment – we at TEDI are here to help you do it. Explore the links below to learn how to take
							action.
						</p>
					</div>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Link
							href="https://www.youtube.com/channel/UCLJIczzKZWeqsa2Pmg55F6g"
							className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-green-700">
							See Our Past Webinars
						</Link>
					</div>
				</div>
			</section>
			<Carousel />
		</div>
	);
}
