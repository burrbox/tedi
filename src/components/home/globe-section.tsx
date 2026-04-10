import Globe from "@/components/magicui/globe";
import { type COBEOptions } from "cobe";

export const locations = [
	{ name: "Hopewell Junction, NY", location: [41.5406254, -73.8357815], size: 0.07 },
	{ name: "Miami, FL", location: [25.7825389, -80.3118589], size: 0.04 },
	{ name: "Toronto, ON", location: [43.718371, -79.5428628], size: 0.02 },
	{ name: "Lakeland, NY", location: [43.0903, -76.2405], size: 0.04 },
	{ name: "Mumbai, India", location: [19.0821772, 72.7160353], size: 0.02 },
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

export function GlobeSection() {
	return (
		<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800">
			<div className="container px-4 text-center md:px-6">
				<h2 className="pb-8 text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
					See where our members are!
				</h2>
			</div>
			<Globe className="w-full" config={globeConfig} speed={0.002} phi={0} markers={locations} />
		</section>
	);
}
