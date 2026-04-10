import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import Link from "next/link";

const rankings = [
	{ city: "North York, ON", flag: "🇨🇦", points: 6, trend: "up" as const },
	{ city: "Hopewell Junction, NY", flag: "🇺🇸", points: 5, trend: "up" as const },
	{ city: "Fairhope, AL", flag: "🇺🇸", points: 2, trend: "up" as const },
	{ city: "Binghamton, NY", flag: "🇺🇸", points: 2, trend: "up" as const },
	{ city: "New Paltz, NY", flag: "🇺🇸", points: 2, trend: "up" as const },
	{ city: "New Hampshire, NY", flag: "🇺🇸", points: 2, trend: "up" as const },
	{ city: "Yorktown, NY", flag: "🇺🇸", points: 1, trend: "neutral" as const },
	{ city: "Omaha, NE", flag: "🇺🇸", points: 1, trend: "neutral" as const },
	{ city: "Shrub Oak, NY", flag: "🇺🇸", points: 1, trend: "neutral" as const },
];

const medals = ["🥇", "🥈", "🥉"];

const medalBg: Record<number, string> = {
	0: "bg-yellow-50 border-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-600/40",
	1: "bg-stone-50 border-stone-300 dark:bg-stone-700/40 dark:border-stone-500/40",
	2: "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-700/40",
};

const medalText: Record<number, string> = {
	0: "text-yellow-700 dark:text-yellow-400",
	1: "text-stone-600 dark:text-stone-300",
	2: "text-orange-700 dark:text-orange-400",
};

function TrendIcon({ trend }: { trend: "up" | "down" | "neutral" }) {
	if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />;
	if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-400" />;
	return <Minus className="h-4 w-4 text-stone-400" />;
}

export function CityRankings() {
	return (
		<section className="w-full bg-stone-50 py-16 md:py-24 dark:bg-stone-900">
			<div className="container mx-auto max-w-3xl px-4 md:px-6">
				{/* Header */}
				<div className="mb-10 text-center" data-aos="fade-down">
					<span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
						Leaderboard
					</span>
					<h2 className="mt-3 text-4xl font-bold tracking-tight text-stone-800 dark:text-stone-100 sm:text-5xl">
						City Rankings
					</h2>
					<p className="mx-auto mt-3 max-w-xl text-stone-500 dark:text-stone-400">
						Want your city to win? Host a campaign event and earn points for your community.
					</p>
				</div>

				{/* Scoring guide */}
				<div
					className="mb-8 grid grid-cols-3 gap-3 rounded-xl border border-stone-200 bg-white p-4 text-center dark:border-stone-700 dark:bg-stone-800"
					data-aos="fade-up"
				>
					<div className="space-y-1">
						<p className="text-2xl font-bold text-green-600 dark:text-green-400">1 pt</p>
						<p className="text-xs text-stone-500 dark:text-stone-400">Campaign hosted</p>
					</div>
					<div className="space-y-1 border-x border-stone-200 dark:border-stone-700">
						<p className="text-2xl font-bold text-green-600 dark:text-green-400">2 pts</p>
						<p className="text-xs text-stone-500 dark:text-stone-400">Org collaboration</p>
					</div>
					<div className="space-y-1">
						<p className="text-2xl font-bold text-green-600 dark:text-green-400">3 pts</p>
						<p className="text-xs text-stone-500 dark:text-stone-400">Suggested + hosted</p>
					</div>
				</div>

				{/* Rankings list */}
				<div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
					{rankings.map((entry, index) => (
						<div
							key={entry.city}
							className={`flex items-center gap-4 rounded-xl border px-5 py-4 transition-shadow hover:shadow-md ${
								index < 3
									? medalBg[index]
									: "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
							}`}
						>
							{/* Rank */}
							<span className="w-8 text-center text-xl">
								{index < 3 ? medals[index] : <span className="text-sm font-medium text-stone-400">{index + 1}</span>}
							</span>

							{/* Flag + city */}
							<span className="text-xl">{entry.flag}</span>
							<span
								className={`flex-1 font-semibold ${
									index < 3 ? medalText[index] : "text-stone-700 dark:text-stone-200"
								}`}
							>
								{entry.city}
							</span>

							{/* Trend */}
							<TrendIcon trend={entry.trend} />

							{/* Points */}
							<span className="min-w-[3rem] text-right text-lg font-bold text-stone-700 dark:text-stone-200">
								{entry.points}{" "}
								<span className="text-xs font-normal text-stone-400">{entry.points === 1 ? "pt" : "pts"}</span>
							</span>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="mt-10 rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800/40 dark:bg-green-900/20">
					<p className="mb-1 font-semibold text-green-800 dark:text-green-300">Want your city on the board?</p>
					<p className="mb-4 text-sm text-green-700 dark:text-green-400">
						Send us a quick submission after you host a campaign event and we&apos;ll add your points.
					</p>
					<Link
						href="https://docs.google.com/forms/d/e/1FAIpQLSfEWkGAauRBi07E8-4WRlay7RyXJlLII85dt1FCV2C0m-hI1Q/viewform"
						className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-6 text-sm font-medium text-white transition-colors hover:bg-green-700"
					>
						Submit Your Campaign Event
					</Link>
					<p className="mt-3 text-xs text-stone-400 dark:text-stone-500">
						↑ trending up = recent activity · — = no recent activity
					</p>
				</div>
			</div>
		</section>
	);
}
