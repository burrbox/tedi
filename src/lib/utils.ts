import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { fullTeam } from "./constants";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getPostAuthor(post: { author: string; authorDetails?: { email?: string; image?: string } }) {
	const foundAuthor = fullTeam.find((member) => member.name.toLowerCase() === post.author.toLowerCase());
	if (foundAuthor) return foundAuthor;

	// Handle guest authors
	return {
		name: post.author,
		title: "Guest Contributor",
		location: "Unknown",
		image: post.authorDetails?.image ?? "TEDI Bio/anon", // Replace with a default image URL
		description: "This article was contributed by a guest author.",
		email: post.authorDetails?.email ?? "team@tedinitiative.org",
	};
}

export function clamp(min: number, max: number, value: number) {
	return Math.min(Math.max(value, min), max);
}
export function getPostEditor(post: { editor: string }) {
	return fullTeam.find((member) => member.name.toLowerCase() === post.editor) ?? fullTeam[0]!;
}
