import { SectionBadge } from "@/components/ui/section-badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";

export function CampaignSection() {
	return (
		<section className="bg-stone-100 px-5 py-12 text-center md:px-10 md:py-24 lg:py-32 dark:bg-stone-800">
			<div className="container mx-auto space-y-6 px-4 md:px-6">
				<div className="space-y-4">
					<SectionBadge>Get Involved</SectionBadge>
					<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
						Fall Fast Fashion Campaign
					</h2>
					<p className="mx-auto max-w-4xl text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-300">
						This campaign aims to mitigate the environmental harm that fast fashion causes by hosting clothing drives
						across the <span className="font-semibold text-green-600">United States and Canada</span>. Clothing drives
						are an excellent way to{" "}
						<span className="font-semibold text-green-600">repurpose, reuse, and recycle clothing</span> to prevent
						waste from accumulating in landfills.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					<div className="h-full space-y-4 rounded-xl bg-white p-8 shadow-md dark:bg-stone-900">
						<p className="text-lg text-stone-600 dark:text-stone-300">
							<span className="font-semibold text-green-600 dark:text-green-400">Donate</span> old/used clothing at
							one of our several clothing drive donation bins! If you don&apos;t see a clothing drive in your area,
							consider hosting one yourself.{" "}
							<Link href="/join-us" className="text-blue-600 underline hover:text-blue-700 dark:text-blue-400">
								Become a member
							</Link>{" "}
							today to receive free, one-on-one guidance on{" "}
							<span className="font-semibold text-green-600 dark:text-green-400">starting a clothing drive</span> from
							a member of our campaign team and gain access to an exclusive action toolkit including all of the
							materials you need to launch a{" "}
							<span className="font-semibold text-green-600 dark:text-green-400">successful drive</span>.
						</p>
						<Link
							href="/campaigns"
							className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow-md transition-colors hover:bg-green-700"
						>
							Find Out More
						</Link>
					</div>
					<div className="h-full space-y-4 rounded-xl bg-white p-8 shadow-md dark:bg-stone-900">
						<h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">Our Locations</h3>
						<p className="text-stone-600 dark:text-stone-300">
							Stop by at one of these locations to drop off some clothes and save the environment!
						</p>
						<ul className="list-inside list-disc space-y-2 text-left">
							<Popover>
								<li>
									<PopoverTrigger>
										<span className="cursor-pointer font-semibold italic text-blue-600 underline dark:text-blue-400">
											Toronto, ON, Canada *
										</span>
									</PopoverTrigger>
									<PopoverContent>
										<div className="space-y-2">
											<h4 className="font-medium leading-none text-green-600 dark:text-green-400">
												Pickup Clothing Drive
											</h4>
											<p className="text-muted-foreground text-sm">
												A truck from{" "}
												<Link href="https://www.diabetes.ca/" className="italic underline">
													Diabetes Canada
												</Link>{" "}
												will be picking up clothing donations along with a few books. They accept donations around the{" "}
												<Link
													href="https://declutterfordiabetes.ca/donation-bin"
													className="italic underline"
												>
													General Toronto Area
												</Link>
												!
											</p>
										</div>
									</PopoverContent>{" "}
									— All Day on December 9
								</li>
							</Popover>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
