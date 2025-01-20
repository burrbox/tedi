"use client";

import { SessionProvider } from "next-auth/react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { wait } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			once: true,
			disable: "phone",
			duration: 600,
			easing: "ease-out-sine",
		});
	});

	useEffect(() => {
		void wait(3000).then(() => {
			toast({
				title: "Enjoy our blogs?",
				description: "Submit your own article to be featured on our website!",
				duration: 5000,
				action: (
					<ToastAction altText="Apply">
						<Link href="https://docs.google.com/forms/d/e/1FAIpQLScPyNKW82l-B3YJypShgVB6m6WKZ4dqpyFsuzFvKhVdQPbmaA/viewform">
							Apply
						</Link>
					</ToastAction>
				),
			});
		});
	}, []);

	return (
		<SessionProvider>
			<div className="flex min-h-screen flex-col overflow-hidden dark:bg-stone-900 dark:text-gray-100">
				<Header />
				<main className="grow pt-16">{children}</main>
				<Footer />
			</div>
		</SessionProvider>
	);
}
