import Link from "next/link";

export default function PostLink({ href, ...props }: { href?: string; children?: React.ReactNode }) {
	return (
		<Link href={href ?? "/"} {...props}>
			{props.children}
		</Link>
	);
}
