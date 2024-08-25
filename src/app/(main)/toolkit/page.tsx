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
							Have you always wanted to plan a community cleanup but don't know how? <br />
							Convince people to clean up with this toolkit!!
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
