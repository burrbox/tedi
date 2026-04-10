import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";

export function HeroSection() {
	return (
		<section
			style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/oh93nln39npdtzsyettf" })})` }}
			className="flex w-screen bg-cover bg-fixed bg-center bg-no-repeat py-12 md:min-h-[70vh] md:pb-20 md:pt-32 lg:pt-40"
		>
			<div
				className="mx-3 justify-center rounded-2xl bg-white/85 py-10 shadow-2xl backdrop-blur-sm md:mx-8 lg:mx-auto dark:bg-stone-950/85"
				data-aos="fade-down"
			>
				<div className="container md:space-y-10 xl:space-y-16">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
						<div className="flex flex-col justify-center space-y-6">
							<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-green-600 sm:text-4xl md:text-5xl xl:text-[4rem] 2xl:text-[5rem] dark:text-stone-100">
								The Environmental Defense Initiative
							</h1>
							<p className="max-w-[700px] text-lg text-stone-600 md:text-xl dark:text-green-400">
								Our nonprofit organization is dedicated to preserving the natural world and creating a sustainable future
								for all.
							</p>
							<div className="flex flex-wrap gap-3">
								<Link
									href="/join-us"
									className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
								>
									Get Involved
								</Link>
								<Link
									href="/petitions"
									className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
								>
									Sign a Petition
								</Link>
							</div>
						</div>
						<div className="flex h-fit flex-col items-center self-center">
							<CloudinaryClientWrapper
								alt="An image of our team"
								src="cleanup2_rhiq2n"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
								width="1300"
								height="1100"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
