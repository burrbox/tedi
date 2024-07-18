import "@/app/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";
import RootLayoutClient from "./layoutClient";
import { Analytics } from "@vercel/analytics/react";
import { env } from "@/env";

export const metadata: Metadata = {
	title: "The Environmental Defense Initiative",
	description: "We defend the environment.",
	icons: [
		{ rel: "icon", url: `https://res.cloudinary.com/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/logo.png` },
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body>
				<TRPCReactProvider>
					<RootLayoutClient>{children}</RootLayoutClient>
				</TRPCReactProvider>
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}
