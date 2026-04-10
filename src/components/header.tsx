"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { stripeDonation } from "@/lib/serverActions";

const links = [
	{ name: "About", href: "/about" },
	{ name: "Blog", href: "/blog" },
	{ name: "Petitions", href: "/petitions" },
	{ name: "Campaigns", href: "/campaigns" },
	{ name: "Join Us", href: "/join-us" },
];

export default function Header() {
	const { data: session, update: updateSession } = useSession();
	const path = usePathname();

	return (
		<header className="fixed z-30 w-full border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/95">
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				{/* Mobile menu */}
				<Sheet>
					<SheetTrigger asChild>
						<Button size="icon" variant="outline" className="sm:hidden">
							<Bars3Icon className="h-5 w-5" />
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="sm:max-w-xs">
						<nav className="grid gap-5 text-lg font-medium">
							<Link href="/" className="flex items-center gap-3">
								<CldImage width="36" height="36" src="logo" alt="TEDI Logo" className="h-9 w-9" />
								<span className="font-bold text-green-700 dark:text-blue-400">TEDI</span>
							</Link>
							{links.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className={`${
										link.href === path
											? "font-semibold text-green-700 dark:text-green-400"
											: "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
									} flex items-center gap-4 px-2`}
								>
									{link.name}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>

				{/* Logo */}
				<Link href="/" className="flex items-center gap-2">
					<CldImage width="36" height="36" src="logo" alt="TEDI Logo" className="h-9 w-9" />
					<span className="hidden font-bold text-green-700 md:block dark:text-blue-400">
						The Environmental Defense Initiative
					</span>
				</Link>

				{/* Desktop nav */}
				<nav className="flex items-center gap-1">
					{links.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`hidden rounded-md px-3 py-1.5 text-sm font-medium transition-colors sm:block ${
								link.href === path
									? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
									: "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-200"
							}`}
						>
							{link.name}
						</Link>
					))}

					<button
						className="ml-2 inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 sm:px-4"
						onClick={() => stripeDonation()}
					>
						Donate
					</button>

					{session?.user ? (
						<DropdownMenu>
							<DropdownMenuTrigger className="ml-1">
								<div className="flex items-center gap-2 rounded-full p-1 hover:bg-stone-100 dark:hover:bg-stone-800">
									<Image
										className="h-8 w-8 rounded-full object-cover ring-2 ring-stone-200 dark:ring-stone-700"
										src={session.user.image ?? "https://res.cloudinary.com/mozzarella-tedi/image/upload/utter.png"}
										width={32}
										height={32}
										alt={session.user.name ?? "User avatar"}
									/>
									<span className="hidden text-sm font-medium text-stone-700 xl:block dark:text-stone-300">
										{session.user.name}
									</span>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<Link href="/toolkit">
									<DropdownMenuItem>Toolkits</DropdownMenuItem>
								</Link>
								<button className="w-full" onClick={() => signOut().then(() => updateSession())}>
									<DropdownMenuItem>Sign Out</DropdownMenuItem>
								</button>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Link
							className="ml-1 inline-flex h-9 items-center justify-center rounded-md bg-blue-700 px-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-800 sm:px-4"
							href={`/signin?redirect=${path}`}
						>
							Sign In
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
}
