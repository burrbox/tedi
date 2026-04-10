import Link from "next/link";
import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl } from "next-cloudinary";
import type { WebPage, WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";
import JoinUsForm from "./joinUsForm";

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

export default function JoinUsPage() {
	return (
		<section className="w-full bg-stone-50 dark:bg-stone-950">
			<JsonLd data={jsonLd} />

			{/* Membership form */}
			<div
				className="relative flex w-full flex-col bg-cover bg-fixed bg-center bg-repeat"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/qmpzia6kmgjuld13zbhw" })})` }}
			>
				<div className="container mx-auto w-full py-16 md:py-24">
					<div className="mx-auto max-w-2xl">
						<div className="rounded-2xl bg-white shadow-xl dark:bg-stone-800">
							<JoinUsForm />
						</div>
					</div>
				</div>
			</div>

			{/* Join the team */}
			<div className="py-16 text-center md:py-20">
				<p className="mb-4 text-2xl font-medium text-stone-700 dark:text-stone-200">
					Looking to help out a bit more?
				</p>
				<div className="mx-auto mb-10 h-1 w-12 rounded-full bg-green-500" />
			</div>

			<div
				className="relative flex min-h-[50vh] w-screen flex-col bg-cover bg-fixed bg-center bg-repeat"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/qneh8sn9n3xcb9daktfj" })})` }}
			>
				<div className="container mx-auto py-16">
					<div className="mx-auto max-w-2xl">
						<div className="rounded-2xl bg-white p-10 shadow-xl dark:bg-stone-800">
							<h1 className="mb-4 text-center text-4xl font-bold text-green-700 dark:text-green-400">Join Our Team</h1>
							<p className="mb-8 text-center text-stone-600 dark:text-stone-300">
								We are looking for motivated individuals with a passion for protecting the environment to join our team
								at The Environmental Defense Initiative. Joining our team is an amazing opportunity to get involved with
								advocating for change on a national level, meet people with similar interests from around the US, and
								make your voice heard. We strive to empower youth leaders to create sustainable, long lasting change in
								our country. All members of our team have the chance to share ideas for future campaigns, vote on
								monthly focus issues, and develop our outreach strategy.
							</p>
							<Link
								className="mx-auto flex h-11 w-full max-w-xs items-center justify-center rounded-md bg-blue-700 text-center text-white transition-colors hover:bg-blue-600"
								href="https://docs.google.com/forms/d/e/1FAIpQLSecGEqTHRtdt7xkRlcgrpM2_dh1M138XFuPrNy2kkqW9PKeCA/viewform?usp=header"
							>
								Apply Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
