"use client";
import Link from "next/link";

export default function Teams({ team = "all" }: { team?: string }) {
	return (
		<div className="my-7 w-3/4 rounded-xl bg-stone-200 px-5 dark:bg-stone-800">
			<h2 className="w-full pt-5 text-center text-3xl text-blue-500">Find Out More About Our Teams</h2>
			<div>
				<div className={`grow ${team !== "all" && "hidden"}`}>
					<div>
						<p>
							The TEDI team is ever growing and we currently have 5 teams spread out throughout the United States, all
							making an impact on the world.
							<br />
							Interested in joining? Check to see if we have a team nearby or start your own team{" "}
							<Link href="/join-us">here!</Link>
						</p>
					</div>
				</div>
				<div className={`grow ${team !== "Hudson Valley" && "hidden"}`}>
					Our Hopewell Junction community group is our largest and most involved group. So far, this group has collected
					hundreds of gallons of trash and plastic by hosting two separate local cleanups. Currently, the members of our
					group are most passionate about combatting projects causing deforestation in our area.
				</div>
				<div className={`grow ${team !== "Warrington, Penn" && "hidden"}`}>lots of info here</div>
				<div className={`grow ${team !== "Toronto" && "hidden"}`}>thats crazy</div>
				<div className={`grow ${team !== "Verona, NJ" && "hidden"}`}>
					Verona, New Jersey, is a charming suburban town known for its green spaces and strong community spirit. With
					places like Verona Park and tree-lined neighborhoods, it's clear the town values its environment. This year,
					Verona will be hosting clothing drives to promote TEDI’s eco-friendly values. Together, we can help reduce
					waste and promote sustainability in this welcoming community.
				</div>
				<div className={`grow ${team !== "Miami" && "hidden"}`}>
					The Lakeland group is a dedicated part of the TEDI community, taking action both individually and in
					collaboration with the nearby Hopewell Junction group. The Lakeland group works to inspire members of their
					community and others to take action on environmental issues. Specifically, this group is passionate about
					combatting both terrestrial and aquatic pollution. This fall, the Lakeland group will be hosting a clothing
					drive as part of TEDI’s triple F campaign!
				</div>
			</div>
		</div>
	);
}
