import { env } from "@/env";
import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(env.AUTH_RESEND_KEY);

// Runs every week
export async function GET(request: NextRequest) {
	if (request.nextUrl.searchParams.get("key") !== env.CRON_KEY) return NextResponse.json({ error: "Not Authorized" });
	const newPosts = await db.post.findMany({
		where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
	});
	(await db.subscription.findMany()).forEach(
		(sub) =>
			void resend.emails.send({
				from: "TEDI <blog@tedinitiative.org>",
				to: sub.email,
				subject: "New Post in TEDI Blog",
				html:
					"Check it out here: <br>" +
					newPosts.map((post) => `<a href="${env.URL}/blog/${post.slug}">${post.title}</a>`).join("<br>"),
			}),
	);
	return NextResponse.json({ message: "Hello, world!", env: env });
}
