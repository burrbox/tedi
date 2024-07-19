import { auth } from "@/server/auth";
import { type ErrorPageParam } from "@auth/core/types";
import { type Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Error | TEDI",
	description: "If you're here, then something went wrong.",
};

export default async function ErrorPage({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) {
	const session = await auth();

	if (session) redirect((searchParams.redirect ?? "/blog").toString());

	return (
		<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
			<div className="pb-12 pt-32 md:pb-20 md:pt-40">
				{/* Page header */}
				<div className="mx-auto max-w-3xl pb-12 text-center">
					<h1 className="h2">Something went wrong</h1>
				</div>
				<div className="mx-auto max-w-lg text-lg">
					<p className="text-center">
						{(searchParams.error as ErrorPageParam) === "Verification"
							? "The sign in link is no longer valid.\nIt may have been used already or it may have expired."
							: searchParams.error}
					</p>
				</div>
			</div>
		</div>
	);
}
