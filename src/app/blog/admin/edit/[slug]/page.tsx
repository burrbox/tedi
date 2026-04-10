"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { upsertArticle, getPost } from "@/lib/serverActions";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";
import { Check, ChevronsUpDown, ImagePlus, Save, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { fullTeam } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
	ssr: false,
	loading: () => (
		<SkeletonTheme baseColor="#1e293b" highlightColor="#3e595b">
			<Skeleton height={500} />
		</SkeletonTheme>
	),
});

const cloudinaryDarkStyles = {
	palette: {
		window: "#0f172a",
		sourceBg: "#1e293b",
		windowBorder: "#9ca3af",
		tabIcon: "#FFFFFF",
		inactiveTabIcon: "#8E9FBF",
		menuIcons: "#FFFFFF",
		link: "#08C0FF",
		action: "#336BFF",
		inProgress: "#00BFFF",
		complete: "#33ff00",
		error: "#EA2727",
		textDark: "#000000",
		textLight: "#FFFFFF",
	},
};

export default function BlogEditor({ params: { slug } }: { params: { slug: string } }) {
	const router = useRouter();

	const [content, setContent] = useState("");
	const [newSlug, setNewSlug] = useState(slug);
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [author, setAuthor] = useState("");
	const [editor, setEditor] = useState("");
	const [articleImage, setArticleImage] = useState("");
	const [isAuthorOpen, setIsAuthorOpen] = useState(false);
	const [isEditorOpen, setIsEditorOpen] = useState(false);
	const [customAuthor, setCustomAuthor] = useState("");
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		if (slug !== "new") {
			getPost(slug)
				.then((post) => {
					if (post) {
						setTitle(post.title);
						setAuthor(post.author);
						setEditor(post.editor);
						setContent(post.content);
						setSummary(post.summary);
						setArticleImage(post.image);
					}
				})
				.catch(() => null);
		}
	}, [slug]);

	async function handleSave() {
		if (!newSlug || newSlug === "new") {
			alert("Please enter a URL slug");
			return;
		}
		setIsSaving(true);
		await upsertArticle(slug, { title, content, slug: newSlug, summary, author, editor, image: articleImage });
		if (slug !== newSlug) router.push(`/blog/admin/edit/${newSlug}`);
		setIsSaving(false);
	}

	return (
		<div className="min-h-screen bg-stone-50 dark:bg-stone-950">
			{/* Sticky header bar */}
			<div className="fixed top-0 z-40 w-full border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur-sm dark:border-stone-700 dark:bg-stone-900/95">
				<div className="flex h-14 items-center gap-4 px-6">
					<h1 className="text-sm font-semibold text-stone-800 dark:text-stone-100">
						{slug === "new" ? "New Article" : "Edit Article"}
					</h1>
					<div className="flex-1" />
					{articleImage && (
						<button
							onClick={() => window.open(articleImage)}
							className="flex items-center gap-1.5 rounded-md border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800"
						>
							<ExternalLink className="h-3.5 w-3.5" />
							Preview Image
						</button>
					)}
					<CldUploadButton
						className="flex items-center gap-1.5 rounded-md border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800"
						uploadPreset="TEDI Blog"
						options={{ cropping: true, styles: cloudinaryDarkStyles }}
						onSuccess={(results) => {
							if (!results.info || typeof results.info === "string") return;
							setArticleImage(results.info.secure_url);
						}}
					>
						<ImagePlus className="h-3.5 w-3.5" />
						Cover Image
					</CldUploadButton>
					<CldUploadButton
						className="flex items-center gap-1.5 rounded-md border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800"
						uploadPreset="TEDI Blog"
						options={{ cropping: true, styles: cloudinaryDarkStyles }}
						onSuccess={(results) => {
							if (!results.info || typeof results.info === "string") return;
							const imageMd = `<figure>\n\n![${results.info.original_filename}](${results.info.secure_url})\n<figcaption>${results.info.original_filename}</figcaption></figure>`;
							setContent((prev) => prev + imageMd);
						}}
					>
						<ImagePlus className="h-3.5 w-3.5" />
						Insert Image
					</CldUploadButton>
					<button
						onClick={handleSave}
						disabled={isSaving}
						className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:opacity-60"
					>
						<Save className="h-4 w-4" />
						{isSaving ? <Loading /> : slug === "new" ? "Publish" : "Save"}
					</button>
				</div>
			</div>

			{/* Main content */}
			<div className="mx-auto max-w-5xl space-y-6 px-6 pb-12 pt-24">
				{/* Article metadata card */}
				<div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-800">
					<h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
						Article Metadata
					</h2>
					<div className="space-y-4">
						{/* Title */}
						<div>
							<label htmlFor="title" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
								Title
							</label>
							<Input
								id="title"
								type="text"
								placeholder="Article title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="text-base"
							/>
						</div>

						{/* URL slug */}
						<div>
							<label htmlFor="slug" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
								URL slug
							</label>
							<div className="flex items-center gap-2">
								<span className="text-sm text-stone-400 dark:text-stone-500">/blog/</span>
								<Input
									id="slug"
									type="text"
									value={newSlug === "new" ? "" : newSlug}
									placeholder="my-article-slug"
									onChange={(e) =>
										setNewSlug((prev) => (e.target.value.match(/^[a-z0-9-]*$/) ? e.target.value : prev))
									}
									className="flex-1"
								/>
							</div>
						</div>

						{/* Summary */}
						<div>
							<label htmlFor="summary" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
								Summary
							</label>
							<Textarea
								id="summary"
								placeholder="A short description shown in article listings and previews"
								value={summary}
								onChange={(e) => setSummary(e.target.value)}
								rows={2}
							/>
						</div>

						{/* Author + Editor row */}
						<div className="grid gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="author" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
									Author
								</label>
								<Popover open={isAuthorOpen} onOpenChange={setIsAuthorOpen}>
									<PopoverTrigger asChild>
										<Button
											id="author"
											variant="outline"
											role="combobox"
											aria-expanded={isAuthorOpen}
											className="w-full justify-between"
										>
											{author || "Select author..."}
											<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-72 p-0">
										<Command>
											<CommandInput placeholder="Search author..." />
											<CommandList>
												<CommandEmpty>No author found.</CommandEmpty>
												<CommandGroup className="max-h-72 overflow-scroll">
													<CommandItem>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																author === customAuthor.toLowerCase() ? "opacity-100" : "opacity-0",
															)}
														/>
														<div className="flex w-full items-center gap-2">
															<input
																className="flex-1 bg-inherit text-sm"
																onChange={(e) => setCustomAuthor(e.target.value)}
																placeholder="Custom author name"
																value={customAuthor}
															/>
															<Button
																size="sm"
																onClick={() => {
																	setAuthor(customAuthor.toLowerCase());
																	setIsAuthorOpen(false);
																}}
															>
																Set
															</Button>
														</div>
													</CommandItem>
													{fullTeam.map((member) => (
														<CommandItem
															key={member.name}
															value={member.name}
															onSelect={(val) => {
																setAuthor(val === author ? "" : val.toLowerCase());
																setIsAuthorOpen(false);
															}}
														>
															<Check
																className={cn(
																	"mr-2 h-4 w-4",
																	author === member.name.toLowerCase() ? "opacity-100" : "opacity-0",
																)}
															/>
															<CldImage
																className="mr-3 h-7 w-7 rounded-full"
																src={member.image}
																gravity="face"
																crop="thumb"
																alt={member.name}
																height={28}
																width={28}
															/>
															{member.name}
														</CommandItem>
													))}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
							</div>

							<div>
								<label htmlFor="editor" className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
									Editor
								</label>
								<Popover open={isEditorOpen} onOpenChange={setIsEditorOpen}>
									<PopoverTrigger asChild>
										<Button
											id="editor"
											variant="outline"
											role="combobox"
											aria-expanded={isEditorOpen}
											className="w-full justify-between"
										>
											{editor || "Select editor..."}
											<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-72 p-0">
										<Command>
											<CommandInput placeholder="Search editor..." />
											<CommandList>
												<CommandEmpty>No editor found.</CommandEmpty>
												<CommandGroup className="max-h-72 overflow-scroll">
													{fullTeam.map((member) => (
														<CommandItem
															key={member.name}
															value={member.name}
															onSelect={(val) => {
																setEditor(val === editor ? "" : val.toLowerCase());
																setIsEditorOpen(false);
															}}
														>
															<Check
																className={cn(
																	"mr-2 h-4 w-4",
																	editor === member.name.toLowerCase() ? "opacity-100" : "opacity-0",
																)}
															/>
															<CldImage
																className="mr-3 h-7 w-7 rounded-full"
																src={member.image}
																gravity="face"
																crop="thumb"
																alt={member.name}
																height={28}
																width={28}
															/>
															{member.name}
														</CommandItem>
													))}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</div>
				</div>

				{/* Cover image preview */}
				{articleImage && (
					<div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={articleImage} alt="Cover" className="h-48 w-full object-cover" />
						<div className="flex items-center justify-between bg-stone-50 px-4 py-2 dark:bg-stone-800">
							<span className="text-xs text-stone-400">Cover image</span>
							<button
								onClick={() => setArticleImage("")}
								className="text-xs text-red-500 hover:text-red-600"
							>
								Remove
							</button>
						</div>
					</div>
				)}

				{/* Markdown editor */}
				<div className="overflow-hidden rounded-xl border border-stone-200 shadow-sm dark:border-stone-700">
					<div className="border-b border-stone-200 bg-stone-50 px-4 py-2.5 dark:border-stone-700 dark:bg-stone-800">
						<span className="text-xs font-medium text-stone-500 dark:text-stone-400">Content (Markdown)</span>
					</div>
					<MDEditor id="md-editor" value={content} onChange={(val) => setContent(val ?? "")} height={700} />
				</div>
			</div>
		</div>
	);
}
