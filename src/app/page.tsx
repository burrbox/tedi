export default async function Home() {
	return (
		<div
			className="relative flex h-dvh w-full items-end"
			style={{
				backgroundImage:
					"url(https://static.wixstatic.com/media/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg/v1/fill/w_1587,h_934,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
			}}>
			<div className="xs:mt-32 absolute inset-0 mx-auto w-fit md:mt-32 lg:mt-60" data-aos="fade-down">
				<span className="mt-6 flex flex-col place-items-center rounded-xl bg-white opacity-90">
					<h1 className="m-8 text-wrap text-center text-6xl font-semibold text-blue-600">Save Our Environment</h1>
					<h2 className="text-wrap py-6 text-center text-3xl text-blue-600">
						Join our initiative.
						<br />
						Help us fight for a cleaner world!
					</h2>
					<span className="justify-center">
						<button className="my-6 rounded-xl border-2 border-green-600 bg-green-600 bg-opacity-100 px-10 py-2 text-white text-opacity-100 duration-300 hover:bg-white hover:text-green-600">
							Join Us
						</button>
					</span>
				</span>
			</div>
			<div className="container mx-auto flex flex-row justify-center sm:flex-wrap md:flex-wrap lg:flex-nowrap">
				<span className="py-auto h-fit flex-row bg-green-800 px-4 opacity-80 sm:w-1/3 md:w-1/3 lg:w-1/5">
					<h1 className="mt-3 text-3xl text-white text-opacity-100">About</h1>
					<h2 className="mt-auto text-wrap py-4 text-xl text-white text-opacity-100">
						{"Learn about TEDI's mission and meet our team."}
					</h2>
					<div className="flex items-center justify-center pb-8">
						<button className="rounded-xl border-2 border-green-600 bg-white px-4 py-2 text-center text-green-600 text-opacity-100 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							View More
						</button>
					</div>
				</span>
				<span className="py-auto h-fit flex-row bg-lime-800 px-4 opacity-80 sm:w-1/3 md:w-1/3 lg:w-1/5">
					<h1 className="mt-3 text-3xl text-white text-opacity-100">Blog</h1>
					<h2 className="mt-auto text-wrap py-4 text-xl text-white text-opacity-100">
						Read about the latest issues in our environment.
					</h2>
					<div className="flex items-center justify-center pb-8">
						<button className="rounded-xl border-2 border-green-600 bg-white px-4 py-2 text-center text-green-600 text-opacity-100 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							View More
						</button>
					</div>
				</span>
				<span className="py-auto h-fit flex-row bg-green-800 px-4 opacity-80 sm:w-1/3 md:w-1/3 lg:w-1/5">
					<h1 className="mt-3 text-3xl text-white text-opacity-100">Petitions</h1>
					<h2 className="mt-auto text-wrap py-4 text-xl text-white text-opacity-100">
						Sign a petition to advocate for new policies.
					</h2>
					<div className="flex items-center justify-center pb-8">
						<button className="rounded-xl border-2 border-green-600 bg-white px-4 py-2 text-center text-green-600 text-opacity-100 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							View More
						</button>
					</div>
				</span>
				<span className="py-auto h-fit flex-row bg-lime-800 px-4 opacity-80 sm:w-1/3 md:w-1/3 lg:w-1/5">
					<h1 className="mt-3 text-3xl text-white text-opacity-100">Our Work</h1>
					<h2 className="mt-auto text-wrap py-4 text-xl text-white text-opacity-100">
						Learn about our upcoming campaigns and events.
					</h2>
					<div className="flex items-center justify-center pb-8">
						<button className="rounded-xl border-2 border-green-600 bg-white px-4 py-2 text-center text-green-600 text-opacity-100 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							View More
						</button>
					</div>
				</span>
				<span className="py-auto h-fit flex-row bg-green-800 px-4 opacity-80 sm:w-1/3 md:w-1/3 lg:w-1/5">
					<h1 className="mt-3 text-3xl text-white text-opacity-100">Join Us</h1>
					<h2 className="mt-auto text-wrap py-4 text-xl text-white text-opacity-100">
						Become a member or join our team.
					</h2>
					<div className="flex items-center justify-center pb-8">
						<button className="rounded-xl border-2 border-green-600 bg-white px-4 py-2 text-center text-green-600 text-opacity-100 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							View More
						</button>
					</div>
				</span>
			</div>
		</div>
	);
}
