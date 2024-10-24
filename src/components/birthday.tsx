"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Birthday() {
	const { width, height } = useWindowSize();
	const [active, setActive] = useState(false);
	console.log("Width:", width, "Height:", height);
	useEffect(() => {
		setTimeout(() => {
			setActive(true);
		}, 1000);
		// setTimeout(() => {
		// 	setActive(false);
		// }, 10_000);
	}, []);
	return active ? (
		<div>
			<Confetti width={width} height={height} numberOfPieces={800} className="z-[100_!important]" />
			<Dialog open={true} onOpenChange={(open) => setActive(open)}>
				<DialogContent className="max-w-7xl text-gray-100">
					<DialogHeader>
						<DialogTitle className="text-7xl">{"Happy Birthday to our Founder, Emma Mazzotta!!!"}</DialogTitle>
						<DialogDescription>Forgot to get her a present? Signing a petition will suffice.</DialogDescription>
					</DialogHeader>
					<DialogFooter className="sm:justify-start">
						<DialogClose asChild>
							<Link href={"/petitions"}>
								<Button type="button">Sign a Petition</Button>
							</Link>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	) : null;
}
