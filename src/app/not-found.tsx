import Link from "next/link";

export const metadata = {
	title: "Page Not Found | TEDI",
	description: "Have any questions about TEDI? We'd love to chat!",
};

export default function NotFound() {
	return (
		<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
			<div className="pb-12 pt-32 md:pb-20 md:pt-40">
				<div className="lg:flex lg:space-x-20">
					<div className="mb-12 flex grow flex-col items-center lg:mb-0 lg:mt-20 lg:items-start">
						<h1 className="h2 mb-8 text-center lg:text-left">Page Not Found</h1>
						<p>{"This page doesn't seem to exist. Perhaps you mistyped the URL?"}</p>
					</div>
					<div className="relative mx-auto w-full max-w-md">
						<div
							className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent opacity-40 dark:to-slate-800"
							aria-hidden="true"
						/>
						<div className="p-6 md:p-8">
							<div className="mb-3 text-xl font-bold">Back to the site!</div>
							<p className="mb-6 dark:text-slate-300">
								Maybe check out our blog? There are some very cool articles there!
								<br />
							</p>
							<Link
								href="/blog"
								className="btn-sm group w-full bg-indigo-500 text-sm text-white shadow-sm hover:bg-indigo-600"
								type="submit">
								Read a blog
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
