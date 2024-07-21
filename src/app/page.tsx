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
		<section className="relative h-[70vh] w-full overflow-hidden">
			<img
				src="/placeholder.svg"
				alt="Nature"
				className="h-full w-full object-cover object-center"
				width={1920}
				height={1080}
			/>
			<div className="absolute inset-0 flex items-center justify-center bg-black/50">
				<div className="max-w-3xl px-4 text-center text-white md:px-0">
					<h1 className="mb-4 text-4xl font-bold md:text-6xl">Protecting Our Planet, Together</h1>
					<p className="mb-8 text-lg md:text-xl">
						Our nonprofit is dedicated to defending the environment and promoting sustainable practices. Join us in our
						mission to create a greener, healthier future.
					</p>
					<Link
						href="#"
						className="inline-flex items-center justify-center rounded-md bg-green-500 px-6 py-3 text-sm font-medium text-white hover:bg-green-600 md:text-base"
						prefetch={false}>
						Get Involved
					</Link>
				</div>
			</div>
		</section>
	);
}
