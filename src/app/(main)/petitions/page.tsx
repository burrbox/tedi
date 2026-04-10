import { petitions } from "@/lib/constants";
import PetitionForm from "./petitionForm";
import PetitionSuggestionForm from "./petitionSuggestionForm";
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

export default function Petitions() {
	return (
		<>
			<JsonLd data={jsonLd} />

			{/* Hero */}
			<section
				className="flex w-screen bg-cover bg-fixed bg-center bg-no-repeat py-12 md:pb-20 lg:pt-40"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/tallForest" })})` }}
			>
				<div className="container flex items-center justify-center">
					<div
						className="rounded-2xl bg-white/90 px-8 py-10 shadow-xl backdrop-blur-sm dark:bg-stone-950/90"
						data-aos="fade-in"
					>
						<h1 className="text-center text-5xl font-bold text-blue-600 dark:text-white">Petitions</h1>
						<p className="pt-4 text-center text-xl text-green-600 dark:text-green-300">
							Be the change you want to see in the world.
							<br />
							Sign a petition — every signature counts.
						</p>
					</div>
				</div>
			</section>

			{/* Protest images */}
			<section className="w-full bg-white dark:bg-stone-900">
				<div className="flex flex-row justify-center gap-2 py-8">
					<CloudinaryClientWrapper
						src="other/many-signs"
						alt="An image of a protest with many people holding various signs for environmental protection."
						width="600"
						height="300"
						className="h-80 flex-1 rounded-lg object-cover shadow-md"
					/>
					<CloudinaryClientWrapper
						src="other/act-now"
						alt="An image of a protest. One of the protesters is holding a sign that reads '#ACTNOW'."
						width="400"
						height="300"
						className="h-80 flex-1 rounded-lg object-cover shadow-md"
					/>
				</div>
			</section>

			{/* Active petitions */}
			<section
				className="flex min-h-[60vh] w-screen bg-cover bg-fixed bg-center bg-repeat py-16 xl:pt-28"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/t7x9xmnsyqs2yetfpp3j" })})` }}
			>
				<div className="container mx-auto w-full p-8" data-aos="fade-down">
					<div className="flex flex-col gap-8">
						{petitions.map((petition) => (
							<div
								key={petition.name}
								className="flex flex-col justify-center gap-6 rounded-2xl bg-white/80 p-6 backdrop-blur-sm dark:bg-stone-900/80"
							>
								{petition.name === "coming-soon" ? (
									<div className="rounded-xl bg-white p-8 shadow-sm dark:bg-stone-800">
										<h2 className="text-center text-2xl font-semibold text-green-700 dark:text-green-400">
											{petition.title}
										</h2>
										<p className="mx-auto mt-4 max-w-2xl whitespace-pre-line text-center text-stone-600 dark:text-stone-300">
											{petition.description}
										</p>
									</div>
								) : (
									<div className="flex flex-col justify-center gap-6 xl:flex-row">
										<div className="basis-3/5">
											<div className="h-full rounded-xl bg-white p-8 shadow-sm dark:bg-stone-800">
												<h2 className="text-center text-2xl font-semibold text-green-700 dark:text-green-400">
													{petition.title}
												</h2>
												<p className="mx-auto mt-4 whitespace-pre-line text-center text-stone-600 dark:text-stone-300">
													{petition.description}
												</p>
											</div>
										</div>
										<div className="basis-2/5">
											<PetitionForm petition={petition} />
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Suggest a petition */}
			<section
				className="flex min-h-[60vh] w-screen bg-cover bg-fixed bg-center bg-repeat py-16 xl:pt-28"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/t7x9xmnsyqs2yetfpp3j" })})` }}
			>
				<div className="container mx-auto w-full" data-aos="fade-down">
					<div className="flex flex-col justify-center gap-6 rounded-2xl bg-white/80 px-4 py-10 backdrop-blur-sm xl:flex-row dark:bg-stone-900/80">
						<div className="basis-3/5">
							<div className="h-full rounded-xl bg-white p-8 shadow-sm dark:bg-stone-800">
								<h2 className="text-center text-2xl font-semibold text-green-700 dark:text-green-400">
									Have an Idea for a Petition?
								</h2>
								<p className="mx-auto mt-4 max-w-md text-center text-stone-600 dark:text-stone-300">
									We want to hear from you! Suggest environmental issues in your community that need attention. Whether
									it&apos;s a local concern, state-wide policy, or national issue, your ideas help us create petitions
									that make a real difference.
								</p>
							</div>
						</div>
						<div className="basis-2/5">
							<PetitionSuggestionForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
