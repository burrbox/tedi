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
	return (
		<Tailwind config={tailwindConfig as TailwindProps["config"]}>
			<Html>
				<Head />
				<Preview>TEDI Sign In Email</Preview>
				<Section className="m-auto bg-white font-sans">
					<Container className="mx-auto mt-10 w-[465px] rounded border border-gray-200 p-5">
						<Section className="mt-8">
							<Img
								src={getCldImageUrl({ src: "logo" })}
								width="40"
								height="37"
								alt="The Environmental Defense Initiative Logo"
								className="m-auto mt-0 block"
							/>
						</Section>
						<Heading className="mt-8 text-center text-2xl font-normal text-black">Welcome to TEDI!</Heading>
						<Text className="text-sm leading-6 text-black">Hello,</Text>
						<Text className="text-sm leading-6 text-black">Sign in to your account to get started!</Text>
						<Section className="my-8 text-center">
							<Button className="rounded bg-black px-6 py-3 text-xs font-semibold text-white" href={url}>
								Sign In
							</Button>
						</Section>
						<Text className="text-sm leading-6 text-black">
							or copy and paste this URL into your browser:{" "}
							<Link href={url} className="text-[#3182ce]">
								{url}
							</Link>
						</Text>
						<Hr className="mt-6 w-full border border-gray-200" />
						<Text className="text-xs text-gray-500">
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
