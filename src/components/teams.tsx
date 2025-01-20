"use client";
import Link from "next/link";
import { CloudinaryClientWrapper } from "./cloudinaryClientWrapper";

export default function Teams({ team = "all" }: { team?: string }) {
	return (
		<div className="mx-auto my-3 h-full justify-center rounded-xl bg-stone-200 px-5 py-7 dark:bg-stone-900">
			<h2 className="w-full pt-4 text-center text-3xl font-semibold text-blue-700 dark:text-blue-500">
				Find Out More About Our Groups
			</h2>
			<div className="mx-5">
				<div className="pt-4">
					<div className={`grow ${team !== "all" && "hidden"}`}>
						<p>
							The TEDI team is an ever growing community, dedicated to{" "}
							<span className="text-green-600 dark:text-green-400">defending the environment</span>. We currently have{" "}
							<span className="text-green-600 dark:text-green-400">5 teams</span> spread out throughout the United
							States, all making an <span className="text-green-600 dark:text-green-400">impact</span> on the world.
							<CloudinaryClientWrapper
								src="nature/oh93nln39npdtzsyettf"
								className="mx-auto my-6 aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
								alt="A calm stream in the forest"
								width={1000}
								height={800}
							/>
							Click a location to learn more about the team in that area.
							<br />
							<br />
							Interested in joining? Check to see if we have a team nearby or start your own team{" "}
							<Link href="/join-us" className="text-purple-500">
								here!
							</Link>
						</p>
					</div>
					<div className={`grow ${team !== "Hopewell Junction, NY" && "hidden"}`}>
						<h3 className="py-4 text-center text-2xl font-medium text-green-600 dark:text-green-400">
							Hopewell Junction, New York
						</h3>
						<p>
							Our Hopewell Junction community group is our{" "}
							<span className="text-green-600 dark:text-green-400">largest and most involved</span> group. So far, this
							group has collected hundreds of gallons of trash and plastic by{" "}
							<span className="text-green-600 dark:text-green-400">hosting two separate local cleanups</span>.
							Currently, the members of our group are most passionate about combatting projects causing{" "}
							<span className="text-green-600 dark:text-green-400">deforestation</span> in our area.
						</p>
						<CloudinaryClientWrapper
							src="IMG_4112_acmhvz"
							className="mx-auto mt-7 aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
							alt="Hudson Valley TEDI Group Photo"
							width={1000}
							height={800}
						/>
					</div>
					<div className={`grow ${team !== "Warrington, PA" && "hidden"}`}>
						<h3 className="py-4 text-center text-2xl font-medium text-green-600 dark:text-green-400">
							Warrington, Pennslyvania
						</h3>
						<p>Check out our Warrington team!</p>
						<CloudinaryClientWrapper
							src="IMG_4112_acmhvz"
							className="mx-auto mt-7 aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
							alt="Hudson Valley TEDI Group Photo"
							width={1000}
							height={800}
						/>
					</div>
					<div className={`grow ${team !== "Toronto, ON" && "hidden"}`}>
						<h3 className="py-4 text-center text-2xl font-medium text-green-600 dark:text-green-400">
							Toronto, Canada
						</h3>
						<p>
							Our Toronto group is located in the GTA. For now, we are planning to start collaborating with other
							organizations to make <span className="text-green-600 dark:text-green-400">clothing drives</span> more
							accessible to all. Currently, the group is looking forward to learning more about{" "}
							<span className="text-green-600 dark:text-green-400">clean energy strategies</span> that are already
							established across the world and taking a step closer in helping{" "}
							<span className="text-green-600 dark:text-green-400">biodiversity in Ontario</span>.
						</p>
						<CloudinaryClientWrapper
							src="other/q1fajpqmehsbe2ed3syz"
							className="mx-auto mt-7 aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
							alt="Hudson Valley TEDI Group Photo"
							width={1000}
							height={800}
						/>
					</div>
					<div className={`grow ${team !== "Miami, FL" && "hidden"}`}>
						<h3 className="py-4 text-center text-2xl font-medium text-green-600 dark:text-green-400">Miami, Florida</h3>
						<p>Check out our Miami team!</p>
						<CloudinaryClientWrapper
							src="IMG_4112_acmhvz"
							className="mx-auto mt-7 aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
							alt="Hudson Valley TEDI Group Photo"
							width={1000}
							height={800}
						/>
					</div>
					{/* <div className={`grow ${team !== "Verona, NJ" && "hidden"}`}>
						<h3 className="py-4 text-center text-2xl font-medium text-green-600 dark:text-green-400">
							Verona, New Jersey
						</h3>
						<p>
							Verona, New Jersey, is a charming suburban town known for its green spaces and{" "}
							<span className="text-green-600 dark:text-green-400">strong community spirit</span>. With places like
							Verona Park and tree-lined neighborhoods, it’s clear the town values its environment. This year, Verona
							will be <span className="text-green-600 dark:text-green-400">hosting clothing drives</span> to promote
							TEDI’s eco-friendly values. Together, we can help{" "}
							<span className="text-green-600 dark:text-green-400">reduce waste and promote sustainability</span> in
							this welcoming community.
						</p>
						<CloudinaryClientWrapper
							src="other/qw2ftns7yk73l5obju2c"
							className="mx-auto mt-7 aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
							alt="Hudson Valley TEDI Group Photo"
							width={1000}
							height={800}
						/>
					</div> */}
					<div className={`grow ${team !== "Lakeland, NY" && "hidden"}`}>
						<h3 className="py-4 text-center text-2xl font-medium text-green-600 dark:text-green-400">
							Lakeland, New York
						</h3>
						<p>
							The Lakeland group is a dedicated part of the TEDI community, taking action both individually and in
							collaboration with the nearby Hopewell Junction group. The Lakeland group works to{" "}
							<span className="text-green-600 dark:text-green-400">inspire members of their community</span> and others
							to take action on environmental issues. Specifically, this group is passionate about combatting both{" "}
							<span className="text-green-600 dark:text-green-400">terrestrial and aquatic pollution</span>. This fall,
							the Lakeland group will be{" "}
							<span className="text-green-600 dark:text-green-400">hosting a clothing drive</span> as part of TEDI’s
							triple F campaign!
						</p>
						<CloudinaryClientWrapper
							src="other/l5mnqmfczkseryzrow4m"
							className="mx-auto mt-7 aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
							alt="Hudson Valley TEDI Group Photo"
							width={1000}
							height={800}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
