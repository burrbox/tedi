import { env } from "@/env";
import { db } from "@/server/db";
import { verify } from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
	const jwt = request.nextUrl.searchParams.get("jwt");
	if (!jwt) return NextResponse.json({ message: "No JWT" }, { status: 400 });

	const { email } = z
		.object({ email: z.string().email(), type: z.literal("creditRefill") })
		.parse(verify(jwt, env.NEXTAUTH_SECRET));

	const result = await db.subscription.delete({ where: { email } });
	return NextResponse.json({ success: !!result });
}

export async function GET(request: NextRequest) {
	return NextResponse.rewrite(new URL("/unsubscribe/page", request.url));
}
