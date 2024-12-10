import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Marquee from "@/components/magicui/marquee";

const images = [
	"clothingdrive/liyteccugtuokqmle4aw",
	"clothingdrive/ulhn3zopqj7j9fcuxflm",
	"clothingdrive/egi5apu8eal1wfywkief",
	"clothingdrive/m7oxk0hkeydrrzrvsqk5",
	"clothingdrive/wd2e00qdonvoqhcpgych",
	"clothingdrive/osbas1157dqukpg59u4o",
	"clothingdrive/ztkcyl8kijtedn98wv4a",
	"clothingdrive/oyabxd0tfjr2d2z2dgxf",
];
export default function CampaignsCarousel() {
	return (
		<section className="w-full py-12 md:py-24" id="gallery">
			<div
				className="mx-auto flex flex-col items-center justify-center space-y-4 pb-6 text-center md:pb-12 lg:pb-16"
				data-aos="fade-left"
			>
				<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
					Check out our recent clothing drives!
				</h2>
			</div>
			<div className="container px-4 md:px-6">
				<div className="max-w-6x w-full">
					<Marquee pauseOnHover className="[--duration:20s]">
						{images.map((image) => (
							<CloudinaryClientWrapper
								key={image}
								src={image}
								width={200}
								height={400}
								alt={image}
								crop="auto"
								className="object-cover duration-300 hover:scale-110"
							/>
						))}
					</Marquee>
				</div>
			</div>
		</section>
	);
}
