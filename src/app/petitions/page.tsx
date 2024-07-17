export default async function Petitions() {
	return (
		<section className="h-full w-full flex-col items-end">
			<div
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
						<img src="https://static.wixstatic.com/media/11062b_658fbb9afab94e49b67099039406c25a~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_658fbb9afab94e49b67099039406c25a~mv2.jpeg" />
					</span>
					<span>
						<img src="https://static.wixstatic.com/media/11062b_d4083c8315294d4ba93cfdc700edb547~mv2_d_3840_5760_s_4_2.jpg/v1/crop/x_0,y_1691,w_3840,h_4059/fill/w_379,h_401,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_d4083c8315294d4ba93cfdc700edb547~mv2_d_3840_5760_s_4_2.jpg" />
					</span>
				</div>
			</div>
			<div
				className="relative flex min-h-[110vh] w-screen bg-cover bg-fixed bg-center bg-repeat pt-16 xl:pt-28"
				style={{
					backgroundImage:
						"url(https://static.wixstatic.com/media/11062b_c2b35eecf8974f979019c6830b0b4964~mv2.jpg/v1/fill/w_1587,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c2b35eecf8974f979019c6830b0b4964~mv2.jpg)",
				}}>
				<div className="inset-0 mx-auto w-full sm:w-10/12" data-aos="fade-down">
					<div className="flex flex-col justify-center gap-6 xl:flex-row">
						<div className="basis-3/5">
							<div className="h-fit rounded-xl bg-white p-2 py-8">
								<h1 className="text-center text-3xl font-semibold text-blue-700">
									The Flint Water Crisis - Holding the EPA Accountable
								</h1>
								<h2 className="mx-4 pt-6 text-sm text-green-700 md:mx-6 md:text-sm lg:mx-8 lg:text-base">
									The water catastrophe is expanding rapidly and inevitably across the United States, threatening the
									health of millions of people and calling into question the diligence of environmental organizations
									such as the Environmental Protection Agency. The Flint Water Crisis began in 2014 when the city of
									Flint, Michigan decided to switch the source of their water from the Delaware River to the Flint
									River. This new source of water was not treated as scrupulously as its predecessor, allowing lead that
									entered the Flint River from corroded pipes to infiltrate the water supply.
									<br />
									<br />
									{
										"Lead concentrations in the blood of Flint citizens are significantly higher currently than they were when the Delaware River was used as the city’s main water supply. Lead is known to cause severe health	issues including hypertension, anaemia, and most notably Legionnaires' disease, a severe form of pneumonia. 12 people have died from this deadly respiratory disease and dozens more are forced to live	with the side effects of lead poisoning on a daily basis in Flint, Michigan."
									}
									<br />
									<br />
									The Flint Water Crisis sparked national outrage and investigations into government negligence and
									environmental injustice. In 1986 the US Environmental Protection Agency passed the Safe Drinking Water
									Act which banned the use of lead in the construction of water pipes. Yet, plumbing systems in the
									majority of homes in Flint still boast lead apparatus, compromising the safety of drinking water.
									<br />
									<br />
									Now, how can we prevent this issue from persisting in the future? Many have looked toward the lead
									standard which currently stands at 15µg/L in Michigan. Experts and EPA officials claim the standard
									must be decreased to 10µg/L in order for drinking water to truly be deemed “safe.” The only way to
									prevent this issue from expanding and impairing the health of more Americans is to address the root
									cause of the issue: a lack of action by the EPA in enforcing water quality standards. Urge the EPA to
									lower the standard for lead concentrations in drinking water to 10µg/L and mandate the removal of lead
									pipes from plumbing systems TODAY. Fight for our future and the people of Flint!
								</h2>
							</div>
						</div>
						<div className="basis-2/5">
							<div className="rounded-2xl bg-white">
								<div className="mx-4 py-4 lg:py-8">
									<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700">Sign Today!</h1>
									<h2 className="text-wrap text-center text-lg text-blue-700">
										Ensure ALL Americans have access to clean water.
									</h2>
								</div>
								<div className="mx-6 grid justify-center gap-3 md:flex-col lg:grid-cols-2 lg:grid-rows-3">
									<div className="flex-col lg:col-span-1 lg:row-span-1">
										<p className="text-blue-700">First Name *</p>
										<input
											className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white"
											type="text"
										/>
									</div>
									<div className="flex-col lg:col-span-1 lg:col-start-2 lg:row-span-1">
										<p className="text-blue-700">Last Name *</p>
										<input
											className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white"
											type="text"
										/>
									</div>
									<div className="flex-col lg:col-span-1 lg:col-start-1 lg:row-span-1">
										<p className="text-blue-700">Email *</p>
										<input
											className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white"
											type="email"
										/>
									</div>
									<div className="flex-col lg:col-span-1 lg:col-start-1 lg:row-span-1">
										<p className="text-blue-700">Zip Code *</p>
										<input className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white" />
									</div>
									<div className="col-span-1 col-start-2 row-span-2 row-start-2 flex-col">
										<p className="text-blue-700">Message</p>
										<textarea
											className="h-fit w-full resize-none rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white"
											rows={5}
										/>
									</div>
								</div>
								<div className="mx-3 flex justify-center py-10">
									<button
										type="submit"
										className="w-4/5 rounded-xl bg-blue-700 py-3 text-white duration-300 hover:bg-blue-600">
										Sign
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
