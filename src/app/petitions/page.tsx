import { petition } from "@/lib/constants";
import PetitionForm from "./petitionForm";
import Head from "next/head";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { ImageResponse } from "next/og";

export async function GET() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 40,
					color: "black",
					background: "white",
					width: "100%",
					height: "100%",
					padding: "50px 200px",
					textAlign: "center",
					justifyContent: "center",
					alignItems: "center",
				}}>
				👋 Hello
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}

export const metadata = {
	title: "Petitions - TEDI",
	description: "Be the change you want to see in the world.",
};

export default async function Petitions({}) {
	<Head>
		<title>Petitions - TEDI</title>
		<meta
			property="og:image"
			content="https://static.wixstatic.com/media/7cc6b0344c9440818bad598dd590ed27.jpg/v1/fill/w_1587,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7cc6b0344c9440818bad598dd590ed27.jpg"
		/>
		<meta property="og:description" content="Sign a petition to advocate for new policies." />
	</Head>;

	return (
		<section className="h-full w-full flex-col items-end">
			<div
				title="An background image of a butterfly"
				style={{
					backgroundImage:
						"url(https://static.wixstatic.com/media/7cc6b0344c9440818bad598dd590ed27.jpg/v1/fill/w_1587,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7cc6b0344c9440818bad598dd590ed27.jpg)",
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
							src="https://static.wixstatic.com/media/11062b_658fbb9afab94e49b67099039406c25a~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_658fbb9afab94e49b67099039406c25a~mv2.jpeg"
						/>
					</span>
					<span>
						<img
							alt="An image of a protest. One of the protesters is holding a sign of the world on fire and read 'WAKE UP'."
							src="https://static.wixstatic.com/media/11062b_d4083c8315294d4ba93cfdc700edb547~mv2_d_3840_5760_s_4_2.jpg/v1/crop/x_0,y_1691,w_3840,h_4059/fill/w_379,h_401,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_d4083c8315294d4ba93cfdc700edb547~mv2_d_3840_5760_s_4_2.jpg"
						/>
					</span>
				</div>
			</div>
			<div
				className="relative flex min-h-[110vh] w-screen bg-cover bg-fixed bg-center bg-repeat py-16 xl:pt-28"
				title="An image of water droplets"
				style={{
					backgroundImage:
						"url(https://static.wixstatic.com/media/11062b_c2b35eecf8974f979019c6830b0b4964~mv2.jpg/v1/fill/w_1587,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c2b35eecf8974f979019c6830b0b4964~mv2.jpg)",
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
