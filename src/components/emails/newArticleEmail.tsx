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
	type TailwindProps,
	Tailwind,
	Link,
	Markdown,
} from "@react-email/components";
import tailwindConfig from "tailwind.config";
import { env } from "@/env";
import { getCldImageUrl } from "next-cloudinary";
import { type Prisma } from "@prisma/client";

export default function newArticleEmail({
	post = {
		id: "",
		slug: "environment-disappear",
		title: "The Environment is Going to Disappear!",
		summary: "oh no!",
		content:
			'# The Environment is Going to Disappear! (real)\n\nThis will be really bad\n\n\n---\n\nso scary\n\n# <div class="text-center">...</div>\n## How to fix it?\n\n**Give us money**\n\n*Lots* of money\n\nThanks!\n\n![rainbow-hiro](https://res.cloudinary.com/mozzarella-tedi/image/upload/v1720859865/oli7yzqjsh6ejbcnpohm.webp)',
		image: "https://res.cloudinary.com/mozzarella-tedi/image/upload/v1720859865/oli7yzqjsh6ejbcnpohm.webp",
		createdAt: new Date("2024-07-13T08:37:49.202Z"),
		updatedAt: new Date("2024-07-13T08:37:49.202Z"),
		author: "nash pillai",
	},
}: {
	post: Prisma.PostGetPayload<null>;
}) {
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
						<Heading className="mt-8 text-center text-2xl font-normal text-black">{post.title}</Heading>
						<Img src={getCldImageUrl({ src: post.image })} height="200" className="m-auto block" />
						<Markdown>{post.content}</Markdown>

						<Section style={{ marginBottom: "32px", marginTop: "32px", textAlign: "center" }}>
							<Button
								className="rounded bg-black px-6 py-3 text-xs font-semibold text-white"
								href={`${env.URL}/blog/${post.slug}`}>
								Check it out
							</Button>
						</Section>
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
