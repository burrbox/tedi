import { type Metadata } from "next";
import { env } from "@/env";
import { getCldOgImageUrl } from "next-cloudinary";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Link from "next/link";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Toolkits",
	description: "Our advocacy toolkits.",
	alternates: { canonical: `${env.URL}/toolkit` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/toolkit`,
		title: "Toolkit - TEDI",
		type: "website",
		description: "Our advocacy toolkits.",
		images: {
			url: getCldOgImageUrl({ src: "nature/tallForest" }),
			width: 1200,
			height: 627,
			alt: "An image of the Redwood Forest",
		},
	},
};

export default async function Toolkit() {
	// const session = await auth();
	// if (!session) redirect("/signin");

	return (
		<div className="min-h-screen w-full px-8">
			<section className="mx-auto mt-8 max-w-6xl">
				<div>
					<h3>
						Our campaign team works to develop toolkits for our members to use to start environmental initiatives in
						their communities as easily as possible. We make taking action simple, stress-free, and fun! Toolkits are
						meant to be a starting point for TEDI members looking to plan an action.
						<br />
						If your group has special circumstances or you need additional guidance on planning your action,{" "}
						<Link
							href="mailto:environmentaldefenseinitiative@gmail.com?subject=Member Initiative Guidance"
							className="text-purple-500"
						>
							contact us
						</Link>{" "}
						today to receive 1:1 guidance from a member of our campaign team!
					</h3>
				</div>
			</section>
			<section className="mx-auto my-8 max-w-6xl">
				<div className="flex flex-col-reverse gap-8 sm:flex-row">
					<div>
						<CloudinaryClientWrapper
							className="max-h-[80vh] w-fit rounded-xl"
							src="toolkit/cleanup"
							alt="The toolkit for the cleanup campaign"
							width={1080}
							height={2160}
						/>
					</div>
					<div className="min-w-72 max-w-96">
						<h1 className="mt-2 text-4xl font-bold text-green-500">The Cleanup Campaign</h1>
						<p className="my-10">
							Have you always wanted to plan a community cleanup but don’t know how? This is the toolkit for you!
							<br />
							<br />
							Our cleanup toolkit contains every resource you could possibly need to plan and host a successful cleanup
							including how to choose a date/location, information about obtaining permits, volunteer recruitment
							strategies, and email templates that you can use to contact park/town directors about land use.
						</p>
						<Link
							className="rounded-xl bg-green-600 px-3 py-3 hover:bg-green-500"
							href={`https://www.canva.com/design/DAGNVCdAnYI/YQpmkVQrIaY_P0K3t_NXUA/view`}
							target="_blank"
						>
							Download
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
