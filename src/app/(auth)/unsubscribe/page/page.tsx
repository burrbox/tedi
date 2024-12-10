"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
	const router = useRouter();

	useEffect(() => {
		fetch(`/unsubscribe${window.location.search}`, { method: "POST" }).catch((e) => {
			router.push("/error");
		});
	}, [router]);

	return (
		<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
			<div className="pb-12 pt-32 md:pb-20 md:pt-40">
				{/* Page header */}
				<div className="mx-auto max-w-3xl pb-12 text-center">
					<h1 className="h2 font-hkgrotesk">{"Bye bye!"}</h1>
				</div>
				<div className="mx-auto max-w-lg text-lg">
					<p className="text-center">
						{`You've been unsubscribed from all marketing emails. We're sorry to see you go, but we understand. If you ever want to resubscribe, you can do so from your account settings.`}
					</p>
				</div>
			</div>
		</div>
	);
}
