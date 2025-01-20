import { petitions } from "@/lib/constants";
import PetitionForm from "./petitionForm";
import { type Metadata } from "next";
import { env } from "@/env";
import { getCldImageUrl } from "next-cloudinary";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import type { WebPage, WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";

export const metadata: Metadata = {
	title: "Petitions",
	description: "Be the change you want to see in the world.",
	keywords: ["petition", "advocacy", "environment", "climate", "sustainability"],
	alternates: { canonical: `${env.URL}/petitions` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/petitions`,
		title: "Petitions - TEDI",
		type: "website",
		description: "Sign a petition to advocate for new policies.",
	},
};

const jsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Petitions - The Environmental Defense Initiative",
	description: "Sign a petition to advocate for new policies.",
	url: `${env.URL}/petitions`,
};

export default async function Petitions() {
	return (
		<>
			<section
				className="flex w-screen bg-cover bg-fixed bg-center bg-no-repeat py-12 md:pb-20 lg:pt-40"
				style={{
					backgroundImage: `url(${getCldImageUrl({ src: "nature/tallForest" })})`,
				}}
			>
				<JsonLd data={jsonLd} />
				<div className="container flex items-center justify-center">
					<div className="rounded-lg bg-white bg-opacity-85 px-5 py-10 dark:bg-emerald-950/85" data-aos="fade-in">
						<h1 className="text-center text-6xl font-bold text-blue-600 dark:text-white">Petitions</h1>
						<h2 className="text-wrap pt-6 text-center text-xl text-green-600 dark:text-green-300">
							Be the change you want to see in the world.
							<br />
							Sign a petition; every signature counts.
						</h2>
					</div>
				</div>
			</section>
			<section>
				<div className="h-fit w-full bg-white dark:bg-stone-900">
					<div className="flex flex-row justify-center py-8">
						<span>
							<CloudinaryClientWrapper
								src="other/many-signs"
								alt="An image of a protest with many people holding various signs for environmental protection."
								width="600"
								height="300"
								className="h-96 object-cover"
							/>
						</span>
						<span>
							<CloudinaryClientWrapper
								src="other/act-now"
								alt="An image of a protest. One of the protesters is holding a sign that reads '#ACTNOW'."
								width="400"
								height="300"
								className="h-96 object-cover"
							/>
						</span>
					</div>
				</div>
				{petitions.map((petition) => (
					<div
						key={petition.name}
						className="flex min-h-[60vh] w-screen bg-cover bg-fixed bg-center bg-repeat py-16 xl:pt-28"
						style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/t7x9xmnsyqs2yetfpp3j" })})` }}
					>
						<div className="container mx-auto w-full" data-aos="fade-down">
							<div className="flex flex-col justify-center gap-6 rounded-xl bg-stone-300/70 px-3 py-10 xl:flex-row dark:bg-stone-800/70">
								<div className="basis-3/5">
									<div className="h-fit rounded-xl bg-white p-2 py-8 dark:bg-stone-800">
										<h1 className="text-center text-3xl font-semibold text-green-700 dark:text-green-400">
											{petition.title}
										</h1>
										<h2 className="mx-4 whitespace-pre-line pt-6 text-center text-sm text-green-700 md:mx-6 md:text-sm lg:mx-8 lg:text-base dark:text-blue-300">
											{petition.description}
										</h2>
									</div>
								</div>
								<div className="basis-2/5">
									<PetitionForm petition={petition} />
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	);
}
