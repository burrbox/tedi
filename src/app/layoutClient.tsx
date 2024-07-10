"use client";

import { SessionProvider } from "next-auth/react";

// import Header from "@/components/ui/header";
// import Footer from "@/components/ui/footer";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<div className="flex min-h-screen flex-col overflow-hidden">
				{/* <Header /> */}
				<main className="grow">{children}</main>
				{/* <Footer /> */}
			</div>
		</SessionProvider>
	);
}
