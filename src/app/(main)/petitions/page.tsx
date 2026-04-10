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
				className="relative flex min-h-[55vh] w-screen items-center bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/tallForest" })})` }}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/65" />
				<div className="container relative z-10 py-32 text-center" data-aos="fade-in">
					<h1 className="mb-4 text-5xl font-bold text-white drop-shadow-md md:text-6xl">Petitions</h1>
					<p className="text-xl text-white/90 drop-shadow">
						Be the change you want to see in the world.
						<br />
						Sign a petition — every signature counts.
					</p>
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
			<section className="w-full bg-stone-50 py-16 md:py-24 dark:bg-stone-900">
				<div className="container mx-auto max-w-6xl px-4 md:px-6" data-aos="fade-up">
					<div className="grid items-start gap-12 lg:grid-cols-2">
						{/* Left: description */}
						<div className="flex flex-col justify-center space-y-6 lg:py-8">
							<div>
								<span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
									Community Input
								</span>
							</div>
							<h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl dark:text-green-400">
								Have an Idea for a Petition?
							</h2>
							<p className="text-lg text-stone-600 dark:text-stone-300">
								We want to hear from you! Suggest environmental issues in your community that need attention. Whether
								it&apos;s a local concern, state-wide policy, or national issue, your ideas help us create petitions that
								make a real difference.
							</p>
							<ul className="space-y-3">
								{[
									"Local issues affecting your neighborhood or city",
									"State or provincial policy you want changed",
									"National environmental legislation you care about",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
											<span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
										</span>
										<span className="text-stone-600 dark:text-stone-300">{item}</span>
									</li>
								))}
							</ul>
						</div>
						{/* Right: form */}
						<div>
							<PetitionSuggestionForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
