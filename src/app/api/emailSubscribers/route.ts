import newArticleEmail from "@/components/emails/newArticleEmail";
import { env } from "@/env";
import { db } from "@/server/db";
import { sign } from "jsonwebtoken";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(env.AUTH_RESEND_KEY);

// Runs every day at 10:00
export async function GET(request: NextRequest) {
	if (request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`)
		return new Response("Unauthorized", { status: 401 });

	const newPosts = await db.post.findMany({
		where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
	});
	if (newPosts[0])
		(await db.subscription.findMany()).forEach(
			(sub) =>
				void resend.emails.send({
					from: "TEDI <blog@tedinitiative.org>",
					to: sub.email,
					subject: "New Post in TEDI Blog",
					react: newArticleEmail({ post: newPosts[0]! }),
					headers: {
						"List-Unsubscribe": `${env.URL}/unsubscribe?jwt=${sign({ email: sub.email, type: "creditRefill" }, env.NEXTAUTH_SECRET)}`,
						"List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
					},
				}),
		);
	return NextResponse.json({ message: "Hello, world!", env: env });
}
