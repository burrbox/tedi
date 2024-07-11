export default function AboutPage() {
	return (
		<div className="flex w-full flex-col items-center p-8">
			<section className="relative h-[400px] w-full">
				<img src="/placeholder.svg" alt="Forest" className="h-full w-full object-cover" />
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
						<div className="rounded-md bg-blue-100 p-8 shadow-md">
							<img
								src="/placeholder.svg"
								alt="An image of Emma Mazzatto at the beach."
								className="mb-4 w-full rounded-md"
							/>
							<h3 className="mb-2 text-xl font-bold text-blue-700">Emma Mazzotta</h3>
							<p className="mb-2 text-blue-700">Founder & Executive Director</p>
							<p className="mb-2 text-blue-700">
								<LocateIcon className="mr-1 inline-block h-4 w-4" />
								Hopewell Junction, NY, USA
							</p>
							<p className="text-blue-700">
								From a young age, Emma has exhibited a remarkable talent for leadership and passion for protecting the
								environment. She not only coordinates and engages in clean-up projects, but conducts research on the
								ecological impacts of water pollution. She founded TEDI to build upon her passion for environmental
								advocacy and achieve long-lasting, impactful change on an international level.
							</p>
							<MailIcon className="mt-4 h-6 w-6 text-blue-700" />
						</div>
						<div className="rounded-md bg-blue-100 p-8 shadow-md">
							<img
								src="/placeholder.svg"
								alt="An image of Kailey Fitzgerald with a plant behind her head."
								className="mb-4 w-full rounded-md"
							/>
							<h3 className="mb-2 text-xl font-bold text-blue-700">Kailey Fitzgerald</h3>
							<p className="mb-2 text-blue-700">Networking Coordinator & TikTok Director</p>
							<p className="mb-2 text-blue-700">
								<LocateIcon className="mr-1 inline-block h-4 w-4" />
								Hopewell Junction, NY, USA
							</p>
							<p className="text-blue-700">
								Kailey has always seen the beauty of our world and is extremely passionate about preserving it. As a kid
								she was fascinated by nonfiction books about sea creatures and dinosaurs and would go on nature walks
								during recess at school. She joined TEDI because it allows her to use her voice, regardless of her age,
								to make a difference in this world.
							</p>
							<MailIcon className="mt-4 h-6 w-6 text-blue-700" />
						</div>
						<div className="rounded-md bg-blue-100 p-8 shadow-md">
							<img src="/placeholder.svg" alt="An image of Karen Peng." className="mb-4 w-full rounded-md" />
							<h3 className="mb-2 text-xl font-bold text-blue-700">Karen Peng</h3>
							<p className="mb-2 text-blue-700">Networking Coordinator</p>
							<p className="mb-2 text-blue-700">
								<LocateIcon className="mr-1 inline-block h-4 w-4" />
								Toronto, Ontario, Canada
							</p>
							<p className="text-blue-700">
								Karen has always been intrigued by forest ecosystems and how they sustain themselves. She is fascinated
								by environmental policy and advocating for sustainability in developing cities. She joined TEDI to
								express her passion for environmental science and to meet likeminded peers who also hope to solve
								current environmental issues.
							</p>
							<MailIcon className="mt-4 h-6 w-6 text-blue-700" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

function LocateIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<line x1="2" x2="5" y1="12" y2="12" />
			<line x1="19" x2="22" y1="12" y2="12" />
			<line x1="12" x2="12" y1="2" y2="5" />
			<line x1="12" x2="12" y1="19" y2="22" />
			<circle cx="12" cy="12" r="7" />
		</svg>
	);
}

function MailIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

function XIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
