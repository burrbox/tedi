import { Metadata } from "next";
import { WebPage, WithContext } from "schema-dts";
import { env } from "@/env";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import profileForm from "./profileForm";
import ProfileForm from "./profileForm";

export const metadata: Metadata = {
	title: "Profile",
	description: "Sign up to join the organization or apply to become a TEDI team member!",
	keywords: [
		"environment",
		"mission",
		"values",
		"about",
		"partnerships",
		"profile",
		"climate",
		"sustainability",
		"info",
	],
	alternates: { canonical: `${env.URL}/join-us` },
	openGraph: {
		siteName: "The Environmental Defense Initiative",
		title: "Profile - TEDI",
		description: "View your profile and info.",
		url: `${env.URL}/profile`,
		type: "website",
	},
};

const jsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Join The Environmental Defense Initiative",
	description: "View your profile and info",
	url: `${env.URL}/profile`,
};

export default function Profile() {
	// const session = await auth();
	// if (!session) redirect("/signin");

	return (
		<>
			<div className="container mx-auto w-full py-16 md:py-24">
				<div className="inset-0 mx-auto w-10/12 md:w-full" data-aos="fade-down">
					<div className="flex flex-col justify-center gap-6 xl:flex-row">
						<div className="m-auto h-fit max-w-3xl rounded-xl bg-white py-8 dark:bg-stone-800">
							<ProfileForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
