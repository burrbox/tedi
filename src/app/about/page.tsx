import Image from "next/image";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { team } from "@/lib/constants";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";

export default function AboutPage() {
	return (
		<div className="flex w-full flex-col items-center dark:bg-stone-900">
			<section className="relative h-[400px] w-full">
				<CloudinaryClientWrapper
					width="960"
					height="600"
					src="nature/forest"
					sizes="100vw"
					alt="Forest"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="rounded-lg bg-white bg-opacity-85 px-5 py-10 dark:bg-emerald-950/85" data-aos="fade-down">
						<h2 className="mb-4 text-center text-6xl font-bold text-green-700 dark:text-white">Our Mission</h2>
						<p className="mx-auto max-w-3xl text-center text-xl text-blue-700 dark:text-green-300">
							The Environmental Defense Initiative is an international youth-led initiative dedicated to raising
							awareness of environmental issues and providing a platform for people to take action to create
							long-lasting change.
						</p>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-8 dark:bg-stone-900">
				<div className="container mx-auto px-4">
					<h2 className="py-4 text-center text-3xl font-bold text-green-700 dark:text-green-500">Our Story</h2>
					<hr className="mx-auto mb-6 w-12 border-t-4 border-green-700"></hr>
					<p className="mx-auto max-w-4xl text-center text-xl text-blue-600 dark:text-blue-300">
						The Environmental Defense Initiative was founded in Hopewell Junction, New York by Emma Mazzotta. Emma has
						been passionate about environmental issues from a young age and started TEDI to further develop her passion
						in a way that can make an impact across the US. <br /> <br />
						{`Through writing blogs on current issues in our environment, creating petitions to advocate for policy
						change, educating others on our social media platforms, and hosting informational webinars, we hope to
						expand TEDI's reach to thousands of people and do our part in shaping a better world for future generations
						to live in.`}
					</p>
				</div>
			</section>
			<section className="w-full bg-gray-100 dark:bg-stone-900">
				<div
					className="relative flex min-h-[50vh] w-screen flex-col bg-cover bg-fixed bg-center bg-repeat"
					style={{
						backgroundImage: "url(https://www.campusfrance.org/sites/default/files/medias/images/2022-02/Ocean.jpg)",
					}}>
					<div className="w-screen">
						<div className="w-screen rounded-b-2xl bg-white py-2 dark:bg-stone-900 md:px-20">
							<h2 className="mb-6 text-center text-3xl font-bold text-green-700 dark:text-green-500">Our Values</h2>
							<hr className="mx-auto mb-6 w-12 border-t-4 border-green-700"></hr>
						</div>
					</div>
					<div className="container mx-auto px-4 py-16">
						<div className="grid gap-8 md:grid-cols-3">
							<div className="justify-center rounded-md bg-white p-8 shadow-md dark:bg-emerald-950">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white">
									1
								</div>
								<h3 className="mb-4 text-center text-xl font-bold text-blue-700 dark:text-blue-400">Passion</h3>
								<p className="text-center text-blue-700 dark:text-blue-300">
									{`We believe that long-lasting change cannot be achieved without passion. All members of our team love the environment and are passionate about protecting it from human carelessness. Passion is the core of TEDI's mission.`}
								</p>
							</div>
							<div className="rounded-md bg-white p-8 shadow-md dark:bg-emerald-950">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white">
									2
								</div>
								<h3 className="mb-4 text-center text-xl font-bold text-blue-700 dark:text-blue-400">Inspiration</h3>
								<p className="text-center text-blue-700 dark:text-blue-300">
									{`Our mission is to inspire individuals to take action on environmental issues in their own communities. In order to inspire people to engage in environmental advocacy, we provide opportunities for people to learn about our environment.`}
								</p>
							</div>
							<div className="rounded-md bg-white p-8 shadow-md dark:bg-emerald-950">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white">
									3
								</div>
								<h3 className="mb-4 text-center text-xl font-bold text-blue-700 dark:text-blue-400">Creativity</h3>
								<p className="text-center text-blue-700 dark:text-blue-300">
									{`We believe that creativity is the key to success and channel it in all of our campaigns. TEDI aims to stand out, not blend in. Instead of offering volunteer opportunities, we focus on creating petitions that can be used to make sustainable policy change.`}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-16 dark:bg-stone-900">
				<div className="container mx-auto px-4">
					<h2 className="mb-8 text-center text-3xl font-bold text-green-700 dark:text-green-500">Meet the Team</h2>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{team.map((member) => (
							<div
								key={member.name}
								className="rounded-lg bg-blue-100 p-8 shadow-md duration-300 ease-in-out hover:bg-blue-200 dark:bg-emerald-900 dark:duration-500 dark:ease-in-out dark:hover:bg-emerald-800"
								data-aos="fade-down"
								data-aos-duration="300">
								<CloudinaryClientWrapper
									height={1080}
									width={1080}
									src={member.image}
									alt={`An image of ${member.name}.`}
									gravity="face"
									crop="fill"
									className="mb-4 h-96 w-full rounded-md object-cover"
								/>
								<h3 className="mb-2 text-xl font-bold text-blue-700 dark:text-blue-200">{member.name}</h3>
								<h4 className="mb-2 text-blue-700 dark:text-blue-200">{member.title}</h4>
								<p className="mb-2 flex text-blue-700 dark:text-blue-200">
									<MapPinIcon className="mr-1 inline-block h-6 w-6" />
									<span>{member.location}</span>
								</p>
								<p className="text-blue-700 dark:text-stone-300">{member.description}</p>
								<div className="mt-4 flex space-x-4">
									{member.email && (
										<Link href={`mailto:${member.email}`}>
											<EnvelopeIcon className="h-6 w-6" name="Member's email" />
										</Link>
									)}
									{member.linkedin && (
										<Link href={member.linkedin}>
											<Image
												src="/linkedin.svg"
												className="dark:fill-white"
												alt="Link to linkedin"
												width={24}
												height={24}
												color="#0A66C2"
											/>
										</Link>
									)}
									{member.twitter && (
										<Link href={member.twitter}>
											<Image src="/x.svg" className="dark:fill-white" alt="Link to twitter" width={24} height={24} />
										</Link>
									)}
									{member.instagram && (
										<Link href={member.instagram}>
											<Image
												src="/instagram.svg"
												className="dark:fill-white"
												alt="Link to instagram"
												width={24}
												height={24}
											/>
										</Link>
									)}
									{member.tiktok && (
										<Link href={member.instagram}>
											<Image
												src="/tiktok.svg"
												className="dark:fill-white"
												alt="Link to tiktok"
												width={24}
												height={24}
											/>
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="mx-2 w-full bg-white py-8 dark:bg-stone-900 md:mx-4 lg:mx-8">
				<div className="flex justify-center">
					<h1 className="py-4 text-center text-6xl text-green-700 dark:text-green-500">Partnerships</h1>
				</div>
				<hr className="mx-auto mb-6 w-12 border-t-4 border-green-700"></hr>
				<div className="relative mx-auto max-w-3xl">
					<h2 className="text-3x1 mb-8 text-center text-blue-700 dark:text-blue-300">
						Thank you to all of our partners for working with us to achieve sustainable, long-lasting change. Learn more
						about these partnerships by following us on Instagram.
					</h2>
					<div className="mt-8 flex justify-center">
						<button className="text-1xl max-w-32 grow rounded-xl border-2 border-green-600 bg-green-600 px-5 py-2 text-center text-white duration-300 hover:bg-white hover:text-green-600">
							<label>
								<a href="https://instagram.com/environmentaldefenseinitiative/">Follow Us</a>
							</label>
						</button>
					</div>
				</div>
				<div className="mx-auto flex max-w-5xl items-center justify-center py-10">
					<div className="container flex w-full flex-col items-center">
						<CloudinaryClientWrapper
							src="partners/plantachange"
							alt="Logo of Plant A Change"
							width={150}
							height={150}
							className="mb-2 rounded-full"
						/>
						<h2 className="flex justify-center text-center text-2xl text-blue-700 dark:text-blue-400">
							PLANT A CHANGE
						</h2>
					</div>
					<div className="container flex w-full flex-col items-center">
						<CloudinaryClientWrapper
							src="partners/plastic2brick"
							alt="Logo of Plastic 2 Brick"
							width={150}
							height={150}
							className="mb-2 rounded-full"
						/>
						<h2 className="flex justify-center text-center text-2xl text-blue-700 dark:text-blue-400">
							PLASTIC 2 BRICK
						</h2>
					</div>
				</div>
				<hr className="border-t-1 mx-auto mb-6 w-1/2 border-green-700"></hr>
				<div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-6 xl:flex-row">
					<div className="relative w-1/2">
						<p className="py-5 text-center text-xl text-blue-600 dark:text-blue-300">
							&quot;Collaborating with your team on our project has been an{" "}
							<span className="font-semibold text-green-600">exceptional</span> experience. Your{" "}
							<span className="font-semibold text-green-600">dedication, creativity, and professionalism</span> were
							evident in every phase of our partnership. The insights and solutions you provided{" "}
							<span className="font-semibold text-green-600">significantly</span> enhanced our project, and the{" "}
							<span className="font-semibold text-green-600">seamless collaboration</span> process made it all the more
							enjoyable.&quot;
						</p>
						<h3 className="text-center text-xl font-semibold text-blue-600 dark:text-blue-400">-- Plant A Change--</h3>
					</div>
					<div className="relative w-1/2">
						<p className="py-5 text-center text-xl text-blue-600 dark:text-blue-300">
							&quot;Collaborating with the Environmental Defense Initiative on{" "}
							<span className="font-semibold text-green-600">inspiring</span> reels and a microplastic pollution
							petition was an experience nothing short of <span className="font-semibold text-green-600">amazing</span>.
							Their unwavering dedication to <span className="font-semibold text-green-600">protecting our planet</span>{" "}
							and educating the community on sustainable practices is truly commendable. We’re proud to stand alongside
							such a <span className="font-semibold text-green-600">passionate and impactful</span> organization in our
							shared mission to make the world a greener place.&quot;
						</p>
						<h3 className="text-center text-xl font-semibold text-blue-600 dark:text-blue-400">-- Plastic 2 Brick--</h3>
					</div>
				</div>
			</section>
		</div>
	);
}
