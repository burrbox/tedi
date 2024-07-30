import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { env } from "@/env";
import { type Metadata } from "next";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home - TEDI",
	description: "Welcome to The Environmental Defense Initiative.",
	keywords: ["environment", "climate", "sustainability", "advocacy"],
	alternates: { canonical: env.URL },
	openGraph: {
		type: "website",
		siteName: "The Environmental Defense Initiative",
		url: env.URL,
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
			<section
				title="An image of a forest"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/oh93nln39npdtzsyettf" })})` }}
				className="flex min-h-[70vh] w-screen bg-cover bg-fixed bg-center bg-no-repeat py-12 md:pb-20 md:pt-32 lg:pt-40"
			>
				<div
					className="mx-auto justify-center rounded-xl bg-white/80 py-10 shadow-xl dark:bg-stone-950/80"
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
										<Link href="/join">Get Involved</Link>
									</button>
									<button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
										<Link href="/donate">Donate</Link>
									</button>
								</div>
							</div>
							<div className="flex h-fit flex-col items-start space-y-4">
								<CloudinaryClientWrapper
									alt="An image of our team"
									src="nature/teamCleanup"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
									width="650"
									height="550"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter text-blue-400 sm:text-4xl md:text-5xl">
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
							<h3 className="text-3xl font-bold dark:text-green-400">221</h3>
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
							<h3 className="text-3xl font-bold dark:text-green-400">78</h3>
							<p className="text-muted-foreground">Gallons of Plastic Collected</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-stone-900">
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-2" data-aos="fade-right">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">A Message from Our Founder</h2>
						<p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
								className="rounded-full object-cover"
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
		</div>
	);
}
