import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
	const session = await auth();

	if (!session) redirect("/signin?redirect=/blog");
	if (!["editor", "admin"].includes(session.user.role)) redirect("/unauthorized");

	return <>{children}</>;
}
