import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Marquee from "@/components/magicui/marquee";

const images = [
	"nature/teamCleanup",
	"nature/lotCleanup2",
	"nature/teamCleanup3",
	"nature/lotCleanup3",
	"nature/lotCleanup4",
	"nature/teamCleanup5",
	"nature/maggieCleanup",
];
export default function Carousel() {
	return (
		<section className="w-full py-12 md:py-24" id="gallery">
			<div
				className="mx-auto flex flex-col items-center justify-center space-y-4 pb-6 text-center md:pb-12 lg:pb-16"
				data-aos="fade-left"
			>
				<h2 className="text-3xl font-bold tracking-tighter text-green-600 sm:text-5xl dark:text-green-400">
					See pictures from our recent cleanup!
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
								className="object-cover"
							/>
						))}
					</Marquee>
				</div>
			</div>
		</section>
	);
}
