"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { commands } from "@uiw/react-md-editor";
import { CldUploadButton } from "next-cloudinary";
import { createArticle } from "@/lib/serverActions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function BlogEditor({ params: { slug } }: { params: { slug: string } }) {
	const router = useRouter();
	const { data: session } = useSession();

	const [content, setContent] = useState("");
	const [newSlug, setNewSlug] = useState(slug);
	const [title, setTitle] = useState("New Article");
	const [summary, setSummary] = useState("");

	if (!session || ["editor", "admin"].includes(session.user.role)) router.push("/unauthorized");

	return (
		<div className="m-auto max-w-6xl space-y-4 p-8 pt-24">
			{/* Edit title */}
			<div>
				<label htmlFor="title" className="mb-2 block">
					Title
				</label>
				<input
					id="title"
					type="text"
					className="w-full rounded-md border-2 border-gray-300 px-4 py-2"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			{/* URL */}
			<div>
				<label htmlFor="slug" className="mb-2 block">
					URL
				</label>
				<input
					id="slug"
					type="text"
					className="w-full rounded-md border-2 border-gray-300 px-4 py-2"
					placeholder="URL"
					value={newSlug}
					onChange={(e) => setNewSlug(e.target.value)}
				/>
			</div>
			{/* Summary */}
			<div>
				<label htmlFor="summary" className="mb-2 block">
					Summary
				</label>
				<textarea
					id="summary"
					className="w-full rounded-md border-2 border-gray-300 px-4 py-2"
					placeholder="Summary"
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
				/>
			</div>
			<div className="flex items-center justify-between py-4">
				<h1 className="mb-4 grow text-2xl font-bold">Edit Post</h1>
				<CldUploadButton
					className="mx-4 rounded-md border-2 border-blue-400 px-4 py-2"
					uploadPreset="TEDI Blog"
					options={{
						cropping: true,
					}}
					onSuccess={(results) => {
						if (!results.info || typeof results.info === "string") return;
						const imageMd = `![${results.info.original_filename}](${results.info.secure_url})`;
						setContent((prev) => prev + imageMd);
					}}>
					Upload Image
				</CldUploadButton>
				<button
					className="rounded-md bg-blue-600 px-4 py-2 text-white"
					onClick={() => {
						createArticle({ title, content, slug: newSlug, summary });
					}}>
					{slug === "new" ? "Create Article" : "Save Article"}
				</button>
			</div>

			<MDEditor id="md-editor" value={content} onChange={(val) => setContent(val ?? "")} />
		</div>
	);
}
