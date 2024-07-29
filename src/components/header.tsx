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
import { stripeDonation } from "@/lib/serverActions";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Package2 } from "lucide-react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const links = [
	// { name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Our Work", href: "/our-work" },
	{ name: "Blog", href: "/blog" },
	{ name: "Petitions", href: "/petitions" },
	// { name: "Join Us", href: "/join" },
];

export default function Header() {
	const { data: session, update: updateSession } = useSession();

	const path = usePathname();

	return (
		<header className="fixed z-30 w-full bg-white shadow-md dark:bg-stone-950">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<Sheet>
					<SheetTrigger asChild>
						<Button size="icon" variant="outline" className="mx-5 sm:hidden">
							<Bars3Icon className="h-5 w-5" />
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="sm:max-w-xs">
						<nav className="grid gap-6 text-lg font-medium">
							<Link
								href="/"
								className="bg-primary group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-gray-200 md:text-base">
								<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
								<span>Home</span>
							</Link>
							{links.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className={`${link.href === path ? "text-gray-900 dark:text-gray-200" : "text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"} flex items-center gap-4 px-2.5`}>
									{link.name}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
				<Link href="/" className="flex items-center space-x-2">
					<CldImage width="40" height="40" src="logo" alt="Logo" className="h-10 w-10" />
					<h1 className="hidden text-xl font-bold text-green-700 sm:block dark:text-blue-400">
						The Environmental Defense Initiative
					</h1>
				</Link>
				<nav className="flex items-center space-x-1 text-lg md:space-x-6">
					{links.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`hidden rounded-md px-2 py-1 hover:bg-gray-200 sm:block dark:hover:bg-gray-800 ${
								link.href === path ? "text-green-700 dark:text-green-300" : "text-blue-700 dark:text-blue-400"
							}`}>
							{link.name}
						</Link>
					))}
					{/*<button
						className="group inline-flex items-center justify-center rounded bg-green-500 px-2 py-1 leading-snug shadow-sm sm:px-4 sm:py-2 md:w-max dark:bg-green-700"
						onClick={() => stripeDonation()}>
						<span className="whitespace-pre-wrap from-white to-slate-900/10 text-center text-lg font-medium leading-none tracking-tight text-white">
							Donate
						</span>
					</button> */}
					{session?.user ? (
						<DropdownMenu>
							<DropdownMenuTrigger>
								<div className="border-gray-700">
									<div className="flex items-center px-5">
										<div className="mr-3 flex-shrink-0">
											<Image
												className="h-10 w-10 rounded-full"
												src={session.user.image ?? "https://res.cloudinary.com/mozzarella-tedi/image/upload/utter.png"}
												width={40}
												height={40}
												alt=""
											/>
										</div>
										<div className="hidden xl:block">
											<div className="text-base font-medium text-gray-800 dark:text-white">{session.user.name}</div>
											<div className="text-sm font-medium text-gray-600 dark:text-gray-300">{session.user.email}</div>
										</div>
									</div>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								{/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
								{/* <DropdownMenuSeparator /> */}
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>
									<button onClick={() => signOut().then(() => updateSession())}>Sign Out</button>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Link
							className="group inline-flex items-center justify-center rounded bg-blue-700 px-2 py-1 leading-snug shadow-sm sm:px-4 sm:py-2 md:w-max"
							href={`/signin?redirect=${path}`}>
							{/* <ShimmerButton className="shadow-2xl" background="#4F46E5"> */}
							<span className="whitespace-pre-wrap from-white to-slate-900/10 text-center text-lg font-medium leading-none tracking-tight text-white">
								Sign In
							</span>
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
}
