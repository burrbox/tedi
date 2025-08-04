"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import Stripe from "stripe";
import { env } from "@/env";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function getPosts() {
	return db.post.findMany({
		orderBy: { createdAt: "desc" },
		select: {
			title: true,
			summary: true,
			slug: true,
			image: true,
			author: true,
			editor: true,
			createdAt: true,
			updatedAt: true,
		},
		// omit: { content: true },
	});
}

export async function getPostsFull() {
	return db.post.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getPost(slug: string) {
	return db.post.findFirst({ where: { slug } });
}

export async function addEmailSubscription(email: string) {
	await db.subscription.create({ data: { email: z.string().email().parse(email) } });

	try {
		const privateKey = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, "");

		const serviceAccountAuth = new JWT({
			email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			key: privateKey,
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});

		const doc = new GoogleSpreadsheet(env.PETITION_SHEET_ID, serviceAccountAuth);
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[2]!;
		await sheet.addRow({ email, createdAt: new Date().toISOString() });
	} catch (error) {
		console.error("Error saving email subscription to Google Sheets:", error);
	}
}

export async function upsertArticle(
	oldSlug: string,
	article: {
		title: string;
		content: string;
		slug: string;
		summary: string;
		author: string;
		editor: string;
		image: string;
	},
) {
	const session = await auth();
	if (!session || !["editor", "admin"].includes(session.user.role)) redirect("/unauthorized");

	await db.post.upsert({
		create: article,
		update: article,
		where: { slug: oldSlug },
	});
}

export async function savePetitionSignature(data: {
	firstName: string;
	lastName: string;
	email: string;
	zipCode: string;
	message?: string;
	name: string;
}) {
	try {
		const privateKey = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, ""); // Remove any quotes

		const serviceAccountAuth = new JWT({
			email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			key: privateKey,
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});

		const doc = new GoogleSpreadsheet(env.PETITION_SHEET_ID, serviceAccountAuth);
		await doc.loadInfo(); // loads document properties and worksheets
		const sheet = doc.sheetsByIndex[0]!; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
		await sheet.addRow({ ...data, createdAt: new Date().toISOString() });
	} catch (error) {
		console.error("Error saving petition signature:", error);
		throw new Error("Failed to save signature. Please try again later.");
	}

	// await db.petitionSignature.create({
	// 	data: z
	// 		.object({
	// 			firstName: z.string().min(1).max(50),
	// 			lastName: z.string().min(1).max(50),
	// 			email: z.string().email(),
	// 			zipCode: z.string().length(5),
	// 			message: z.string().optional(),
	// 			name: z.string(),
	// 		})
	// 		.parse(data),
	// });
}

export async function saveJoinUsForm(data: {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address: string;
	birthday: string;
	gender: string;
	team: boolean;
}) {
	try {
		// const session = await auth();
		// if (!session) redirect("/signin");

		const privateKey = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, ""); // Remove any quotes

		const serviceAccountAuth = new JWT({
			email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			key: privateKey,
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});

		const doc = new GoogleSpreadsheet(env.PETITION_SHEET_ID, serviceAccountAuth);
		await doc.loadInfo(); // loads document properties and worksheets
		const sheet = doc.sheetsByIndex[1]!; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
		await sheet.addRow({ ...data, createdAt: new Date().toISOString() });
	} catch (error) {
		console.error("Error saving join us form:", error);
		throw new Error("Failed to save form. Please try again later.");
	}
}

export async function savePetitionSuggestion(data: {
	name: string;
	email: string;
	suggestion: string;
	level: "local" | "state" | "national";
}) {
	try {
		const privateKey = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, "");

		const serviceAccountAuth = new JWT({
			email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			key: privateKey,
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});

		const doc = new GoogleSpreadsheet(env.PETITION_SHEET_ID, serviceAccountAuth);
		await doc.loadInfo();

		console.log("Available sheets:");
		doc.sheetsByIndex.forEach((sheet, index) => {
			console.log(`Sheet ${index}: "${sheet.title}"`);
		});

		const sheet = doc.sheetsByIndex[3]!;
		console.log(`Using sheet: "${sheet.title}" (index 3)`);
		await sheet.addRow({ ...data, createdAt: new Date().toISOString() });
	} catch (error) {
		console.error("Error saving petition suggestion:", error);
		throw new Error("Failed to save suggestion. Please try again later.");
	}
}

export async function stripeDonation() {
	const session = await auth();

	const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
	const prices = await stripe.prices.list({ lookup_keys: ["donation"], expand: ["data.product"] });

	if (!prices.data[0]) redirect("/error?error=StripeError");

	const stripeSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		mode: "payment",
		cancel_url: `${env.URL}/pricing`,
		success_url: `${env.URL}/blog`,
		line_items: [{ price: prices.data[0].id, quantity: 1 }],
		customer_email: session?.user.email ?? undefined,
	});

	redirect(stripeSession.url!);
}
