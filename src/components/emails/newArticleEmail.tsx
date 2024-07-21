import { Button } from "@react-email/button";
import { Head } from "@react-email/head";
import { Img } from "@react-email/img";
import { Section } from "@react-email/section";
import { Html } from "@react-email/html";
import { Hr } from "@react-email/hr";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Preview } from "@react-email/preview";
import type { TailwindProps } from "@react-email/tailwind";
import { Tailwind } from "@react-email/tailwind";
import tailwindConfig from "tailwind.config";
import { Link } from "@react-email/link";
import { env } from "@/env";
import { getCldImageUrl } from "next-cloudinary";
import { type Prisma } from "@prisma/client";

export default function newArticleEmail({
	post = {
		id: "",
		slug: "enviornment-disappear",
		title: "The Enviornment is Going to Disappear!",
		summary: "oh no!",
		content:
			'# The Enviornment is Going to Disappear! (real)\n\nThis will be really bad\n\n\n---\n\nso scary\n\n# <div class="text-center">...</div>\n## How to fix it?\n\n**Give us money**\n\n*Lots* of money\n\nThanks!\n\n![rainbow-hiro](https://res.cloudinary.com/mozzarella-tedi/image/upload/v1720859865/oli7yzqjsh6ejbcnpohm.webp)',
		image: "https://res.cloudinary.com/mozzarella-tedi/image/upload/v1720859865/oli7yzqjsh6ejbcnpohm.webp",
		createdAt: new Date("2024-07-13T08:37:49.202Z"),
		updatedAt: new Date("2024-07-13T08:37:49.202Z"),
		author: "nash pillai",
	},
}: {
	post: Prisma.PostGetPayload<null>;
}) {
	const containerStyles = {
		margin: "0 auto",
		marginTop: "auto",
		marginBottom: "auto",
		backgroundColor: "#fff",
		fontFamily: "sans-serif",
	};

	const innerContainerStyles = {
		margin: "0 auto",
		marginTop: "40px",
		width: "465px",
		borderRadius: "4px",
		border: "1px solid #eaeaea",
		padding: "20px",
	};

	const logoStyles = {
		display: "block",
		margin: "0 auto",
		marginTop: "0",
	};

	const headingStyles = {
		marginTop: "30px",
		textAlign: "center",
		fontSize: "24px",
		fontWeight: "normal",
		color: "#000",
	} as const;

	const textStyles = {
		fontSize: "14px",
		lineHeight: "24px",
		color: "#000",
	};

	const buttonStyles = {
		padding: "12px",
		paddingLeft: "24px",
		paddingRight: "24px",
		paddingTop: "12px",
		paddingBottom: "12px",

		borderRadius: "4px",
		backgroundColor: "#000000",
		fontSize: "12px",
		fontWeight: "600",
		color: "#fff",
		textDecoration: "none",
	};
	const hrStyles = {
		marginTop: "26px",
		width: "100%",
		border: "1px solid #eaeaea",
	};

	const additionalTextStyles = {
		fontSize: "12px",
		color: "#666666",
	};

	const linkStyles = {
		color: "#3182ce",
	};

	return (
		<Tailwind config={tailwindConfig as TailwindProps["config"]}>
			<Html>
				<Head />
				<Preview>TEDI Sign In Email</Preview>
				<Section style={containerStyles}>
					<Container style={innerContainerStyles}>
						<Section style={{ marginTop: "32px" }}>
							<Img
								src={getCldImageUrl({ src: "logo" })}
								width="40"
								height="37"
								alt="The Environmental Defense Initiative Logo"
								style={logoStyles}
							/>
						</Section>
						<Heading style={headingStyles}>{post.title}</Heading>
						<Img src={getCldImageUrl({ src: post.image })} height="200" className="m-auto block" />
						<Text style={textStyles}>{post.content}</Text>
						<Section style={{ marginBottom: "32px", marginTop: "32px", textAlign: "center" }}>
							<Button style={{ ...buttonStyles, padding: "12px" }} href={`${env.URL}/blog/${post.slug}`}>
								Check it out
							</Button>
						</Section>
						<Hr style={hrStyles} />
						<Text style={additionalTextStyles}>
							If you ever need assistance, please contact us at{" "}
							<Link className="text-[#3182ce]" href={`${env.URL}/`}>
								tedinitiative.org/
							</Link>
							.
						</Text>
					</Container>
				</Section>
			</Html>
		</Tailwind>
	);
}
