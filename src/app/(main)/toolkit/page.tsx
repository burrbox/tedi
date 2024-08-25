import { type Metadata } from "next";
import { env } from "@/env";
import { getCldOgImageUrl } from "next-cloudinary";
import Globe from "@/components/magicui/globe";
import { type COBEOptions } from "cobe";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Toolkits",
	description: "Our advocacy toolkits.",
	alternates: { canonical: `${env.URL}/toolkit` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/toolkit`,
		title: "Toolkit - TEDI",
		type: "website",
		description: "Our advocacy toolkits.",
		images: {
			url: getCldOgImageUrl({ src: "nature/tallForest" }),
			width: 1200,
			height: 627,
			alt: "An image of the Redwood Forest",
		},
	},
};

const locations = [
	{ name: "Hudson Valley", location: [41.5406254, -73.8357815], size: 0.07 },
	{ name: "Miami", location: [25.7825389, -80.3118589], size: 0.04 },
	{ name: "Toronto", location: [43.718371, -79.5428628], size: 0.04 },
	{ name: "Verona, NJ", location: [40.83363, -74.2632469], size: 0.04 },
	{ name: "Warrington, Penn", location: [40.2470657, -75.2037622], size: 0.04 },
] satisfies COBEOptions["markers"] & { name: string }[];

const globeConfig: Partial<COBEOptions> = {
	dark: 1,
	diffuse: 0.4,
	mapSamples: 16000,
	mapBrightness: 1.2,
	baseColor: [1, 1, 1],
	markerColor: [251 / 255, 100 / 255, 21 / 255],
	glowColor: [1, 1, 1],
	scale: 1,
	markers: locations,
};

export default async function Toolkit() {
	// const session = await auth();
	// if (!session) redirect("/signin");

	return (
		<div className="min-h-screen w-full px-8">
			<section className="h-[80vh] pt-8">
				<h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">See where our members are!</h1>
				<div>
					<Globe className="mt-24 w-full" config={globeConfig} speed={0.001} phi={-0.5} markers={locations} />
				</div>
			</section>
			<section className="mx-auto my-8 max-w-6xl">
				<div className="flex flex-col-reverse gap-8 sm:flex-row">
					<div>
						<CloudinaryClientWrapper
							className="max-h-[80vh] w-fit"
							src="toolkit/cleanup"
							alt="The toolkit for the cleanup campaign"
							width={1080}
							height={2160}
						/>
					</div>
					<div className="min-w-72">
						<h1 className="mb-2 text-4xl font-bold">The Cleanup Campaign</h1>
						<p className="my-2">Convince people to clean up with this toolkit</p>
						<Link
							className="rounded-md bg-green-600 px-2 py-1 hover:bg-green-500"
							href={`https://www.canva.com/design/DAGNVCdAnYI/YQpmkVQrIaY_P0K3t_NXUA/view`}
							target="_blank"
						>
							Download
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
