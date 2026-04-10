import { JsonLd } from "@/components/jsonLd";
import { env } from "@/env";
import { type Metadata } from "next";
import { getCldImageUrl } from "next-cloudinary";
import type { WebSite, WithContext } from "schema-dts";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactStats } from "@/components/home/impact-stats";
import { MissionSection } from "@/components/home/mission-section";
import { InitiativesSection } from "@/components/home/initiatives-section";
import { FounderSection } from "@/components/home/founder-section";
import { CampaignSection } from "@/components/home/campaign-section";
import { ExpertInterviewsSection } from "@/components/home/expert-interviews-section";
import { GlobeSection } from "@/components/home/globe-section";
import { CTASection } from "@/components/home/cta-section";
import Carousel from "@/components/carousel";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to The Environmental Defense Initiative.",
	keywords: ["environment", "climate", "sustainability", "advocacy"],
	alternates: { canonical: env.URL },
	openGraph: {
		type: "website",
		siteName: "The Environmental Defense Initiative",
		url: env.URL,
		title: "Home - TEDI",
		description: "Welcome to The Environmental Defense Initiative.",
	},
};

const jsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "The Environmental Defense Initiative",
	alternateName: ["TEDI"],
	url: env.URL,
	potentialAction: [
		{ "@type": "JoinAction", target: { "@type": "EntryPoint", urlTemplate: `${env.URL}/join` } },
	],
	sourceOrganization: {
		"@type": "Organization",
		name: "The Environmental Defense Initiative",
		url: env.URL,
		logo: getCldImageUrl({ src: "logo" }),
		foundingDate: "2023",
		founders: [{ "@type": "Person", name: "Emma Mazzotta" }],
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "8457979011",
			email: "environmentaldefenseinitiative@gmail.com",
		},
		sameAs: [
			"https://www.linkedin.com/company/the-environmental-defense-initiative/posts",
			"https://www.instagram.com/environmentaldefenseinitiative/",
			"https://www.youtube.com/@EnvironmentalDefenseInitiative",
			"https://twitter.com/TEDIactivism",
			"https://www.tiktok.com/@tedi_youth",
			"https://medium.com/@environmentaldefenseinitiative",
		],
	},
};

export default function Home() {
	return (
		<div className="flex min-h-dvh flex-col">
			<JsonLd data={jsonLd} />
			<HeroSection />
			<ImpactStats />
			<MissionSection />
			<InitiativesSection />
			<FounderSection />
			<CampaignSection />
			<ExpertInterviewsSection />
			<GlobeSection />
			<Carousel />
			<CTASection />
		</div>
	);
}
