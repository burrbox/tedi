import { Mic2, Trash2, FileSignature } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

const initiatives = [
	{
		icon: Mic2,
		title: "Expert Interviews",
		description:
			"Our expert interviews aim to inspire young activists to pursue careers in sustainability, conservation, environmental advocacy, and natural sciences. We interview experts from across the country about their professions and how young people can get involved at a local level!",
	},
	{
		icon: Trash2,
		title: "Cleanups",
		description:
			"Cleanups are one of the few ways individuals are able to clearly see the tangible impact we are having on our environment. These events are excellent ways to connect with others in your community who are passionate about protecting the environment all while earning volunteer hours and doing something amazing for our planet.",
	},
	{
		icon: FileSignature,
		title: "Petitions",
		description:
			"Petitions are how we achieve not only change, but sustainable, long-lasting change that will last for generations. Policy and legislation reform is how we make progress - every signature counts!",
	},
];

export function InitiativesSection() {
	return (
		<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-3" data-aos="fade-down">
						<SectionBadge>Our Initiatives</SectionBadge>
						<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
							Protecting the Environment, One Step at a Time
						</h2>
						<p className="mx-auto max-w-4xl text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-300">
							At TEDI we believe that <span className="font-semibold text-green-600">anyone</span> can make a
							difference. All it takes is one signature, one plastic bottle recycled, or one conversation to have a
							positive impact on our planet. Join us <span className="font-semibold text-green-600">today</span> in
							working toward a more <span className="font-semibold text-green-600">sustainable</span> future.
						</p>
					</div>
					<div
						className="mx-auto grid items-start gap-6 py-4 sm:max-w-4xl sm:grid-cols-2 md:max-w-5xl lg:max-w-7xl lg:grid-cols-3"
						data-aos="fade-in"
					>
						{initiatives.map((initiative) => (
							<div
								key={initiative.title}
								className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl dark:bg-stone-900"
							>
								<div className="rounded-full bg-green-600 p-3 shadow-md dark:bg-green-700">
									<initiative.icon className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-green-700 dark:text-green-400">{initiative.title}</h3>
								<p className="text-center text-stone-600 dark:text-stone-300">{initiative.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
