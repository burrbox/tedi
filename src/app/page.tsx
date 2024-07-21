import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { type Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home - TEDI",
	description: "Welcome to The Environmental Defense Initiative.",
	keywords: ["environment", "climate", "sustainability", "advocacy"],
	openGraph: {
		type: "website",
		siteName: "The Environmental Defense Initiative",
		title: "Home - TEDI",
		description: "Welcome to The Environmental Defense Initiative.",
		images: {
			url: getCldOgImageUrl({ src: "nature/tallForest" }),
			width: 1200,
			height: 627,
			alt: "An image of a forest",
		},
	},
};

export default async function Home() {
	return (
		<div className="flex min-h-dvh flex-col">
			<section className="pb:pb-16 w-full pb-6 pt-12 md:pb-12 md:pt-24 lg:pt-32">
				<div className="container space-y-10 xl:space-y-16">
					<div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
						<div>
							<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-green-600 sm:text-4xl md:text-5xl xl:text-[4rem] 2xl:text-[5rem]">
								The Environmental Defense Initiative
							</h1>
							<p className="text-muted-foreground mx-auto max-w-[700px] py-5 md:py-10 md:text-xl">
								Our nonprofit organization is dedicated to preserving the natural world and creating a sustainable
								future for all.
							</p>
							<div className="space-x-4">
								<button className="text-primary-foreground focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-green-600/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
									<a href="/join">Join Us</a>
								</button>
								<button className="border-input focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md border bg-blue-400 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-blue-500 hover:text-black focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
									<a href="/donate">Donate</a>
								</button>
							</div>
						</div>
						<div className="flex flex-col items-start space-y-4">
							<CloudinaryClientWrapper
								alt="An image of our team"
								src="TEDI Bio/rainbow-hiro"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
								width="650"
								height="550"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-stone-200 py-12 md:py-24 lg:py-32">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter text-blue-500 sm:text-4xl md:text-5xl">
							Our Impact in the Past Year
						</h2>
						<p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{`We're proud to share the significant progress we've made in protecting the environment and creating a more
							sustainable future.`}
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-xl border-2 border-stone-300 bg-white p-6 text-center">
							<h3 className="text-3xl font-bold">50,000+</h3>
							<p className="text-muted-foreground">Trees Planted</p>
						</div>
						<div className="rounded-xl border-2 border-stone-300 bg-white p-6 text-center">
							<h3 className="text-3xl font-bold">15,000</h3>
							<p className="text-muted-foreground">Acres of Land Preserved</p>
						</div>
						<div className="rounded-xl border-2 border-stone-300 bg-white p-6 text-center">
							<h3 className="text-3xl font-bold">20,000+</h3>
							<p className="text-muted-foreground">Volunteers Engaged</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-muted w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">A Message from Our Founder</h2>
						<p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{`"At our nonprofit, we believe that protecting the environment is not just a responsibility, but a moral
							imperative. We are committed to making a lasting impact and creating a sustainable future for generations
							to come."`}
						</p>
						<div className="flex gap-4 lg:justify-start">
							<CloudinaryClientWrapper
								src="TEDI Bio/x6q3sdgebdrhx2pb5b4k"
								width="64"
								height="64"
								alt="CEO"
								className="rounded-full"
							/>
							<div>
								<h4 className="text-lg font-semibold">Emma Mazzotta</h4>
								<p className="text-muted-foreground">Founder, Executive Director</p>
							</div>
						</div>
					</div>
					<CloudinaryClientWrapper
						src="TEDI Bio/rainbow-hiro"
						width="550"
						height="450"
						alt="CEO"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
					/>
				</div>
			</section>
		</div>
	);
}
