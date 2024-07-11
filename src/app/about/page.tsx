import Image from "next/image";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const team = [
	{
		name: "Emma Mazzotta",
		title: "Founder & Executive Director",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://static.wixstatic.com/media/288dd2_14f893d922994b6eb5a3b67fb26d95f2~mv2.jpg/v1/crop/x_0,y_243,w_2250,h_1973/fill/w_804,h_706,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_6637_edited.jpg",
		description: `From a young age, Emma has exhibited a remarkable talent for leadership and passion for protecting the environment. She not only coordinates and engages in clean-up projects, but conducts research on the ecological impacts of water pollution. She founded TEDI to build upon her passion for environmental advocacy and achieve long-lasting, impactful change on an international level.`,
		email: "Emmarose2007@icloud.com",
		linkedin: "https://www.linkedin.com/in/emma-mazzotta-362182286/",
		twitter: "",
		instagram: "https://www.instagram.com/emma_mazzotta24/",
		tiktok: "https://www.tiktok.com/@emmamazzotta24",
	},
	{
		name: "Kailey Fitzgerald",
		title: "Networking Coordinator & TikTok Director",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://static.wixstatic.com/media/288dd2_b751666863d24360bd1d1d381329c963~mv2.png/v1/crop/x_0,y_115,w_826,h_724/fill/w_804,h_706,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202023-08-12%20at%2010_48_39%20AM.png",
		description: `Kailey has always seen the beauty of our world and is extremely passionate about preserving it. As a kid she was fascinated by nonfiction books about sea creatures and dinosaurs and would go on nature walks during recess at school. She joined TEDI because it allows her to use her voice, regardless of her age, to make a difference in this world.`,
		email: "",
		linkedin: "",
		twitter: "",
		instagram: "",
		tiktok: "",
	},
	{
		name: "Karen Peng",
		title: "Networking Coordinator",
		location: "Toronto, Ontario, Canada",
		image:
			"https://static.wixstatic.com/media/288dd2_6362bc43cee14f868ba8434fe4a2fdad~mv2.jpeg/v1/crop/x_53,y_0,w_615,h_540/fill/w_738,h_648,al_c,lg_1,q_85,enc_auto/IMG_2064.jpeg",
		description: `Karen has always been intrigued by forest ecosystems and how they sustain themselves. She is fascinated by environmental policy and advocating for sustainability in developing cities. She joined TEDI to express her passion for environmental science and to meet likeminded peers who also hope to solve current environmental issues.`,
		email: "",
		linkedin: "",
		twitter: "",
		instagram: "",
		tiktok: "",
	},
];

export default function AboutPage() {
	return (
		<div className="flex w-full flex-col items-center p-8">
			<section className="relative h-[400px] w-full">
				<img
					src="https://static.wixstatic.com/media/11062b_df22f41a0277457e8de40061c174b018~mv2.jpg/v1/fill/w_3088,h_1000,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_df22f41a0277457e8de40061c174b018~mv2.jpg"
					alt="Forest"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="rounded-md bg-white bg-opacity-75 p-8">
						<h2 className="mb-4 text-center text-2xl font-bold text-green-700">Our Mission</h2>
						<p className="mx-auto max-w-3xl text-center text-blue-700">
							The Environmental Defense Initiative is an international youth-led initiative dedicated to raising
							awareness of environmental issues and providing a platform for people to take action to create
							long-lasting change.
						</p>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-8 text-center text-3xl font-bold text-green-700">Our Story</h2>
					<p className="mx-auto max-w-3xl text-center text-blue-700">
						The Environmental Defense Initiative was founded in Hopewell Junction, New York by Emma Mazzotta. Emma has
						been passionate about environmental issues from a young age and started TEDI to further develop her passion
						in a way that can make an impact across the US. <br />
						{`Through writing blogs on current issues in our environment, creating petitions to advocate for policy
						change, educating others on our social media platforms, and hosting informational webinars, we hope to
						expand TEDI's reach to thousands of people and do our part in shaping a better world for future generations
						to live in.`}
					</p>
				</div>
			</section>
			<section className="w-full bg-gray-100 py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-8 text-center text-3xl font-bold text-green-700">Our Values</h2>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="rounded-md bg-white p-8 shadow-md">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white">
								1
							</div>
							<h3 className="mb-4 text-center text-xl font-bold text-blue-700">Passion</h3>
							<p className="text-center text-blue-700">
								{`We believe that long-lasting change cannot be achieved without passion. All members of our team love the environment and are passionate about protecting it from human carelessness. Passion is the core of TEDI's mission.`}
							</p>
						</div>
						<div className="rounded-md bg-white p-8 shadow-md">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white">
								2
							</div>
							<h3 className="mb-4 text-center text-xl font-bold text-blue-700">Inspiration</h3>
							<p className="text-center text-blue-700">
								{`Our mission is to inspire individuals to take action on environmental issues in their own communities. In order to inspire people to engage in environmental advocacy, we provide opportunities for people to learn about our environment.`}
							</p>
						</div>
						<div className="rounded-md bg-white p-8 shadow-md">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white">
								3
							</div>
							<h3 className="mb-4 text-center text-xl font-bold text-blue-700">Creativity</h3>
							<p className="text-center text-blue-700">
								{`We believe that creativity is the key to success and channel it in all of our campaigns. TEDI aims to stand out, not blend in. Instead of offering volunteer opportunities, we focus on creating petitions that can be used to make sustainable policy change.`}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-8 text-center text-3xl font-bold text-green-700">Meet the Team</h2>
					<div className="grid gap-8 md:grid-cols-3">
						{team.map((member) => (
							<div key={member.name} className="rounded-md bg-blue-100 p-8 shadow-md">
								<img src={member.image} alt={`An image of ${member.name}.`} className="mb-4 w-full rounded-md" />
								<h3 className="mb-2 text-xl font-bold text-blue-700">{member.name}</h3>
								<p className="mb-2 text-blue-700">{member.title}</p>
								<p className="mb-2 flex text-blue-700">
									<MapPinIcon className="mr-1 inline-block h-6 w-6" />
									<span>{member.location}</span>
								</p>
								<p className="text-blue-700">{member.description}</p>
								<div className="mt-4 flex space-x-4">
									{member.email && (
										<Link href={member.email}>
											<EnvelopeIcon className="h-6 w-6" />
										</Link>
									)}
									{member.linkedin && (
										<Link href={member.linkedin}>
											<Image src="/linkedin.svg" alt="Link to linkedin" width={24} height={24} color="#0A66C2" />
										</Link>
									)}
									{member.twitter && (
										<Link href={member.twitter}>
											<Image src="/x.svg" alt="Link to twitter" width={24} height={24} />
										</Link>
									)}
									{member.instagram && (
										<Link href={member.instagram}>
											<Image src="/instagram.svg" alt="Link to instagram" width={24} height={24} />
										</Link>
									)}
									{member.tiktok && (
										<Link href={member.instagram}>
											<Image src="/tiktok.svg" alt="Link to tiktok" width={24} height={24} />
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
