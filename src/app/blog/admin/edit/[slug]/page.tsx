"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
// import * as commands from "@uiw/react-md-editor/lib/commands";
import { useState } from "react";
import { commands } from "@uiw/react-md-editor";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function BlogEditor() {
	const [content, setContent] = useState("");
	return (
		<div className="p-8 pt-24">
			<MDEditor id="md-editor" value={content} onChange={(val) => setContent(val ?? "")} />
		</div>
	);
}
