import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import Globe from "@/components/magicui/globe";
import { type COBEOptions } from "cobe";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Toolkits",
	description: "Our advocacy toolkits.",
	alternates: { canonical: `${env.URL}/petitions` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/petitions`,
		title: "Petitions - TEDI",
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

const globeConfig: Partial<COBEOptions> = {
	dark: 1,
	diffuse: 0.4,
	mapSamples: 16000,
	mapBrightness: 1.2,
	baseColor: [1, 1, 1],
	markerColor: [251 / 255, 100 / 255, 21 / 255],
	glowColor: [1, 1, 1],
	markers: [
		{ location: [14.5995, 120.9842], size: 0.03 },
		{ location: [19.076, 72.8777], size: 0.1 },
		{ location: [23.8103, 90.4125], size: 0.05 },
		{ location: [30.0444, 31.2357], size: 0.07 },
		{ location: [39.9042, 116.4074], size: 0.08 },
		{ location: [-23.5505, -46.6333], size: 0.1 },
		{ location: [19.4326, -99.1332], size: 0.1 },
		{ location: [40.7128, -74.006], size: 0.1 },
		{ location: [34.6937, 135.5022], size: 0.05 },
		{ location: [41.0082, 28.9784], size: 0.06 },
	],
};

export default async function Toolkit() {
	const session = await auth();
	if (!session) redirect("/signin");

	return (
		<div className="min-h-screen w-full px-8">
			<section className="h-[80vh] pt-8">
				<h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">See where our members are!</h1>
				<Globe
					className="mt-24 w-full"
					config={globeConfig}
					speed={0.001}
					phi={-0.5}
					markers={[
						{ name: "New York", location: [14.5995, 120.9842] },
						{ name: "London", location: [39.9042, 116.4074] },
					]}
				/>
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
						<h1 className="mb-2 text-4xl font-bold">The Test Campaign</h1>
						<p className="my-2">Some description of the campaign</p>
						<Link
							className="rounded-md bg-green-600 px-2 py-1 hover:bg-green-500"
							href={`https://www.canva.com/design/DAGNVCdAnYI/YQpmkVQrIaY_P0K3t_NXUA/edit?utm_content=DAGNVCdAnYI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`}
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
