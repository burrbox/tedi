import { env } from "@/env";
import { savePetitionSignature } from "@/lib/serverActions";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	// Debug routes are only available in development mode.
	if (env.NODE_ENV !== "development")
		return NextResponse.json({ error: "Debug routes are only available in development mode." }, { status: 403 });

	await savePetitionSignature({
		email: "nash.pillai@protonmail.com",
		firstName: "Nash",
		lastName: "Pillai",
		message: "Hi",
		zipCode: "12524",
	});
	return NextResponse.json({ success: true });
}
