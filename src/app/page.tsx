export default async function Home() {
	return (
		<div
			className="relative h-[400px] w-full pb-8"
			style={{
				backgroundImage:
					"url(https://static.wixstatic.com/media/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg/v1/fill/w_1587,h_934,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_b21f82750bf3464da0b803cc5304b4e9f000.jpg)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
			}}>
			<div className="container absolute inset-0 mt-20 flex h-1/3 w-2/5 min-w-96 flex-col items-center justify-center rounded-3xl bg-white py-6 opacity-90">
				<div className="text-wrap text-center text-blue-600">
					<h1 className="m-8 text-6xl">Save Our Environment</h1>
					<p className="text-wrap text-xl">
						Join our initiative.
						<br />
						Help us fight for a cleaner world!
					</p>
				</div>
				<div className="flex w-96 justify-center pb-4 pt-8 text-center">
					<h2 className="btn w-36 rounded-lg border border-green-500 bg-green-500 py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-green-500">
						<a href="/join-us">Join Us</a>
					</h2>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 mx-20 flex flex-row justify-around">
				<div className="relative flex flex-col bg-green-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">About</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">{"Learn about TEDI's mission and meet our team."}</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/about">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-lime-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Blog</h1>
						<h2 className="w-3/4 text-wrap pt-4 text-white">Read about the latest issues in our environment.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/blog">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-green-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Petitions</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">Sign a petition to advocate for new policies.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/petitions">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-lime-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Our Work</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">Learn about our upcoming campaigns and events.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/our-work">View More</a>
						</span>
					</div>
				</div>
				<div className="relative flex flex-col bg-green-800 opacity-80">
					<div className="self-start px-6 py-3">
						<h1 className="text-wrap text-3xl text-white">Join Us</h1>
						<h2 className="w-3/4 text-wrap py-4 text-white">Become a member or join our team.</h2>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-center py-3">
						<span className="btn rounded-xl border-green-600 bg-white px-10 py-4 text-green-600 opacity-100 duration-300 hover:bg-green-600 hover:text-white">
							<a href="/join-us">View More</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
