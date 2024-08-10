import { EnvelopeIcon, GlobeAmericasIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import type { WebPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
	title: "Join Us",
	description: "Sign up to join the organization or apply to become a TEDI team member!",
	keywords: ["join", "mission", "values", "team", "partnerships", "environment", "climate", "sustainability"],
	alternates: { canonical: `${env.URL}/join-us` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		title: "Join Us - TEDI",
		description: "Join TEDI or apply to become a team member!",
		url: `${env.URL}/join-us`,
		type: "website",
	},
};

const jsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Join The Environmental Defense Initiative",
	description: "Join TEDI or apply to become a team member!",
	url: `${env.URL}/join-us`,
};

export default function AboutPage() {
	return (
		<section className="w-full bg-gray-100 pt-20 dark:bg-stone-900">
			<div
				className="relative flex min-h-[110vh] w-screen bg-cover bg-fixed bg-center bg-repeat py-16 xl:pt-28"
				title="An image of a beach and ocean"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/t7x9xmnsyqs2yetfpp3j" })})` }}
			>
				<div className="inset-0 mx-auto w-full sm:w-10/12" data-aos="fade-down">
					<div className="flex flex-col justify-center gap-6 xl:flex-row">
						<div className="basis-3/5">
							<div className="h-fit rounded-xl bg-white p-2 py-8 dark:bg-stone-800">
								<p>test</p>
							</div>
						</div>
						<div className="basis-2/5"></div>
					</div>
				</div>
			</div>

			<div
				className="relative flex min-h-[50vh] w-screen flex-col bg-cover bg-fixed bg-center bg-repeat"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/waterfall" })})` }}
			>
				<div className="container mx-auto px-4 py-16">
					<div className="inset-0 mx-auto w-full sm:w-10/12" data-aos="fade-down">
						<div className="flex flex-col justify-center gap-6 xl:flex-row">
							<div className="basis-3/5">
								<div className="h-fit rounded-xl bg-white p-2 py-8 dark:bg-stone-800">
									<p>test</p>
								</div>
							</div>
							<div className="basis-2/5"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
