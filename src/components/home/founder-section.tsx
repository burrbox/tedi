import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";

export function FounderSection() {
	return (
		<section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-stone-900">
			<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
				<div className="space-y-4" data-aos="fade-right">
					<h2 className="text-3xl font-bold tracking-tighter text-green-600 md:text-4xl/tight dark:text-green-400">
						A Message from Our Founder
					</h2>
					<blockquote className="border-l-4 border-green-500 pl-4 text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-300">
						{`"TEDI was founded with the mission of inspiring youth activists to use their voices to inspire long-lasting sustainable change through education, initiative, and creativity. We believe that every individual on this Earth must do their part to keep our planet clean and fight for a sustainable future."`}
					</blockquote>
					<div className="flex items-center gap-4 pt-2">
						<CloudinaryClientWrapper
							height="64"
							width="64"
							src="TEDI Bio/x6q3sdgebdrhx2pb5b4k"
							alt="An image of TEDI Founder Emma Mazzotta"
							gravity="face"
							crop="fill"
							className="rounded-full object-cover shadow-lg"
						/>
						<div>
							<p className="text-lg font-semibold text-stone-800 dark:text-stone-100">Emma Mazzotta</p>
							<p className="text-sm text-stone-500 dark:text-stone-400">Founder, Executive Director</p>
						</div>
					</div>
				</div>
				<CloudinaryClientWrapper
					src="other/wq4nmeqsd2o4lf1rc4ly"
					width="550"
					height="450"
					alt="A local high school cleanup event"
					className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
					data-aos="fade-left"
					data-aos-delay="200"
				/>
			</div>
		</section>
	);
}
