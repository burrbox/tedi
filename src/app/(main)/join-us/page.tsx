import Link from "next/link";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import type { WebPage, WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";
import JoinUsForm from "./joinUsForm";
import { auth } from "@/server/auth";

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

export default async function AboutPage() {
	const session = await auth();
	return (
		<section className="w-full bg-gray-100 dark:bg-stone-900">
			<JsonLd data={jsonLd} />
			<div
				className="relative flex min-h-[50vh] w-full flex-col bg-cover bg-fixed bg-center bg-repeat"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/mountain" })})` }}
			>
				<div className="container mx-auto w-full py-16 md:py-24">
					<div className="inset-0 mx-auto w-10/12 md:w-full" data-aos="fade-down">
						<div className="flex flex-col justify-center gap-6 xl:flex-row">
							<div className="m-auto h-fit max-w-3xl rounded-xl bg-white py-8 dark:bg-stone-800">
								<JoinUsForm />
								{/* {session ? (
									<JoinUsForm user={session?.user} />
								) : (
									<div className="w-full">
										<h3 className="h3 p-4">Please sign in first</h3>
										<Link href="/signin" className="">
											<div className="mx-auto w-4/5 cursor-pointer rounded-xl bg-blue-700 py-3 text-center text-white duration-300 hover:bg-blue-600">
												Sign in
											</div>
										</Link>
									</div>
								)} */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="min-h-w-full py-8 md:py-12">
				<h3 className="py-auto text-wrap pb-8 text-center text-3xl text-black dark:text-stone-200" data-aos="fade-in">
					Looking to help out a bit more? Join the team instead!
				</h3>
				<hr
					className="border-green mx-auto w-1/2 justify-center border-2 border-green-500 md:w-1/4 lg:w-1/12"
					data-aos="fade-in"
				/>
			</div>
			<div
				className="relative flex min-h-[50vh] w-screen flex-col bg-cover bg-fixed bg-center bg-repeat"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/waterfall" })})` }}
			>
				<div className="container mx-auto py-16">
					<div className="inset-0 mx-auto w-full sm:w-10/12" data-aos="fade-down">
						<div className="flex flex-col justify-center gap-6 xl:flex-row">
							<div className="basis-4/5">
								<div className="h-fit rounded-xl bg-white py-8 dark:bg-stone-800">
									<form className="rounded-2xl bg-white dark:bg-stone-800">
										<div className="mx-4 py-4 lg:py-6">
											<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700 dark:text-green-400">
												Join Our Team
											</h1>
											<h2 className="text-wrap text-center text-lg text-black dark:text-stone-300">
												We are looking for motivated individuals with a passion for protecting the environment to join
												our team at The Environmental Defense Initiative. Joining our team is an amazing opportunity to
												get involved with advocating for change on a national level, meet people with similar interests
												from around the US, and make your voice heard. We strive to empower youth leaders to create
												sustainable, long lasting change in our country. All members of our team have the chance to
												share ideas for future campaigns, vote on monthly focus issues, and develop our outreach
												strategy.
											</h2>
										</div>

										<div className="mx-3 flex justify-center pb-10 pt-6">
											<Link
												className="w-4/5 rounded-xl bg-blue-700 py-3 text-center text-white duration-300 hover:bg-blue-600"
												href="https://docs.google.com/forms/d/e/1FAIpQLSfEWkGAauRBi07E8-4WRlay7RyXJlLII85dt1FCV2C0m-hI1Q/viewform?usp=sf_link"
											>
												Apply Now
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
