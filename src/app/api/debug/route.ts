import { env } from "@/env";
import { auth } from "@/server/auth";
import { NextResponse } from "next/server";

export async function GET() {
	const session = await auth();
	if (!session) return NextResponse.redirect("/signin");
	if (session.user.role !== "admin")
		return NextResponse.json({ message: "You are not authorized to view debug information." });
	return NextResponse.json({ message: "Hello, world!", env: env });
}
