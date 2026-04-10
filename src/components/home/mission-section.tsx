import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";

export function MissionSection() {
	return (
		<section className="flex w-full items-center py-12 md:py-24">
			<div className="container px-4 md:px-6">
				<div className="mx-auto grid justify-center gap-6 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-6" data-aos="fade-right">
						<h2 className="text-wrap text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl xl:text-6xl/none dark:text-blue-400">
							Together, <br />
							We Can Make a Difference
						</h2>
						<p className="max-w-[600px] text-wrap text-stone-600 md:text-xl dark:text-stone-200">
							TEDI raises awareness of current environmental issues and encourages individuals to take action in their
							own communities by posting frequently on various social media platforms, writing blogs, launching
							petitions, and hosting expert interviews.
						</p>
						<p className="font-medium text-green-600 dark:text-green-500">
							Join us in our mission to create a greener, healthier future.
						</p>
						<div className="flex flex-col gap-3 min-[400px]:flex-row">
							<Link
								href="https://docs.google.com/forms/d/e/1FAIpQLSfEWkGAauRBi07E8-4WRlay7RyXJlLII85dt1FCV2C0m-hI1Q/viewform"
								className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow-md transition-colors duration-200 hover:bg-green-700"
							>
								Join the TEDI team
							</Link>
							<Link
								href="https://www.instagram.com/environmentaldefenseinitiative/"
								className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-md transition-colors duration-200 hover:bg-blue-700"
							>
								Check out our social media
							</Link>
						</div>
					</div>
					<CloudinaryClientWrapper
						src="nature/vu7xxkgfzwfykqg0yosl"
						alt="An image of an ocean"
						className="mx-auto justify-center rounded-xl shadow-xl"
						data-aos="fade-left"
						width={550}
						height={550}
					/>
				</div>
			</div>
		</section>
	);
}
