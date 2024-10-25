import Carousel from "@/components/carousel";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { JsonLd } from "@/components/jsonLd";
import { env } from "@/env";
import { type Metadata } from "next";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";
import type { WebSite, WithContext } from "schema-dts";
import { type COBEOptions } from "cobe";
import Globe from "@/components/magicui/globe";
import Teams from "@/components/teams";
import Birthday from "@/components/birthday";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to The Environmental Defense Initiative.",
	keywords: ["environment", "climate", "sustainability", "advocacy"],
	alternates: { canonical: env.URL },
	openGraph: {
		type: "website",
		siteName: "The Environmental Defense Initiative",
		url: env.URL,
		title: "Home - TEDI",
		description: "Welcome to The Environmental Defense Initiative.",
	},
};

const jsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "The Environmental Defense Initiative",
	alternateName: ["TEDI"],
	url: env.URL,
	potentialAction: [
		{ "@type": "DonateAction", target: { "@type": "EntryPoint", urlTemplate: `${env.URL}/donate` } },
		{ "@type": "JoinAction", target: { "@type": "EntryPoint", urlTemplate: `${env.URL}/join` } },
		// { "@type": "SubscribeAction" },
	],
	sourceOrganization: {
		"@type": "Organization",
		name: "The Environmental Defense Initiative",
		// legalName: "The Environmental Defense Initiative",
		url: env.URL,
		logo: getCldImageUrl({ src: "logo" }),
		foundingDate: "2023",
		founders: [{ "@type": "Person", name: "Emma Mazzotta" }],
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "8457979011",
			email: "environmentaldefenseinitiative@gmail.com",
		},
		sameAs: [
			"https://www.linkedin.com/company/the-environmental-defense-initiative/posts",
			"https://www.instagram.com/environmentaldefenseinitiative/",
			"https://www.youtube.com/channel/UCLJIczzKZWeqsa2Pmg55F6g",
			"https://twitter.com/TEDIactivism",
			"https://www.tiktok.com/@tedi_youth",
			"https://medium.com/@environmentaldefenseinitiative",
		],
	},
};

const locations = [
	{ name: "Hopewell Junction, NY", location: [41.5406254, -73.8357815], size: 0.07 },
	{ name: "Miami, FL", location: [25.7825389, -80.3118589], size: 0.04 },
	{ name: "Toronto, ON", location: [43.718371, -79.5428628], size: 0.04 },
	{ name: "Verona, NJ", location: [40.83363, -74.2632469], size: 0.04 },
	{ name: "Warrington, PA", location: [40.2470657, -75.2037622], size: 0.04 },
	{ name: "Lakeland, NY", location: [43.0903, -76.2405], size: 0.04 },
] satisfies COBEOptions["markers"] & { name: string }[];

const globeConfig: Partial<COBEOptions> = {
	dark: 1,
	diffuse: 0.4,
	mapSamples: 16000,
	mapBrightness: 1.2,
	baseColor: [1, 1, 1],
	markerColor: [251 / 255, 100 / 255, 21 / 255],
	glowColor: [1, 1, 1],
	scale: 1.1,
	markers: locations,
};

export default async function Home() {
	return (
		<div className="flex min-h-dvh flex-col">
			<JsonLd data={jsonLd} />
			{/* <Birthday /> */}
			<section
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/oh93nln39npdtzsyettf" })})` }}
				className="flex min-h-[70vh] w-screen bg-cover bg-fixed bg-center bg-no-repeat py-12 md:pb-20 md:pt-32 lg:pt-40"
			>
				<div
					className="mx-3 justify-center rounded-xl bg-white/80 py-10 shadow-xl md:mx-8 lg:mx-auto dark:bg-stone-950/80"
					data-aos="fade-down"
				>
					<div className="space-y-10xl:space-y-16 container">
						<div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
							<div>
								<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-green-600 sm:text-4xl md:text-5xl xl:text-[4rem] 2xl:text-[5rem] dark:text-stone-100">
									The Environmental Defense Initiative
								</h1>
								<p className="mx-auto max-w-[700px] py-5 md:py-10 md:text-xl dark:text-green-500">
									Our nonprofit organization is dedicated to preserving the natural world and creating a sustainable
									future for all.
								</p>
								<div className="space-x-4">
									<button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700">
										<Link href="/join-us">Get Involved</Link>
									</button>
									<button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
										<Link href="/donate">Donate</Link>
									</button>
								</div>
							</div>
							<div className="flex h-fit flex-col items-start space-y-4">
								<CloudinaryClientWrapper
									alt="An image of our team"
									src="cleanup2_rhiq2n"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
									width="1300"
									height="1100"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter text-blue-500 sm:text-4xl md:text-5xl">
							Our Impact in the Past Year
						</h2>
						<p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{
								"We're proud to share the significant progress we've made in protecting the environment and creating a more sustainable future."
							}
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						<div
							className="rounded-xl border-2 border-stone-300 bg-white p-6 text-center shadow-xl dark:border-gray-700 dark:bg-gray-700"
							data-aos="fade-up"
						>
							<h3 className="text-3xl font-bold dark:text-green-400">338</h3>
							<p className="text-muted-foreground">Gallons of Trash Collected</p>
						</div>
						<div
							className="rounded-xl border-2 border-stone-300 bg-white p-6 text-center shadow-xl dark:border-gray-700 dark:bg-gray-700"
							data-aos="fade-up"
						>
							<h3 className="text-3xl font-bold dark:text-green-400">15,000+</h3>
							<p className="text-muted-foreground">People Reached</p>
						</div>
						<div
							className="rounded-xl border-2 border-stone-300 bg-white p-6 text-center shadow-xl dark:border-gray-700 dark:bg-gray-700"
							data-aos="fade-up"
						>
							<h3 className="text-3xl font-bold dark:text-green-400">156</h3>
							<p className="text-muted-foreground">Gallons of Plastic Collected</p>
						</div>
					</div>
				</div>
			</section>
			<section className="flex w-full items-center py-4">
				<div className="container px-4 md:px-6">
					<div className="mx-auto grid justify-center gap-6 lg:grid-cols-2 lg:gap-12">
						<div className="flex flex-col justify-center space-y-4" data-aos="fade-right">
							<div className="space-y-3">
								<h1 className="text-wrap text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl xl:text-6xl/none dark:text-blue-400">
									Together, <br />
									We Can Make a Difference
								</h1>
								<p className="max-w-[600px] text-wrap md:text-xl dark:text-white">
									TEDI raises awareness of current environmental issues and encourages individuals to take action in
									their own communities by posting frequently on various social media platforms, writing blogs,
									launching petitions, and hosting expert interviews.
									<br />
									<br />
									<span className="dark:text-green-500">
										Join us in our mission to create a greener, healthier future.
									</span>
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									href="https://docs.google.com/forms/d/e/1FAIpQLSfEWkGAauRBi07E8-4WRlay7RyXJlLII85dt1FCV2C0m-hI1Q/viewform"
									className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow-xl duration-300 hover:bg-green-700"
								>
									Join the TEDI team
								</Link>
								<Link
									href="/donate"
									className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-xl duration-300 hover:bg-blue-700"
								>
									Donate to support our cause
								</Link>
							</div>
						</div>
						<CloudinaryClientWrapper
							src="nature/vu7xxkgfzwfykqg0yosl"
							alt="An image of an ocean"
							className="mx-auto justify-center rounded-lg"
							data-aos="fade-left"
							width={550}
							height={550}
						/>
					</div>
				</div>
			</section>
			<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2" data-aos="fade-down">
							<div className="inline-block rounded-lg bg-stone-300 px-3 py-1 text-sm text-black">Our Initiatives</div>
							<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
								Protecting the Environment, One Step at a Time
							</h2>
							<p className="mx-auto max-w-4xl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
								At TEDI we believe that <span className="font-semibold text-green-600">anyone</span> can make a
								difference. All it takes is one signature, one plastic bottle recycled, or one conversation to have a
								positive impact on our planet. Join us <span className="font-semibold text-green-600">today</span> in
								working toward a more <span className="font-semibold text-green-600">sustainable</span> future.
							</p>
						</div>
						<div
							className="mx-auto grid items-start gap-8 py-4 sm:max-w-4xl sm:grid-cols-2 md:max-w-5xl md:gap-20 lg:max-w-7xl lg:grid-cols-3"
							data-aos="fade-in"
						>
							<div className="grid w-full gap-1">
								<div className="mb-4 inline-flex h-12 items-center justify-center rounded-lg bg-green-600 shadow-xl dark:bg-green-700">
									<h2 className="text-center text-2xl text-white">Expert Interviews</h2>
								</div>
								<p className="dark:text-white">
									Our expert interviews aim to inspire young activists to pursue careers in sustainability,
									conservation, environmental advocacy, and natural sciences. We interview experts from across the
									country about their professions and how young people can get involved at a local level!
								</p>
							</div>
							<div className="grid w-full gap-1">
								<div className="mb-4 inline-flex h-12 items-center justify-center rounded-lg bg-green-600 shadow-xl dark:bg-green-700">
									<h2 className="text-center text-2xl text-white">Cleanups</h2>
								</div>
								<p className="dark:text-white">
									Cleanups are one of the few ways individuals are able to clearly see the tangible impact we are having
									on our environment. These events are excellent ways to connect with others in your community who are
									passionate about protecting the environment all while earning volunteer hours and doing something
									amazing for our planet.
								</p>
							</div>
							<div className="grid w-full gap-1">
								<div className="mb-4 inline-flex h-12 items-center justify-center rounded-lg bg-green-600 shadow-xl dark:bg-green-700">
									<h2 className="text-center text-2xl text-white">Petitions</h2>
								</div>
								<p className="dark:text-white">
									Petitions are how we achieve not only change, but sustainable, long-lasting change that will last for
									generations. Policy and legislation reform is how we make progress - every signature counts!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-stone-900">
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="mx-auto justify-center space-y-2" data-aos="fade-right">
						<h2 className="text-3xl font-bold tracking-tighter text-green-600 md:text-4xl/tight dark:text-green-400">
							A Message from Our Founder
						</h2>
						<p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{`"TEDI was founded with the mission of inspiring youth activists to use their voices to inspire long-lasting sustainable change through education, initiative, and creativity. We believe that every individual on this Earth must do their part to keep our planet clean and fight for a sustainable future."`}
						</p>
						<div className="flex gap-4 py-5 lg:justify-start">
							<CloudinaryClientWrapper
								height="64"
								width="64"
								src="TEDI Bio/x6q3sdgebdrhx2pb5b4k"
								alt="An image of TEDI Founder Emma Mazzotta"
								gravity="face"
								crop="fill"
								className="rounded-full object-cover shadow-xl"
							/>
							<div>
								<h4 className="text-lg font-semibold">Emma Mazzotta</h4>
								<p className="text-muted-foreground">Founder, Executive Director</p>
							</div>
						</div>
					</div>
					<CloudinaryClientWrapper
						src="other/wq4nmeqsd2o4lf1rc4ly"
						width="550"
						height="450"
						alt="A local high school cleanup event"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
						data-aos="fade-left"
						data-aos-delay="200"
					/>
				</div>
			</section>
			<section className="w-full bg-stone-100 px-5 py-6 text-center md:px-10 md:py-12 lg:py-24 dark:bg-stone-800">
				<div className="my-5 inline-block rounded-lg bg-stone-300 px-3 py-1 text-sm text-black">Get Involved</div>
				<h2 className="text-center text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
					Fall Fast Fashion Campaign
				</h2>
				<p className="mx-auto max-w-4xl py-4 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
					This campaign aims to mitigate the environmental harm that fast fashion causes by hosting clothing drives
					across the <span className="font-semibold text-green-600">United States and Canada</span>. Clothing drives are
					an excellent way to{" "}
					<span className="font-semibold text-green-600">repurpose, reuse, and recycle clothing</span> to prevent waste
					from accumulating in landfills.
				</p>
				<div className="mx-10 grid flex-col items-center justify-center gap-6 space-y-4 text-center md:grid-cols-2">
					<div className="mt-5 h-full space-y-2 rounded-xl bg-stone-200 px-4 py-10 md:px-8 dark:bg-stone-900">
						<p className="pb-5 text-center text-lg font-medium">
							<span className="font-semibold text-green-600 dark:text-green-400">Donate</span> old/used clothing at one
							of our several clothing drive donation bins! If you don’t see a clothing drive in your area, consider
							hosting one yourself. <Link href="/join-us">Become a member</Link> today to receive free, one-on-one
							guidance on{" "}
							<span className="font-semibold text-green-600 dark:text-green-400">starting a clothing drive</span> from a
							member of our campaign team and gain access to an exclusive action toolkit including all of the materials
							you need to launch a{" "}
							<span className="font-semibold text-green-600 dark:text-green-400">successful drive</span>.
						</p>
						<div className="my-5 text-center font-bold tracking-tighter text-blue-600 dark:text-blue-400">
							<Link
								href="/campaigns" //temporary until i work on the campaign page
								className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow-xl duration-300 hover:bg-green-700"
							>
								Find Out More
							</Link>
						</div>
					</div>
					<div className="mt-5 h-full space-y-2 rounded-xl bg-stone-200 px-4 py-10 md:px-8 dark:bg-stone-900">
						<h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">Our Locations</h3>
						<p className="py-4 text-xl font-medium">
							Stop by at one of these locations to drop off some clothes and save the environment!
						</p>
						<ul className="list-inside list-disc text-left md:pl-12">
							<li>
								<span className="font-semibold">Hopewell Junction, NY, USA</span> - October 19st 12-4pm @{" "}
								<Link
									className="text-blue-500 underline"
									href="https://www.google.com/maps/place/Hopewell+Recreation+Park/@41.5749365,-73.8121169,15.79z/data=!4m14!1m7!3m6!1s0x89dd4818425ae529:0x696af3813e741117!2sJohn+Jay+Senior+High+School!8m2!3d41.5406214!4d-73.8332066!16s%2Fm%2F025wqkv!3m5!1s0x89dd4742b5ea7787:0x73795bf9d941a3b4!8m2!3d41.5768458!4d-73.804657!16s%2Fg%2F11k61m0mfd?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
								>
									Hopewell Recreation Park
								</Link>
							</li>
							<li>
								<span className="font-semibold">Shrub Oak, NY, USA</span> - donation bin addresses TBD
							</li>
							<li>
								<span className="font-semibold">Verona, NJ, USA</span> - donation bin addresses TBD
							</li>
							<li>
								<span className="font-semibold">Toronto, ON, Canada</span> - donation bin addresses TBD
							</li>
							<li>
								<span className="font-semibold">Miami, FL, USA</span> - donation bin addresses TBD
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="w-full bg-white px-12 py-12 md:py-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-32 dark:bg-stone-900">
				<div className="aspect-video w-full overflow-hidden rounded-lg">
					<iframe
						data-aos="fade-right"
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/sZR88xj_-lU?si=pFRTWVhh_o8oupOd"
						title=" Sustainability Director Expert Interview with Leola Specht"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						className="h-full w-full rounded-xl"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
				<div className="flex flex-col items-center justify-center space-y-4 text-center" data-aos="fade-left">
					<div className="space-y-2">
						<div className="mt-5 inline-block rounded-lg bg-stone-300 px-3 py-1 text-sm text-black lg:mt-0">
							Expert Interviews
						</div>
						<h2 className="text-3xl font-bold tracking-tighter text-green-600 sm:text-5xl dark:text-green-400">
							Learn from what Experts have to say
						</h2>
						<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
							Now, more than ever before, we are seeing the effects of human overpopulation on nature and the
							environment on an international level. Although these issues are broad in scope, every community has its
							own unique environment and therefore faces different problems. It is up to you to take action and protect
							the environment - we at TEDI are here to help you do it. Explore the links below to learn how to take
							action.
						</p>
					</div>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Link
							href="https://www.youtube.com/channel/UCLJIczzKZWeqsa2Pmg55F6g"
							className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-green-700"
						>
							See Our Past Webinars
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full bg-stone-100 px-4 py-12 md:py-24 lg:py-32 dark:bg-stone-800">
				<h1 className="pb-8 text-center text-5xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
					See where our members are!
				</h1>
				<Globe className="w-full" config={globeConfig} speed={0.0} phi={0} markers={locations} />
			</section>
			<Carousel />
			<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800" data-aos="fade-in">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-stone-300 px-3 py-1 text-sm text-black">Interested?</div>
							<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
								Join the Movement
							</h2>
							<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join us in our mission to create a greener, healthier future. Every small action counts in protecting
								the Earth.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link
								href="/join-us"
								className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-green-700"
							>
								Join Us
							</Link>
							<Link
								href="/petitions"
								className="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow duration-300 hover:bg-blue-700"
							>
								Sign a petition!
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
