"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Our Work", href: "/our-work" },
	{ name: "Blog", href: "/blog" },
	{ name: "Petitions", href: "/petitions" },
	{ name: "Join Us", href: "/join" },
];

export default function Header() {
	const { data: session, status } = useSession();

	const path = usePathname();

	return (
		<header className="fixed z-30 w-full bg-white shadow-md">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<div className="flex items-center space-x-2">
					<img
						src="https://static.wixstatic.com/media/288dd2_e7cbe6ecdfa74a6285cd5ddb921ce497~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/288dd2_e7cbe6ecdfa74a6285cd5ddb921ce497~mv2.png"
						alt="Logo"
						className="h-10 w-10"
					/>
					<h1 className="text-xl font-bold text-green-700">The Environmental Defense Initiative</h1>
				</div>
				<nav className="flex space-x-8 text-lg">
					{links.map((link) => (
						<a key={link.name} href={link.href} className={link.href === path ? "text-green-700" : "text-blue-700"}>
							{link.name}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
