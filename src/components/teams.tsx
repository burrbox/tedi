"use client";
import { useState } from "react";

export default function Teams() {
	const [team, setTeam] = useState<string>("all");
	return (
		<div className="my-7 w-3/4 rounded-xl bg-stone-200 px-5">
			<h2 className="w-full pt-5 text-center text-3xl text-blue-500">Find Out More About Our Teams</h2>
			<div className="w-full py-5">
				<div className="mx-auto justify-center">
					<button onClick={() => setTeam("hj")} className="rounded-xl bg-green-500 px-2 py-3">
						Hopewell Junction
					</button>
					<button onClick={() => setTeam("miami")} className="rounded-xl bg-green-500 px-2 py-3">
						Miami
					</button>

					<button onClick={() => setTeam("nj")} className="rounded-xl bg-green-500 px-2 py-3">
						New Jersey
					</button>
				</div>
			</div>
			<div>
				<div className={`grow ${team !== "all" && "hidden"}`}>
					<div>
						<h3>Toronto</h3>
						<p>Tornto team led by whoever</p>
						<button onClick={() => setTeam("toronto")} className="rounded-xl bg-green-500 px-2 py-3">
							Toronto
						</button>
					</div>
				</div>
				<div className={`grow ${team !== "hj" && "hidden"}`}>hihihihi</div>
				<div className={`grow ${team !== "miami" && "hidden"}`}>lots of info here</div>
				<div className={`grow ${team !== "toronto" && "hidden"}`}>thats crazy</div>
				<div className={`grow ${team !== "nj" && "hidden"}`}>something goes here</div>
			</div>
		</div>
	);
}
