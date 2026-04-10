import { EnvelopeIcon, GlobeAmericasIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { directors, team } from "@/lib/constants";
import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import { GithubIcon, InstagramIcon, LinkedInIcon, TikTokIcon, TwitterXIcon } from "@/components/icons";
import { env } from "@/env";
import { type Metadata } from "next";
import { getCldImageUrl } from "next-cloudinary";
import type { WebPage, WithContext } from "schema-dts";
import { JsonLd } from "@/components/jsonLd";

export const metadata: Metadata = {
	title: "About",
	description: "Learn more about The Environmental Defense Initiative and our mission.",
	keywords: ["about", "mission", "values", "team", "partnerships", "environment", "climate", "sustainability"],
	alternates: { canonical: `${env.URL}/about` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		title: "About - TEDI",
		description: "Learn more about The Environmental Defense Initiative and our mission.",
		url: `${env.URL}/about`,
		type: "website",
	},
};

const jsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "About The Environmental Defense Initiative",
	description: "Learn more about The Environmental Defense Initiative and our mission.",
	url: `${env.URL}/about`,
};

const values = [
	{
		number: "1",
		title: "Passion",
		description:
			"We believe that long-lasting change cannot be achieved without passion. All members of our team love the environment and are passionate about protecting it from human carelessness. Passion is the core of TEDI's mission.",
	},
	{
		number: "2",
		title: "Inspiration",
		description:
			"Our mission is to inspire individuals to take action on environmental issues in their own communities. In order to inspire people to engage in environmental advocacy, we provide opportunities for people to learn about our environment.",
	},
	{
		number: "3",
		title: "Creativity",
		description:
			"We believe that creativity is the key to success and channel it in all of our campaigns. TEDI aims to stand out, not blend in. Instead of offering volunteer opportunities, we focus on creating petitions that can be used to make sustainable policy change.",
	},
];

function MemberCard({ member }: { member: (typeof directors)[number] }) {
	return (
		<div
			className="flex h-full flex-col justify-between rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-stone-800"
			data-aos="fade-up"
			data-aos-duration="300"
		>
			<div>
				<CloudinaryClientWrapper
					height={1080}
					width={1080}
					src={member.image}
					alt={`An image of ${member.name}.`}
					gravity="face"
					crop="fill"
					className="mb-4 h-72 w-full rounded-lg object-cover"
				/>
				<h3 className="mb-1 text-lg font-bold text-stone-800 dark:text-stone-100">{member.name}</h3>
				<h4 className="mb-1 text-sm font-medium text-green-600 dark:text-green-400">{member.title}</h4>
				<p className="mb-2 flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400">
					<MapPinIcon className="h-4 w-4 shrink-0" />
					<span>{member.location}</span>
				</p>
				<p className="text-sm text-stone-600 dark:text-stone-300">{member.description}</p>
			</div>
			<div className="mt-4 flex gap-3">
				{member.email && (
					<Link href={`mailto:${member.email}`} target="_blank" aria-label={`Email ${member.name}`}>
						<EnvelopeIcon className="h-5 w-5 text-stone-500 transition-colors hover:text-green-600 dark:text-stone-400 dark:hover:text-green-400" />
					</Link>
				)}
				{member.linkedin && (
					<Link href={member.linkedin} target="_blank" aria-label={`${member.name}'s LinkedIn`}>
						<LinkedInIcon className="h-5 w-5 fill-stone-500 transition-colors hover:fill-green-600 dark:fill-stone-400 dark:hover:fill-green-400" />
					</Link>
				)}
				{member.github && (
					<Link href={member.github} target="_blank" aria-label={`${member.name}'s GitHub`}>
						<GithubIcon className="h-5 w-5 fill-stone-500 transition-colors hover:fill-green-600 dark:fill-stone-400 dark:hover:fill-green-400" />
					</Link>
				)}
				{member.twitter && (
					<Link href={member.twitter} target="_blank" aria-label={`${member.name}'s Twitter`}>
						<TwitterXIcon className="h-5 w-5 fill-stone-500 transition-colors hover:fill-green-600 dark:fill-stone-400 dark:hover:fill-green-400" />
					</Link>
				)}
				{member.instagram && (
					<Link href={member.instagram} target="_blank" aria-label={`${member.name}'s Instagram`}>
						<InstagramIcon className="h-5 w-5 fill-stone-500 transition-colors hover:fill-green-600 dark:fill-stone-400 dark:hover:fill-green-400" />
					</Link>
				)}
				{member.tiktok && (
					<Link href={member.tiktok} target="_blank" aria-label={`${member.name}'s TikTok`}>
						<TikTokIcon className="h-5 w-5 fill-stone-500 transition-colors hover:fill-green-600 dark:fill-stone-400 dark:hover:fill-green-400" />
					</Link>
				)}
				{member.website && (
					<Link href={member.website} target="_blank" aria-label={`${member.name}'s website`}>
						<GlobeAmericasIcon className="h-5 w-5 text-stone-500 transition-colors hover:text-green-600 dark:text-stone-400 dark:hover:text-green-400" />
					</Link>
				)}
			</div>
		</div>
	);
}

export default function AboutPage() {
	return (
		<div className="flex w-full flex-col items-center">
			<JsonLd data={jsonLd} />

			{/* Hero */}
			<section
				className="flex w-screen bg-cover bg-fixed bg-center bg-no-repeat py-12 md:pb-20 lg:h-[50vh] lg:pt-40"
				style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/mountainWide", gravity: "south" })})` }}
			>
				<div className="container flex items-center justify-center">
					<div
						className="rounded-2xl bg-white/90 px-8 py-10 shadow-xl backdrop-blur-sm dark:bg-stone-950/90"
						data-aos="fade-down"
					>
						<h1 className="mb-4 text-center text-5xl font-bold text-green-700 dark:text-white">Our Mission</h1>
						<p className="mx-auto max-w-3xl text-center text-lg text-blue-700 dark:text-green-300">
							The Environmental Defense Initiative is an international youth-led initiative dedicated to raising
							awareness of environmental issues and providing a platform for people to take action to create
							long-lasting change.
						</p>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="w-full bg-stone-50 py-16 dark:bg-stone-900">
				<div className="container mx-auto px-4">
					<h2 className="mb-3 text-center text-3xl font-bold text-green-700 dark:text-green-400">Our Story</h2>
					<div className="mx-auto mb-8 h-1 w-12 rounded-full bg-green-600" />
					<p className="mx-auto max-w-4xl text-center text-lg text-stone-600 dark:text-stone-300">
						The Environmental Defense Initiative was founded in Hopewell Junction, New York by Emma Mazzotta. Emma has
						been passionate about environmental issues from a young age and started TEDI to further develop her passion
						in a way that can make an impact across the US.
						<br />
						<br />
						{`Through writing blogs on current issues in our environment, creating petitions to advocate for policy
						change, educating others on our social media platforms, and hosting informational webinars, we hope to
						expand TEDI's reach to thousands of people and do our part in shaping a better world for future generations
						to live in.`}
					</p>
				</div>
			</section>

			{/* Our Values */}
			<section className="w-full">
				<div
					className="relative flex min-h-[50vh] w-screen flex-col bg-cover bg-fixed bg-center bg-repeat"
					style={{ backgroundImage: `url(${getCldImageUrl({ src: "nature/waterfall" })})` }}
				>
					<div className="w-screen">
						<div className="w-screen rounded-b-2xl bg-stone-50 py-4 md:px-20 dark:bg-stone-900">
							<h2 className="mb-3 text-center text-3xl font-bold text-green-700 dark:text-green-400">Our Values</h2>
							<div className="mx-auto h-1 w-12 rounded-full bg-green-600" />
						</div>
					</div>
					<div className="container mx-auto px-4 py-16">
						<div className="grid gap-6 md:grid-cols-3">
							{values.map((value) => (
								<div key={value.title} className="rounded-xl bg-white p-8 shadow-md dark:bg-stone-800">
									<div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white shadow-md">
										{value.number}
									</div>
									<h3 className="mb-3 text-center text-xl font-bold text-blue-700 dark:text-blue-300">{value.title}</h3>
									<p className="text-center text-stone-600 dark:text-stone-300">{value.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Directors */}
			<section className="w-full bg-white py-16 dark:bg-stone-900">
				<div className="container mx-auto px-4">
					<h2 className="mb-3 text-center text-3xl font-bold text-green-700 dark:text-green-400">Meet Our Directors</h2>
					<div className="mx-auto mb-10 h-1 w-16 rounded-full bg-green-500" />
					<div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{directors.map((member) => (
							<MemberCard key={member.name} member={member} />
						))}
					</div>

					<h2 className="mb-3 text-center text-3xl font-bold text-green-700 dark:text-green-400" data-aos="fade-in">
						Meet Our Team
					</h2>
					<div className="mx-auto mb-10 h-1 w-16 rounded-full bg-green-500" data-aos="fade-in" />
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{team.map((member) => (
							<MemberCard key={member.name} member={member} />
						))}
					</div>
				</div>
			</section>

			{/* Partnerships */}
			<section className="w-full bg-stone-50 py-16 dark:bg-stone-900">
				<div className="container mx-auto px-4">
					<h2 className="mb-3 text-center text-4xl font-bold text-green-700 dark:text-green-400">Partnerships</h2>
					<div className="mx-auto mb-6 h-1 w-12 rounded-full bg-green-600" />
					<p className="mx-auto mb-8 max-w-3xl text-center text-lg text-stone-600 dark:text-stone-300">
						Thank you to all of our partners for working with us to achieve sustainable, long-lasting change. Learn more
						about these partnerships by following us on Instagram.
					</p>
					<div className="flex justify-center">
						<Link
							className="inline-flex h-10 items-center justify-center rounded-md border-2 border-green-600 bg-green-600 px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-green-600 dark:hover:bg-transparent"
							href="https://instagram.com/environmentaldefenseinitiative/"
						>
							Follow Us
						</Link>
					</div>

					<div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-12" data-aos="fade-in">
						<div className="flex flex-col items-center gap-2">
							<CloudinaryClientWrapper
								src="partners/plantachange"
								alt="Logo of Plant A Change"
								width={120}
								height={120}
								className="rounded-full"
							/>
							<span className="text-center text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-400">
								PLANT A CHANGE
							</span>
						</div>
						<div className="flex flex-col items-center gap-2">
							<CloudinaryClientWrapper
								src="partners/plastic2brick"
								alt="Logo of Plastic 2 Brick"
								width={120}
								height={120}
								className="rounded-full"
							/>
							<span className="text-center text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-400">
								PLASTIC 2 BRICK
							</span>
						</div>
					</div>

					<div className="mx-auto mt-10 h-px max-w-md bg-stone-200 dark:bg-stone-700" />

					<div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
						<blockquote
							className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-800"
							data-aos="fade-right"
						>
							<p className="mb-4 text-stone-600 dark:text-stone-300">
								&quot;Collaborating with your team on our project has been an{" "}
								<span className="font-semibold text-green-600">exceptional</span> experience. Your{" "}
								<span className="font-semibold text-green-600">dedication, creativity, and professionalism</span> were
								evident in every phase of our partnership. The insights and solutions you provided{" "}
								<span className="font-semibold text-green-600">significantly</span> enhanced our project, and the{" "}
								<span className="font-semibold text-green-600">seamless collaboration</span> process made it all the
								more enjoyable.&quot;
							</p>
							<footer className="text-sm font-semibold text-blue-600 dark:text-blue-400">— Plant A Change</footer>
						</blockquote>
						<blockquote
							className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-800"
							data-aos="fade-left"
						>
							<p className="mb-4 text-stone-600 dark:text-stone-300">
								&quot;Collaborating with the Environmental Defense Initiative on{" "}
								<span className="font-semibold text-green-600">inspiring</span> reels and a microplastic pollution
								petition was an experience nothing short of{" "}
								<span className="font-semibold text-green-600">amazing</span>. Their unwavering dedication to{" "}
								<span className="font-semibold text-green-600">protecting our planet</span> and educating the community
								on sustainable practices is truly commendable. We&apos;re proud to stand alongside such a{" "}
								<span className="font-semibold text-green-600">passionate and impactful</span> organization in our
								shared mission to make the world a greener place.&quot;
							</p>
							<footer className="text-sm font-semibold text-blue-600 dark:text-blue-400">— Plastic 2 Brick</footer>
						</blockquote>
					</div>
				</div>
			</section>
		</div>
	);
}
