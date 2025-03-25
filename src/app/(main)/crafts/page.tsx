import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export default function SustainableCraftsPage() {
	return (
		<div className="min-h-screen bg-white text-gray-800 transition-colors duration-300 dark:bg-black dark:text-white">
			{/* Hero Section */}
			<section className="relative flex items-center bg-white px-4 py-16 transition-colors duration-300 md:px-8 dark:bg-black">
				<div className="container mx-auto grid items-center gap-8 md:grid-cols-2">
					<div className="space-y-4" data-aos="fade-right">
						<h1 className="text-4xl font-bold leading-tight text-green-600 transition-colors duration-300 md:text-5xl dark:text-white">
							Host Your Own
							<br />
							Youth Sustainable
							<br />
							Crafts Campaign
						</h1>
						<p className="max-w-lg text-gray-700 transition-colors duration-300 dark:text-green-400">
							Happy Early Valentine&apos;s Day! We hope you are enjoying your 2nd semester so far! TEDI is working on
							hosting a crafts workshop this February to educate youth on the importance of sustainability.
						</p>
						<div className="flex flex-wrap gap-4 pt-4">
							<Link
								href="#how-to-host"
								className="rounded-md bg-green-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-green-600"
							>
								Get Started
							</Link>
							<Link
								href="#ideas"
								className="rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-blue-600"
							>
								Craft Ideas
							</Link>
						</div>
					</div>
					<div className="relative h-64 overflow-hidden rounded-xl shadow-lg md:h-80 lg:h-96" data-aos="fade-left">
						<Image
							src={getCldImageUrl({ src: "nature/mountainWide", gravity: "south" })}
							alt="Children engaged in sustainable crafts"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			{/* How to Host Section */}
			<section
				id="how-to-host"
				className="bg-gray-50 px-4 py-16 transition-colors duration-300 md:px-8 dark:bg-zinc-900"
			>
				<div className="container mx-auto mb-12 text-center" data-aos="fade-up">
					<h2 className="mb-4 text-3xl font-bold text-blue-600 transition-colors duration-300 md:text-4xl dark:text-blue-400">
						How to Host Your Own Workshop
					</h2>
					<p className="mx-auto max-w-2xl text-gray-600 transition-colors duration-300 dark:text-gray-300">
						Continue reading to figure out how YOU could host one yourself and double the impact!
					</p>
				</div>

				<div className="container mx-auto">
					<div
						className="mb-8 rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 md:p-8 dark:bg-zinc-800"
						data-aos="zoom-in"
					>
						<h3 className="mb-4 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white">
							THE 5WH
						</h3>

						<div className="space-y-6">
							<div data-aos="fade-up" data-aos-delay="100">
								<h4 className="text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
									What
								</h4>
								<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
									Depends on you! If you don&apos;t have a clear idea for now, don&apos;t worry! We have some you could
									look through if you scroll down. If you can&apos;t settle on one idea, why not have multiple ideas?
									Create different stations, so the kids can choose whatever they like best!
								</p>
							</div>

							<div data-aos="fade-up" data-aos-delay="150">
								<h4 className="text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
									Who
								</h4>
								<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
									Target audience? Children? Families? Teens?
								</p>
							</div>

							<div data-aos="fade-up" data-aos-delay="200">
								<h4 className="text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
									Why
								</h4>
								<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
									To appreciate mother nature and host a fun workshop that kids can socialize and embrace their
									creativity with.
								</p>
								<p className="mt-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
									Why would families go to your workshop on a cold winter snow day, rather than stay at home? Could this
									potentially ease parent&apos;s stress with looking after their children with our adult volunteers?
								</p>
							</div>

							<div data-aos="fade-up" data-aos-delay="250">
								<h4 className="text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
									When
								</h4>
								<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
									Sometime in February would be the most ideal. Think about weekends vs weekdays, would kids want to go
									better afterschool or during the weekends, when would they better prefer the date to be on?
								</p>
							</div>

							<div data-aos="fade-up" data-aos-delay="300">
								<h4 className="text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
									Where
								</h4>
								<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
									You would probably want to choose to locate the workshop in the most accessible area, where people
									could take the transit or it&apos;s easy to access for those who have disabilities. Think of where
									children and families gather in their spare time. For example, local churches, winter break
									volunteering or camps, around the school, etc.
								</p>
							</div>

							<div data-aos="fade-up" data-aos-delay="350">
								<h4 className="text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
									How
								</h4>
								<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
									Questions to consider: do you have permission to host the workshop in that location, have you asked or
									booked? How are you going to send out invitations, any marketing strategies? How many craft
									instructions are you preparing? How many people could be there maximally? How would you buy the craft
									materials, through etsy, dollarama or Michaels? How many adult volunteers would be there to help
									supervise the children? How would you get them to participate actively, is there an incentive (snacks,
									prizes, etc)? How are you going to set up the whole event by yourself, are you going to host it with
									another organization? Is this a more intimate and less people workshop or is there more people? How to
									make people feel the most comfortable, do we want music playing in the background? How much is your
									budget, how many materials and supplies can you prepare? Do we want marshmallows perhaps as snacks?
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Example Section */}
			<section className="bg-white px-4 py-16 transition-colors duration-300 md:px-8 dark:bg-black">
				<div className="container mx-auto">
					<div className="grid items-center gap-8 md:grid-cols-2">
						<div data-aos="fade-right">
							<h2 className="mb-6 text-3xl font-bold text-blue-600 transition-colors duration-300 md:text-4xl dark:text-blue-400">
								An Example Workshop
							</h2>
							<div className="space-y-4 rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
											Location
										</h4>
										<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">TBD</p>
									</div>
									<div>
										<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
											Theme
										</h4>
										<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
											Youth sustainability crafts workshop
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
											Who
										</h4>
										<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
											Targeted towards Elementary school children and anyone can join!
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
											When
										</h4>
										<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
											Ex: February 10th, Monday, 2025 (4pm)
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
											Where
										</h4>
										<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">Toronto, ON</p>
									</div>
									<div>
										<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
											What
										</h4>
										<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
											Sustainable multi media art (scrapbooking on environmental impacts) and craft or drawings
										</p>
									</div>
								</div>

								<div className="pt-2">
									<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
										Collaborated Organization
									</h4>
									<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
										This could be a fundraising event where participants could do a &quot;pay whatever you want&quot;
										system and all the money will go to charity or TEDI
									</p>

									<p className="mt-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
										Prepare something that is lighter for the kids, the workshop could be educational, but we want it to
										be fun and engaging to the kids
									</p>
								</div>

								<div>
									<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
										How
									</h4>
									<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
										Buy supplies and print out craft instruction papers
									</p>
								</div>

								<div>
									<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
										Marketing strategy
									</h4>
									<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
										Social media and private emailing
									</p>
								</div>

								<div>
									<h4 className="font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
										Ideas
									</h4>
									<p className="text-gray-700 transition-colors duration-300 dark:text-gray-300">
										Environmental kahoot, music, holiday snack boards, offer free snacks! (bring what you can)
									</p>
								</div>
							</div>
						</div>
						<div className="relative h-64 overflow-hidden rounded-xl shadow-lg md:h-96" data-aos="fade-left">
							<Image
								src={getCldImageUrl({ src: "nature/mountainWide", gravity: "south" })}
								alt="Children doing sustainable crafts"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Craft Ideas Section */}
			<section id="ideas" className="bg-gray-50 px-4 py-16 transition-colors duration-300 md:px-8 dark:bg-zinc-900">
				<div className="container mx-auto">
					<h2
						className="mb-8 text-center text-3xl font-bold text-blue-600 transition-colors duration-300 md:text-4xl dark:text-blue-400"
						data-aos="fade-up"
					>
						Craft Ideas
					</h2>

					<h3
						className="mb-6 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white"
						data-aos="fade-up"
					>
						Christmas Ideas
					</h3>
					<div className="mb-12 grid gap-6 md:grid-cols-3">
						<div
							className="h-full rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<h4 className="mb-3 text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
								1) Create a Christmas Tree
							</h4>

							<div className="mb-4">
								<h5 className="mb-2 font-medium text-gray-800 transition-colors duration-300 dark:text-white">
									Materials:
								</h5>
								<ul className="list-inside list-disc space-y-1 text-gray-700 transition-colors duration-300 dark:text-gray-300">
									<li>Fallen thick tree branches</li>
									<li>Christmas lights</li>
									<li>Hot glue</li>
								</ul>
							</div>

							<div>
								<h5 className="mb-2 font-medium text-gray-800 transition-colors duration-300 dark:text-white">
									Instructions:
								</h5>
								<p className="mb-2 italic text-gray-700 transition-colors duration-300 dark:text-gray-300">
									If your space isn&apos;t rented, try out this idea:
								</p>
								<ol className="list-inside list-decimal space-y-1 text-gray-700 transition-colors duration-300 dark:text-gray-300">
									<li>Wash the tree branches you have found outside</li>
									<li>Arrange the tree branches from the shortest to the longest</li>
									<li>Glue the tree branches onto the wall accordingly</li>
									<li>Put on Christmas lights</li>
									<li>Hang your ornaments</li>
								</ol>
							</div>

							<a
								href="https://www.pinterest.com/pin/256353403765120729/"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 inline-block text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
							>
								View on Pinterest →
							</a>
						</div>

						<div
							className="h-full rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<h4 className="mb-3 text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
								2) Bottle Cap Snowman Ornament
							</h4>

							<div className="mb-4">
								<h5 className="mb-2 font-medium text-gray-800 transition-colors duration-300 dark:text-white">
									Materials:
								</h5>
								<ul className="list-inside list-disc space-y-1 text-gray-700 transition-colors duration-300 dark:text-gray-300">
									<li>Markers</li>
									<li>Hot glue</li>
									<li>Hangers</li>
								</ul>
							</div>

							<div>
								<h5 className="mb-2 font-medium text-gray-800 transition-colors duration-300 dark:text-white">
									Instructions:
								</h5>
								<ol className="list-inside list-decimal space-y-1 text-gray-700 transition-colors duration-300 dark:text-gray-300">
									<li>Clean your bottle caps</li>
									<li>Find 3 bottle caps that you like and color them white</li>
									<li>Draw the noses and make the snowman come to real life</li>
									<li>Glue all the bottle caps together vertically</li>
									<li>
										On the first bottle cap that&apos;s facing upwards, glue on a hanger so you could hang it on the
										christmas tree
									</li>
								</ol>
							</div>

							<a
								href="https://www.pinterest.com/pin/256353403765120733/"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 inline-block text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
							>
								View on Pinterest →
							</a>
						</div>

						<div
							className="h-full rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<h4 className="mb-3 text-xl font-semibold text-green-600 transition-colors duration-300 dark:text-green-400">
								3) Candy Ornaments
							</h4>

							<div className="mb-4">
								<h5 className="mb-2 font-medium text-gray-800 transition-colors duration-300 dark:text-white">
									Materials:
								</h5>
								<ul className="list-inside list-disc space-y-1 text-gray-700 transition-colors duration-300 dark:text-gray-300">
									<li>String</li>
									<li>Newspaper</li>
									<li>Acorn</li>
									<li>Hot glue</li>
								</ul>
							</div>

							<div>
								<h5 className="mb-2 font-medium text-gray-800 transition-colors duration-300 dark:text-white">
									Instructions:
								</h5>
								<ol className="list-inside list-decimal space-y-1 text-gray-700 transition-colors duration-300 dark:text-gray-300">
									<li>Wash the acorns</li>
									<li>Wrap the newspaper around the acorn</li>
									<li>Use glue to seal the candy ornament</li>
									<li>Use strings to tighten each sides of the ornament</li>
								</ol>
							</div>

							<a
								href="https://www.pinterest.com/pin/256353403765120736/"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 inline-block text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
							>
								View on Pinterest →
							</a>
						</div>
					</div>

					<div className="mb-12 text-center" data-aos="fade-up">
						<a
							href="https://punkmed.com/blog/eco-friendly-ornaments/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
						>
							More eco-friendly ornament ideas →
						</a>
					</div>

					<h3
						className="mb-6 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white"
						data-aos="fade-up"
					>
						Other Ideas
					</h3>
					<div className="mb-12 grid gap-6 md:grid-cols-3">
						<div
							className="rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<ul className="space-y-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Bird feeders
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Multi-media art
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Writing cards to children in hospitals (Holland Bloorview Kids Hospital in Toronto)
								</li>
							</ul>
						</div>

						<div
							className="rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<ul className="space-y-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Scrapbooking
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									For older kids: canva art or presentation (*could be pressuring for some)
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Draw their favorite animals
								</li>
							</ul>
						</div>

						<div
							className="rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<ul className="space-y-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Nature ingredient snack making (*be aware of allergies)
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Animal origami
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Valentine&apos;s Day cards to kids
								</li>
							</ul>
						</div>
					</div>

					<h3
						className="mb-6 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white"
						data-aos="fade-up"
					>
						Collaboration Ideas
					</h3>
					<div
						className="rounded-xl bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-zinc-800"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="grid gap-4 md:grid-cols-2">
							<ul className="space-y-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									School council or club
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Library
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									School library
								</li>
							</ul>

							<ul className="space-y-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Children&apos;s hospital
								</li>
								<li className="flex items-center">
									<span className="mr-2 text-green-600 transition-colors duration-300 dark:text-green-400">•</span>
									Gardens that already has a kids program (that way we don&apos;t need adult volunteers to supervise the
									younger kids)
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="bg-white px-4 py-16 transition-colors duration-300 md:px-8 dark:bg-black">
				<div className="container mx-auto text-center" data-aos="fade-up">
					<h2 className="mb-6 text-3xl font-bold text-blue-600 transition-colors duration-300 md:text-4xl dark:text-blue-400">
						Join Us in Making a Difference
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-gray-700 transition-colors duration-300 dark:text-gray-300">
						By hosting your own sustainable crafts workshop, you&apos;re helping educate the next generation about the
						importance of sustainability while creating a fun, engaging environment for creativity.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							href="/join-us"
							className="rounded-md bg-green-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-green-600"
						>
							Get Started Today
						</Link>
						<Link
							href="mailto:hello@tedinitiative.org"
							className="rounded-md bg-blue-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-600"
						>
							Contact TEDI for Support
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
