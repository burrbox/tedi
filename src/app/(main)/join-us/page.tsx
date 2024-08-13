import Link from "next/link";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl, getCldOgImageUrl } from "next-cloudinary";
import type { WebPage, WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";

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
			<JsonLd data={jsonLd} />
			<div
				className="relative flex min-h-[50vh] w-full flex-col bg-cover bg-fixed bg-center bg-repeat"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/mountain" })})` }}
			>
				<div className="container mx-auto w-full py-16">
					<div className="inset-0 mx-auto w-10/12 md:w-full" data-aos="fade-down">
						<div className="flex flex-col justify-center gap-6 xl:flex-row">
							<div className="basis-2/5"></div>
							<div className="basis-3/5">
								<div className="h-fit w-full rounded-xl bg-white py-8 dark:bg-stone-800">
									<form className="rounded-2xl bg-white dark:bg-stone-800">
										<div className="mx-4 py-4 lg:py-8">
											<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700 dark:text-green-400">
												Join our MOVEMENT TODAY
											</h1>
											<h2 className="text-wrap text-center text-lg text-blue-700 dark:text-blue-400">
												Sign up to receive resources to help take action on our campaigns and projects in your own
												community. Join us today to help spread our initiative.
											</h2>
										</div>
										<div className="mx-6 grid flex-col justify-center gap-3 lg:grid-cols-2 lg:grid-rows-3">
											<div className="flex-col lg:col-span-1 lg:row-span-1">
												<label className="text-blue-700 dark:text-blue-300">
													First Name *
													<input
														name="firstName"
														className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
														type="text"
														required
													/>
												</label>
											</div>
											<div className="flex-col lg:col-span-1 lg:col-start-2 lg:row-span-1">
												<label className="text-blue-700 dark:text-blue-300">
													Last Name *
													<input
														name="lastName"
														className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
														type="text"
														required
													/>
												</label>
											</div>

											<div className="flex-col lg:col-span-1 lg:col-start-2 lg:row-span-1 lg:row-start-2">
												<label className="text-blue-700 dark:text-blue-300">
													Zip Code *
													<input
														name="zipCode"
														className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
														type="text"
														required
													/>
												</label>
											</div>
											<div className="flex-col lg:col-span-1 lg:col-start-1 lg:row-span-1 lg:row-start-2">
												<label className="text-blue-700 dark:text-blue-300">
													Phone number *
													<input
														name="phoneNumber"
														className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
														type="text"
														required
													/>
												</label>
											</div>
											<div className="flex-col lg:col-span-2 lg:col-start-1 lg:row-span-1">
												<label className="text-blue-700 dark:text-blue-300">
													Email *
													<input
														name="email"
														className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
														type="email"
														required
													/>
												</label>
											</div>
										</div>
										<div className="mx-3 flex justify-center py-10">
											<button
												type="submit"
												className="w-4/5 cursor-pointer rounded-xl bg-blue-700 py-3 text-white duration-300 hover:bg-blue-600"
											>
												Join
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="w-full border-black bg-black py-4" />
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
										<div className="mx-4 py-4 lg:py-8">
											<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700 dark:text-green-400">
												Join Our Team
											</h1>
											<h2 className="text-wrap text-center text-lg text-blue-700 dark:text-blue-400">
												We are looking for motivated individuals with a passion for protecting the environment to join
												our team at The Environmental Defense Initiative. Joining our team is an amazing opportunity to
												get involved with advocating for change on a national level, meet people with similar interests
												from around the US, and make your voice heard. We strive to empower youth leaders to create
												sustainable, long lasting change in our country. All members of our team have the chance to
												share ideas for future campaigns, vote on monthly focus issues, and develop our outreach
												strategy.
											</h2>
										</div>

										<div className="mx-3 flex justify-center py-10">
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
