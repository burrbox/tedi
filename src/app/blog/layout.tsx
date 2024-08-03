import { type Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Blog",
		template: "%s | TEDI Blog - The Environmental Defense Initiative",
	},
};

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return children;
}
