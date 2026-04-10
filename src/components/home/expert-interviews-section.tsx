import { SectionBadge } from "@/components/ui/section-badge";
import Link from "next/link";

export function ExpertInterviewsSection() {
	return (
		<section className="w-full bg-white px-12 py-12 md:py-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-32 dark:bg-stone-900">
			<div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl">
				<iframe
					data-aos="fade-right"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/itVIr3ztSyA?si=3u96gsPESkxp8QbQ"
					title="The Intersection of Soil Science, Education, and Research with Dr. Rattan Lal"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					className="h-full w-full"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</div>
			<div className="flex flex-col items-center justify-center space-y-4 text-center" data-aos="fade-left">
				<div className="space-y-3">
					<SectionBadge className="mt-6 lg:mt-0">Expert Interviews</SectionBadge>
					<h2 className="text-3xl font-bold tracking-tighter text-green-600 sm:text-5xl dark:text-green-400">
						Learn from what Experts have to say
					</h2>
					<p className="max-w-[900px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-300">
						Now, more than ever before, we are seeing the effects of human overpopulation on nature and the environment
						on an international level. Although these issues are broad in scope, every community has its own unique
						environment and therefore faces different problems. It is up to you to take action and protect the
						environment - we at TEDI are here to help you do it.
					</p>
				</div>
				<Link
					href="https://www.youtube.com/@EnvironmentalDefenseInitiative"
					className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-green-700"
				>
					See Our Past Webinars
				</Link>
			</div>
		</section>
	);
}
