import { petition } from "@/lib/constants";
import PetitionForm from "./petitionForm";

export default async function Petitions({}) {
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
						<div className="flex flex-col justify-center rounded-xl bg-white p-10 lg:p-20">
							<h1 className="text-center text-6xl font-bold text-blue-600">Petitions</h1>
							<h2 className="text-wrap pt-6 text-center text-xl text-green-600">
								Be the change you want to see in the world.
								<br />
								Sign a petition; every signature counts.
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="h-fit w-full bg-white">
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
							<div className="h-fit rounded-xl bg-white p-2 py-8">
								<h1 className="text-center text-3xl font-semibold text-blue-700">{petition.title}</h1>
								<h2 className="mx-4 whitespace-pre-line pt-6 text-sm text-green-700 md:mx-6 md:text-sm lg:mx-8 lg:text-base">
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
