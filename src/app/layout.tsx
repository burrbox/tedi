import "@/app/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";
import RootLayoutClient from "./layoutClient";

export const metadata: Metadata = {
	title: "The Environmental Defense Initiative",
	description: "We defend the environment.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body>
				<TRPCReactProvider>
					<RootLayoutClient>{children}</RootLayoutClient>
				</TRPCReactProvider>
				<Toaster />
			</body>
		</html>
	);
}
