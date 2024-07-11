export default function Header() {
	return (
		<header className="w-full bg-white shadow-md">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<div className="flex items-center space-x-2">
					<img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
					<h1 className="text-xl font-bold text-green-700">The Environmental Defense Initiative</h1>
				</div>
				<nav className="flex space-x-4 text-lg">
					<a href="#" className="text-blue-700">
						Home
					</a>
					<a href="#" className="text-blue-700">
						About
					</a>
					<a href="#" className="text-blue-700">
						Our Work
					</a>
					<a href="#" className="text-blue-700">
						Blog
					</a>
					<a href="#" className="text-blue-700">
						Petitions
					</a>
					<a href="#" className="text-blue-700">
						Join Us
					</a>
				</nav>
			</div>
		</header>
	);
}
