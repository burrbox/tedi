import Carousel from "@/components/carousel";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { JsonLd } from "@/components/jsonLd";
import { env } from "@/env";
import { type Metadata } from "next";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";
import type { WebSite, WithContext } from "schema-dts";
import { type COBEOptions } from "cobe";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/magicui/globe"), {
	ssr: false,
	loading: () => (
		<div className="flex h-[400px] w-full items-center justify-center md:h-[500px] lg:h-[600px]">
			<div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
		</div>
	),
});

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
	potentialAction: [{ "@type": "JoinAction", target: { "@type": "EntryPoint", urlTemplate: `${env.URL}/join` } }],
	sourceOrganization: {
		"@type": "Organization",
		name: "The Environmental Defense Initiative",
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
			"https://www.youtube.com/@EnvironmentalDefenseInitiative",
			"https://twitter.com/TEDIactivism",
			"https://www.tiktok.com/@tedi_youth",
			"https://medium.com/@environmentaldefenseinitiative",
		],
	},
};

const locations = [
	{ name: "Hopewell Junction, NY", location: [41.5406254, -73.8357815], size: 0.07 },
	{ name: "Miami, FL", location: [25.7825389, -80.3118589], size: 0.04 },
	{ name: "Toronto, ON", location: [43.718371, -79.5428628], size: 0.02 },
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

// Helper function to get alternating background colors for sections
const getSectionBg = (index: number) => {
	return index % 2 === 0 ? "bg-stone-100 dark:bg-stone-800" : "bg-white dark:bg-stone-900";
};

export default async function Home() {
	// Track section index for automatic background color alternation
	let sectionIndex = 0;

	return (
		<div className="flex min-h-dvh flex-col">
			<JsonLd data={jsonLd} />
			<section
				style={{
					backgroundImage: `url(${getCldImageUrl({
						src: "nature/oh93nln39npdtzsyettf",
						width: 1280,
						height: 720,
						crop: "fill",
						quality: "auto",
						format: "auto",
					})})`,
				}}
				className="relative flex w-screen bg-cover bg-fixed bg-center bg-no-repeat py-12 md:min-h-[60vh] md:pb-20 md:pt-32 lg:pt-40"
			>
				<div className="absolute inset-0 bg-gradient-to-br from-black/35 to-transparent" />

				<div
					className="relative mx-3 w-full justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 to-white/85 px-6 py-12 shadow-2xl md:mx-8 lg:mx-auto lg:max-w-[90rem] lg:px-12 dark:from-stone-950/95 dark:to-stone-950/85"
					data-aos="fade-down"
				>
					<div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/15 blur-2xl dark:bg-green-500/10" />
					<div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-400/15 blur-2xl dark:bg-blue-500/10" />

					<div className="container relative z-10">
						<div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12 xl:gap-16">
							<div className="h-fit">
								<div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 shadow-sm dark:bg-green-900/30 dark:text-green-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="h-4 w-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
										/>
									</svg>
									<span>Environmental Advocacy & Education</span>
								</div>
								<h1 className="lg:leading-tighter bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl xl:text-[4rem] 2xl:text-[5rem] dark:from-green-400 dark:via-emerald-400 dark:to-green-500">
									The Environmental Defense Initiative
								</h1>
								<p className="max-w-[700px] text-lg leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
									Our nonprofit organization is dedicated to{" "}
									<span className="font-semibold text-green-700 dark:text-green-400">preserving the natural world</span>{" "}
									and creating a{" "}
									<span className="font-semibold text-blue-700 dark:text-blue-400">sustainable future</span> for all.
								</p>
								<div className="flex flex-col gap-4 py-5 sm:flex-row md:py-10">
									<Link
										href="/join-us"
										className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
									>
										<span className="relative z-10">Get Involved</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
											stroke="currentColor"
											className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
										</svg>
										<div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
									</Link>
									<Link
										href="/petitions"
										className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg dark:bg-stone-900 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2}
											stroke="currentColor"
											className="h-5 w-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
											/>
										</svg>
										<span>Sign a Petition</span>
									</Link>
								</div>
							</div>
							<div className="flex h-fit flex-col items-center self-center">
								<div className="relative">
									<div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 opacity-15 blur-lg dark:opacity-25" />
									<CloudinaryClientWrapper
										alt="An image of our team"
										src="cleanup2_rhiq2n"
										className="relative mx-auto aspect-video overflow-hidden rounded-2xl object-cover shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10"
										width={960}
										height={540}
										sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 100vw"
										quality="auto"
										format="auto"
										priority={true}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={`w-full py-12 md:py-24 lg:py-32 ${getSectionBg(sectionIndex++)}`}>
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
						<div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-800" data-aos="fade-up">
							<h3 className="text-4xl font-bold text-gray-900 dark:text-green-400">338</h3>
							<p className="text-muted-foreground mt-2">Gallons of Trash Collected</p>
						</div>
						<div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-800" data-aos="fade-up">
							<h3 className="text-4xl font-bold text-gray-900 dark:text-green-400">15,000+</h3>
							<p className="text-muted-foreground mt-2">People Reached</p>
						</div>
						<div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-gray-800" data-aos="fade-up">
							<h3 className="text-4xl font-bold text-gray-900 dark:text-green-400">156</h3>
							<p className="text-muted-foreground mt-2">Gallons of Plastic Collected</p>
						</div>
					</div>
				</div>
			</section>
			<section className={`flex w-full items-center py-12 md:py-24 lg:py-32 ${getSectionBg(sectionIndex++)}`}>
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
							<div className="flex flex-col gap-4 sm:flex-row">
								<Link
									href="https://docs.google.com/forms/d/e/1FAIpQLSfEWkGAauRBi07E8-4WRlay7RyXJlLII85dt1FCV2C0m-hI1Q/viewform"
									className="inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl"
								>
									Join the TEDI team
								</Link>
								<Link
									href="https://www.instagram.com/environmentaldefenseinitiative/"
									className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
								>
									Check out our social media
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
							sizes="(min-width: 1280px) 35vw, (min-width: 768px) 45vw, 90vw"
							quality="auto"
							format="auto"
							dpr="auto"
							loading="lazy"
						/>
					</div>
				</div>
			</section>
			<section className={`w-full py-12 md:py-24 lg:py-32 ${getSectionBg(sectionIndex++)}`}>
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2" data-aos="fade-down">
							<div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
								Our Initiatives
							</div>
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
			<section className={`w-full py-12 md:py-24 lg:py-32 ${getSectionBg(sectionIndex++)}`}>
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
								height={64}
								width={64}
								src="TEDI Bio/x6q3sdgebdrhx2pb5b4k"
								alt="An image of TEDI Founder Emma Mazzotta"
								gravity="face"
								crop="fill"
								className="rounded-full object-cover shadow-xl"
								quality="auto"
								format="auto"
								dpr="auto"
								loading="lazy"
							/>
							<div>
								<h4 className="text-lg font-semibold">Emma Mazzotta</h4>
								<p className="text-muted-foreground">Founder, Executive Director</p>
							</div>
						</div>
					</div>
					<CloudinaryClientWrapper
						src="other/wq4nmeqsd2o4lf1rc4ly"
						width={550}
						height={309}
						alt="A local high school cleanup event"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
						data-aos="fade-left"
						data-aos-delay="200"
						sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 100vw"
						quality="auto"
						format="auto"
						dpr="auto"
						loading="lazy"
					/>
				</div>
			</section>
			<section
				className={`w-full px-12 py-12 md:py-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-32 ${getSectionBg(sectionIndex++)}`}
			>
				<div className="aspect-video w-full overflow-hidden rounded-lg">
					<iframe
						data-aos="fade-right"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/ovHgx8kr_CM?si=8xMem1qFeQz5CZ0l"
						title="Water Security and the Global Water Crisis | Dr. Kate Brauman on Ecosystems & Advocacy"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						className="h-full w-full rounded-xl"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="flex flex-col items-center justify-center space-y-4 text-center" data-aos="fade-left">
					<div className="space-y-2">
						<div className="mt-5 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800 lg:mt-0 dark:bg-green-900/30 dark:text-green-400">
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
					<div className="flex flex-col gap-4 sm:flex-row">
						<Link
							href="https://www.youtube.com/@EnvironmentalDefenseInitiative"
							className="inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl"
						>
							See Our Past Webinars
						</Link>
					</div>
				</div>
			</section>
			{/* <section className={`w-full py-12 md:py-24 lg:py-32 ${getSectionBg(sectionIndex++)}`}>
				<div className="container px-4 md:px-6">
					<h1 className="pb-8 text-center text-5xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
						See where our members are!
					</h1>
					<Globe className="w-full" config={globeConfig} speed={0.002} phi={0} markers={locations} />
				</div>
			</section> */}
			<section className={`w-full py-12 md:py-24 lg:py-32 ${getSectionBg(sectionIndex++)}`}>
				<Carousel />
			</section>
			<section className={`w-full py-12 md:py-24 lg:py-32 ${getSectionBg(sectionIndex++)}`} data-aos="fade-in">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
								Interested?
							</div>
							<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
								Join the Movement
							</h2>
							<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join us in our mission to create a greener, healthier future. Every small action counts in protecting
								the Earth.
							</p>
						</div>
						<div className="flex flex-col gap-4 sm:flex-row">
							<Link
								href="/join-us"
								className="inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl"
							>
								Join Us
							</Link>
							<Link
								href="/petitions"
								className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
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
