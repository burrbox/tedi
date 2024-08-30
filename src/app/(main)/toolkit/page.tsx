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
		<div className="w-full bg-stone-100 px-8 py-10 dark:bg-stone-800">
			<section className="mx-auto mt-8 max-w-7xl">
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
					<div className="w-4/5 px-10">
						<h1 className="mt-2 w-full text-wrap text-6xl font-bold text-green-500">The Cleanup Campaign</h1>
						<hr className="mt-5 w-3/4 border-green-500" />
						<p className="my-10 text-xl">
							Have you always wanted to plan a community cleanup but don’t know how? <br />
							This is the toolkit for you!
							<br />
							<br />
							Our cleanup toolkit contains{" "}
							<span className="text-blue-600 dark:text-blue-400">every resource you could possibly need</span> to plan
							and host a successful cleanup including how to choose a date/location, information about obtaining
							permits, volunteer recruitment strategies, and email templates that you can use to{" "}
							<span className="text-blue-600 dark:text-blue-400">contact park/town directors</span> about land use.
						</p>
						<div className="flex items-center justify-center">
							<Link
								className="w-1/5 rounded-lg bg-green-500 py-3 text-center duration-300 hover:w-1/4 hover:bg-green-400 dark:bg-green-600 dark:hover:bg-green-700"
								href={`https://www.canva.com/design/DAGNVCdAnYI/YQpmkVQrIaY_P0K3t_NXUA/view`}
								target="_blank"
							>
								Download
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
