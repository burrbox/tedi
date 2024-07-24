import {
	Button,
	Head,
	Img,
	Section,
	Html,
	Hr,
	Container,
	Heading,
	Text,
	Preview,
	Tailwind,
	type TailwindProps,
	Link,
} from "@react-email/components";
import tailwindConfig from "tailwind.config";
import { getCldImageUrl } from "next-cloudinary";

export default function SignInEmail({ url = "https://tedi.vercel.app/" }) {
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
						<Heading style={headingStyles}>Welcome to TEDI!</Heading>
						<Text style={textStyles}>Hello,</Text>
						<Text style={textStyles}>Sign in to your account to get started!</Text>
						<Section style={{ marginBottom: "32px", marginTop: "32px", textAlign: "center" }}>
							<Button style={{ ...buttonStyles, padding: "12px" }} href={url}>
								Sign In
							</Button>
						</Section>
						<Text style={textStyles}>
							or copy and paste this URL into your browser:{" "}
							<Link href={url} style={linkStyles}>
								{url}
							</Link>
						</Text>
						<Hr style={hrStyles} />
						<Text style={additionalTextStyles}>
							If you ever need assistance, please contact us at{" "}
							<Link className="text-[#3182ce]" href={`mailto:environmentaldefenseinitiative@gmail.com `}>
								environmentaldefenseinitiative@gmail.com
							</Link>
							.
						</Text>
					</Container>
				</Section>
			</Html>
		</Tailwind>
	);
}
