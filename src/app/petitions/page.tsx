import { petition } from "@/lib/constants";
import PetitionForm from "./petitionForm";
import { type Metadata } from "next";
import { env } from "@/env";
import { getCldOgImageUrl } from "next-cloudinary";

export const metadata: Metadata = {
	title: "Petitions - TEDI",
	description: "Be the change you want to see in the world.",
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		url: `${env.URL}/petitions`,
		title: "Petitions - TEDI",
		type: "website",
		description: "Sign a petition to advocate for new policies.",
		images: [
			{
				url: getCldOgImageUrl({ src: "nature/tallForest" }),
				width: 1200,
				height: 627,
				alt: "An image of the Redwood Forest",
			},
		],
	},
};

export default async function Petitions({}) {
	return (
		<section className="h-full w-full flex-col items-end">
			<div
				title="An image of the Redwood Forest"
				style={{
					backgroundImage:
						"url(https://res.cloudinary.com/mozzarella-tedi/image/upload/f_auto,q_auto/v1/nature/tallForest)",
				}}
				className="flex h-[70vh] w-screen bg-cover bg-fixed bg-center bg-no-repeat">
				<div className="container relative mx-auto h-fit w-full px-4 py-16">
					<div className="absolute inset-0 mx-auto mt-28 w-fit md:mt-32 lg:mt-44 2xl:mt-52" data-aos="fade-down">
						<div className="flex flex-col justify-center rounded-xl bg-white p-10 lg:p-20 dark:bg-emerald-950">
							<h1 className="text-center text-6xl font-bold text-blue-600 dark:text-white">Petitions</h1>
							<h2 className="text-wrap pt-6 text-center text-xl text-green-600 dark:text-green-300">
								Be the change you want to see in the world.
								<br />
								Sign a petition; every signature counts.
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="h-fit w-full bg-white dark:bg-stone-900">
				<div className="flex flex-row justify-center py-8">
					<span>
						<img
							alt="An image of a protest. One of the protesters is holding a sign that reads 'The Climate is Chagning. Why aren't we?'."
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpeoplesdispatch.org%2Fwp-content%2Fuploads%2F2019%2F03%2Fglobal-strike-4-climate.jpg&f=1&nofb=1&ipt=dcb808b33e4a67306edfd9698dc60df55f4bc148211da879e84eb43727088751&ipo=images"
							className="h-96 object-cover"
						/>
					</span>
					<span>
						<img
							alt="An image of a protest. One of the protesters is holding a sign of the world on fire and read 'WAKE UP'."
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.V-oo5LTTojTNnhLqkqNYQwHaE8%26pid%3DApi&f=1&ipt=3e5984c18fcfe9f3f90f5ce7118ab302ef61af3ab8fbbe8d0933ab2b04929de7&ipo=images"
							className="h-96 object-cover"
						/>
					</span>
				</div>
			</div>
			<div
				className="relative flex min-h-[110vh] w-screen bg-cover bg-fixed bg-center bg-repeat py-16 xl:pt-28"
				title="An image of a beach and ocean"
				style={{
					backgroundImage:
						"url(https://res.cloudinary.com/mozzarella-tedi/image/upload/f_auto,q_auto/v1/nature/t7x9xmnsyqs2yetfpp3j)",
				}}>
				<div className="inset-0 mx-auto w-full sm:w-10/12" data-aos="fade-down">
					<div className="flex flex-col justify-center gap-6 xl:flex-row">
						<div className="basis-3/5">
							<div className="h-fit rounded-xl bg-white p-2 py-8 dark:bg-stone-800">
								<h1 className="text-center text-3xl font-semibold text-blue-700 dark:text-blue-500">
									{petition.title}
								</h1>
								<h2 className="mx-4 whitespace-pre-line pt-6 text-sm text-green-700 md:mx-6 md:text-sm lg:mx-8 lg:text-base dark:text-blue-300">
									{petition.description}
								</h2>
							</div>
						</div>
						<div className="basis-2/5">
							<PetitionForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
