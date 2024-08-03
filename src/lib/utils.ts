import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { team } from "./constants";
import { type Prisma } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getPostAuthor(post: { author: string }) {
	return team.find((member) => member.name.toLowerCase() === post.author) ?? team[1]!;
}
