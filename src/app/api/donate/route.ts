import { stripeDonation } from "@/lib/serverActions";

export async function GET() {
	await stripeDonation();
}
