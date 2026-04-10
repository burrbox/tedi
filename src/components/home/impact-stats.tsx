import { Leaf, Users, Recycle } from "lucide-react";

const stats = [
	{
		icon: Leaf,
		value: "338",
		label: "Gallons of Trash Collected",
	},
	{
		icon: Users,
		value: "15,000+",
		label: "People Reached",
	},
	{
		icon: Recycle,
		value: "156",
		label: "Gallons of Plastic Collected",
	},
];

export function ImpactStats() {
	return (
		<section className="w-full bg-stone-100 py-12 md:py-24 lg:py-32 dark:bg-stone-800">
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tighter text-blue-500 sm:text-4xl md:text-5xl">
						Our Impact in the Past Year
					</h2>
					<p className="mx-auto max-w-[700px] text-stone-600 md:text-xl/relaxed dark:text-stone-300">
						{
							"We're proud to share the significant progress we've made in protecting the environment and creating a more sustainable future."
						}
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col items-center gap-4 rounded-xl border border-stone-200 bg-white p-8 text-center shadow-md transition-shadow hover:shadow-xl dark:border-stone-700 dark:bg-stone-900"
							data-aos="fade-up"
						>
							<div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
								<stat.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
							</div>
							<h3 className="text-4xl font-bold text-green-600 dark:text-green-400">{stat.value}</h3>
							<p className="text-stone-600 dark:text-stone-300">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
