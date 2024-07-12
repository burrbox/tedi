import Image from "next/image";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const team = [
	{
		name: "Emma Mazzotta",
		title: "Founder & Executive Director",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080c_thumb,g_face,h_1080,w_1080/v1/TEDI%20Bio/x6q3sdgebdrhx2pb5b4k",
		/*image:
			"https://static.wixstatic.com/media/288dd2_05f3afcc636847509d9d036dbd6120e9~mv2.jpg/v1/crop/x_0,y_35,w_1449,h_1272/fill/w_403,h_353,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3F6F22F3-129A-47F6-BBEA-1F63F567F51D_1_1.jpg",*/
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
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/byugrzyf3ozegsehl1ay",
		description: `Kailey has always seen the beauty of our world and is extremely passionate about preserving it. As a kid she was fascinated by nonfiction books about sea creatures and dinosaurs and would go on nature walks during recess at school. She joined TEDI because it allows her to use her voice, regardless of her age, to make a difference in this world.`,
		email: "kaileyfitzgerald102@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "",
		tiktok: "https://www.tiktok.com/@buster_0924",
	},
	{
		name: "Karen Peng",
		title: "Networking Coordinator",
		location: "Toronto, Ontario, Canada",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/xejrbnm0k1loivohupbx",
		description: `Karen has always been intrigued by forest ecosystems and how they sustain themselves. She is fascinated by environmental policy and advocating for sustainability in developing cities. She joined TEDI to express her passion for environmental science and to meet likeminded peers who also hope to solve current environmental issues.`,
		email: "Karen.penggg@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/kp_penguin/",
		tiktok: "",
	},
	{
		name: "Charlotte Wang",
		title: "Instagram Director & Blog Editor",
		location: "Stormville, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/tnkuimk4otojssngkipi",
		description: `Charlotte is passionate about the environment and finding ways to reduce humanity’s negative impact upon it. She is currently conducting research in school related to bioplastics as part of her mission to do so. She joined TEDI because it provides a platform for spreading awareness and information to other people, and there is always strength in numbers when creating change.`,
		email: "charlotteywang@gmail.com",
		linkedin: "https://www.linkedin.com/in/charlotte-wang-023432265/",
		twitter: "",
		instagram: "https://www.instagram.com/charlottew.3693/",
		tiktok: "https://www.tiktok.com/@charlto3",
	},
	{
		name: "Ann Catechis",
		title: "Blog Writer",
		location: "Lakeland, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/qpvh1kz9lkhcnn4xw7af",
		description: `Ann has always been passionate about preserving the Earth. From learning about recycling as a child, to studying how climate change affects marine species in the ocean, Ann knew TEDI was something she wanted to be a part of. Through TEDI, Ann is able to use her voice to express the increasing need for change to preserve the Earth for future generations.`,
		email: "akcatechis@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "",
		tiktok: "",
	},
	{
		name: "Maggie Yang",
		title: "Blog Writer & Digital Creator",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/xjbajtpnzsoe6c05o66w",
		description: `Maggie has always appreciated and been fascinated by the beauty of nature. She believes in protecting our world so that future generations can experience the same wonder and beauty she has. Maggie hopes to make a difference in our world and preserve our environment by working with TEDI. `,
		email: "maggie.yang0713@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/maggiesomebody/",
		tiktok: "https://www.tiktok.com/@maggiesomebody",
	},
	{
		name: "Karen Wong",
		title: "Blog Writer",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/cgmkahssvtqmleu51a8b",
		description: `Karen has loved animals from a very young age. In her preschool years, she loved to care for turtles that wandered into her yard from a nearby creek. Growing up, she has been passionate about preserving animal habitats and saving the environment, often reading articles about animal life. TEDI allows her to use her voice to spread awareness for her interests and make a difference in this world. `,
		email: "kw1021232007@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/karen.wong21/",
		tiktok: "https://www.tiktok.com/@karen_wonggg",
	},
	{
		name: "Ina Sabarre",
		title: "Blog Writer & Video Content Creator",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/xjlke6gtomjsg0kyrogu",
		description: `Ina has always loved being out in nature and researching different animals. Ina's main environmental interests include endangered species, natural disasters, and the contributions of large corporations to climate change. She joined TEDI to use her love and talent for writing to educate others about important environmental issues in our world.`,
		email: "Inasabarre@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/wilhelm._.ina/",
		tiktok: "",
	},
	{
		name: "Kylie Yap",
		title: "Video Editor",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/q1bsw4rvvbataae5qcwl",
		description: `Kylie has always been captivated by nature and various forms of wildlife. She is extremely passionate about helping the millions of species that face extinction by preventing further habitat loss. She joined TEDI as a video editor to raise awareness of the impact of humans on wildlife and the environment.`,
		email: "kylieayap@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/taekwondo.sushi/",
		tiktok: "",
	},
	{
		name: "Charlotte North",
		title: "Digital Creator",
		location: "Verona, NJ, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/vsn2tsvk0cparotcqdm0",
		description: `Charlotte’s passion for environmental science started as a kid when she lived in Oregon. She was surrounded by people who felt as passionately about the outdoors as she did. This summer she spent weekdays volunteering for local youth programs to help educate young children about the environment. TEDI is an opportunity for her to continue doing her part to help the environment!`,
		email: "north.c.rose@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/charlottenorthh/",
		tiktok: "",
	},
	{
		name: "Isabella Morelli",
		title: "Petition Director",
		location: "Lakeland, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/zofvvn0r5x8qne3waclf",
		description: `Isabella has been interested in nature since she was in elementary school when she tried to start a nature club with her friends. Recently, Isabella has become even more passionate about the environment upon witnessing the damage climate change has done to our world. She joined TEDI because she saw an opportunity to create change and use her voice for good.`,
		email: "isabella.morelli924@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "",
		tiktok: "",
	},
	{
		name: "Ashley Curtiss",
		title: "Digital Creator",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/fyjacqcvwutlrqfjr4ex",
		description: `Ashley has always been passionate about protecting the environment from a young age. She is fascinated by renewable energy sources, weather patterns, ecosystems, and the protection of endangered species. Before joining TEDI, Ashley was a counselor at a local zoo where she cared for endangered species and educated the public about them. She is excited to educate people about the environment and share her passion through TEDI.`,
		email: "curtissashley25@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/ashley.curtiss25/",
		tiktok: "",
	},
	{
		name: "Cassidy Fisher",
		title: "Blog Writer",
		location: "Warrington, Pennsylvania, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/uttowv3dxrxhufp1ophz",
		description: `Cassidy is passionate about the environment and studying the impacts of changes in the environment on human health and wellbeing. She has conducted extensive research on environmental inequities in minority communities and joined TEDI to raise awareness of these inequities and other environmental issues.`,
		email: "cassyfish2025@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/%20_cassidyfisher_/",
		tiktok: "",
	},
	{
		name: "Priya Connelly",
		title: "Blog Writer",
		location: "Hopewell Junction, NY, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/clgfjuvx1rzmvmeyfifr",
		description: `Priya has always been passionate about the Earth and is constantly looking for more ways to preserve it for future generations. She loves all things nature, especially animals, and wants to raise awareness of environmental problems that lack public attention. She has witnessed the impacts of environmental problems on our Earth first-hand and joined TEDI to speak up about these important issues.`,
		email: "priya.connelly@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/priya.connellyy/",
		tiktok: "",
	},
	{
		name: "Alexa Segovia",
		title: "Blog Editor",
		location: "New York City, New York, USA",
		image:
			"https://res.cloudinary.com/dlzeuksus/image/upload/c_fill,g_face,f_auto,h_1080,w_1080/v1/TEDI%20Bio/oaj5yxnnzq9yuamerisr",
		description: `Alexa has always has a strong interest in environmental conservation and ensuring a better future for generations to come. She has a special passion for animals, especially pandas. She wants to pursue a degree in biology and study ways in which we can help our environment thrive. TEDI is a great way to spread awareness and motivate  others to take action in order to make the world a better place!`,
		email: "asegoviams101@gmail.com",
		linkedin: "",
		twitter: "",
		instagram: "https://www.instagram.com/heartz4ken/",
		tiktok: "",
	},
];

export default function AboutPage() {
	return (
		<div className="flex w-full flex-col items-center pb-8">
			<section className="relative h-[400px] w-full">
				<img
					src="https://static.wixstatic.com/media/11062b_df22f41a0277457e8de40061c174b018~mv2.jpg/v1/fill/w_3088,h_1000,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_df22f41a0277457e8de40061c174b018~mv2.jpg"
					alt="Forest"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="rounded-lg bg-white bg-opacity-85 px-5 py-10">
						<h2 className="mb-4 text-center text-3xl font-bold text-green-700">Our Mission</h2>
						<p className="mx-auto max-w-3xl text-center text-xl text-blue-700">
							The Environmental Defense Initiative is an international youth-led initiative dedicated to raising
							awareness of environmental issues and providing a platform for people to take action to create
							long-lasting change.
						</p>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-8">
				<div className="container mx-auto px-4">
					<h2 className="py-4 text-center text-3xl font-bold text-green-700">Our Story</h2>
					<hr className="mx-auto mb-6 w-12 border-t-4 border-green-700"></hr>
					<p className="mx-auto max-w-4xl text-center text-xl text-blue-600">
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
			<section className="w-full bg-gray-100 py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-4 text-center text-3xl font-bold text-green-700">Our Values</h2>
					<hr className="mx-auto mb-6 w-12 border-t-4 border-green-700"></hr>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="justify-center rounded-md bg-white p-8 shadow-md">
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
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{team.map((member) => (
							<div
								key={member.name}
								className="rounded-lg bg-blue-100 p-8 shadow-md duration-300 ease-in-out hover:bg-blue-200"
								data-aos="fade-in">
								<img
									src={member.image}
									alt={`An image of ${member.name}.`}
									className="mb-4 h-96 w-full rounded-md object-cover"
								/>
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
			<section className="max-w-5xl bg-white py-8">
				<div className="flex justify-center">
					<h1 className="py-4 text-center text-6xl text-green-700">Partnerships</h1>
				</div>
				<hr className="mx-auto mb-6 w-12 border-t-4 border-green-700"></hr>
				<div className="relative mx-auto max-w-3xl">
					<h3 className="text-3x1 mb-8 text-center text-blue-700">
						Thank you to all of our partners for working with us to achieve sustainable, long-lasting change. Learn more
						about these partnerships by following us on Instagram.
					</h3>
					<div className="mt-8 flex justify-center">
						<a
							className="btn text-1xl max-w-32 border-2 border-green-600 px-5 py-2 text-center text-green-500 hover:bg-green-500 hover:text-white"
							href="https://www.instagram.com/environmentaldefenseinitiative/">
							Follow Us
						</a>
					</div>
				</div>
				<div className="flex w-full justify-center py-10">
					<div className="container flex w-full flex-col items-center">
						<img
							src="https://static.wixstatic.com/media/288dd2_e69d3d26239b43799d6a05c0f0d83d2b~mv2.jpg/v1/crop/x_0,y_11,w_1002,h_1002/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/633A2431-1788-4C29-8389-2A3A589B1E62_edi.jpg"
							alt="Partner 1"
							width={121}
							height={121}
							className="mb-2 rounded-full"
						/>
						<h3 className="flex justify-center text-center text-2xl text-blue-700">PLANT A CHANGE</h3>
					</div>
					<div className="container flex w-full flex-col items-center">
						<img
							src="https://static.wixstatic.com/media/288dd2_251366a23d324a8d8f07df515829e90b~mv2.jpg/v1/crop/x_7,y_0,w_1156,h_1156/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0843.jpg"
							alt="Partner 2"
							width={121}
							height={121}
							className="mb-2 rounded-full"
						/>
						<h3 className="flex justify-center text-center text-2xl text-blue-700">PLASTIC2BRICK</h3>
					</div>
				</div>
				<hr className="border-t-1 mx-auto mb-6 w-3/4 border-green-700"></hr>
				<div className="relative mx-auto max-w-4xl">
					<h3 className="py-5 text-center text-xl text-blue-600">
						&quot;Collaborating with the Environmental Defense Initiative on{" "}
						<span className="font-semibold text-green-600">inspiring</span> reels and a microplastic pollution petition
						was an experience nothing short of <span className="font-semibold text-green-600">amazing</span>. Their
						unwavering dedication to <span className="font-semibold text-green-600">protecting our planet</span> and
						educating the community on sustainable practices is truly commendable. We’re proud to stand alongside such a{" "}
						<span className="font-semibold text-green-600">passionate and impactful</span> organization in our shared
						mission to make the world a greener place.&quot;
					</h3>
					<h3 className="text-center text-xl font-semibold text-blue-600">-- Plastic2Brick--</h3>
				</div>
			</section>
		</div>
	);
}
