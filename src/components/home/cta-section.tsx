import { SectionBadge } from "@/components/ui/section-badge";
import Link from "next/link";

export function CTASection() {
	return (
		<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800" data-aos="fade-in">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-6 text-center">
					<div className="space-y-3">
						<SectionBadge>Interested?</SectionBadge>
						<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
							Join the Movement
						</h2>
						<p className="max-w-[700px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-300">
							Join us in our mission to create a greener, healthier future. Every small action counts in protecting the
							Earth.
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-3">
						<Link
							href="/join-us"
							className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-green-700"
						>
							Join Us
						</Link>
						<Link
							href="/petitions"
							className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-blue-700"
						>
							Sign a Petition
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
