"use client";

import { toast, useToast } from "@/components/ui/use-toast";
import { wait } from "@/lib/utils";
import { useEffect } from "react";

export default function TestToast() {
	useEffect(() => {
		wait(3000).then((r) => {
			toast({
				title: "Would you like to sign a petition?",
				description: "Fight for the environment!",
				duration: 5000,
			});
			console.log("Toast message displayed");
		});
	}, []);

	return <div>test</div>;
}
