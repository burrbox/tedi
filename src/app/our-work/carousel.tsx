import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";

export default function Carousel() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32" id="gallery">
			<div className="container px-4 md:px-6">
				<div className="max-w-6x w-full">
					<CloudinaryClientWrapper
						src="nature/lotCleanup3"
						width={1200}
						height={400}
						alt="Forest"
						className="aspect-[3/1] object-cover"
					/>
					<CloudinaryClientWrapper
						src="nature/lotCleanup2"
						width={1200}
						height={400}
						alt="Forest"
						className="aspect-[3/1] object-cover"
					/>
					<CloudinaryClientWrapper
						src="nature/lotCleanup4"
						width={1200}
						height={400}
						alt="Forest"
						className="aspect-[3/1] object-cover"
					/>
				</div>
				{/*how do i make a carousel */}
			</div>
		</section>
	);
}
