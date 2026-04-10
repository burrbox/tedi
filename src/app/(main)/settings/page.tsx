import { type Metadata } from "next";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { env } from "@/env";
import { SignOutButton } from "./sign-out-button";
import { Shield, Mail, User, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
	title: "Settings",
	description: "Manage your TEDI account settings.",
	alternates: { canonical: `${env.URL}/settings` },
};

const roleLabels: Record<string, { label: string; color: string }> = {
	admin: { label: "Admin", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
	editor: { label: "Editor", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
	writer: { label: "Writer", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
	user: { label: "Member", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
};

export default async function SettingsPage() {
	const session = await auth();
	if (!session) redirect("/signin?redirect=/settings");

	const user = session.user;
	const role = roleLabels[user.role] ?? roleLabels.user!;

	return (
		<div className="min-h-screen bg-stone-50 pt-20 dark:bg-stone-950">
			<div className="container mx-auto max-w-2xl px-4 py-12">
				<h1 className="mb-8 text-3xl font-bold text-stone-800 dark:text-stone-100">Settings</h1>

				{/* Profile card */}
				<div className="mb-6 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-800">
					<div className="h-20 bg-gradient-to-r from-green-500 to-emerald-600" />
					<div className="px-6 pb-6">
						<div className="-mt-10 mb-4 flex items-end justify-between">
							<Image
								src={user.image ?? "https://res.cloudinary.com/mozzarella-tedi/image/upload/utter.png"}
								width={80}
								height={80}
								alt={user.name ?? "User avatar"}
								className="h-20 w-20 rounded-full border-4 border-white object-cover shadow dark:border-stone-800"
							/>
							<span className={`rounded-full px-3 py-1 text-xs font-semibold ${role.color}`}>{role.label}</span>
						</div>
						<h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">{user.name}</h2>
						<p className="text-sm text-stone-500 dark:text-stone-400">{user.email}</p>
					</div>
				</div>

				{/* Account details */}
				<div className="mb-6 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-800">
					<div className="border-b border-stone-100 px-6 py-4 dark:border-stone-700">
						<h3 className="font-semibold text-stone-800 dark:text-stone-100">Account Information</h3>
					</div>
					<div className="divide-y divide-stone-100 dark:divide-stone-700">
						<div className="flex items-center gap-4 px-6 py-4">
							<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-700">
								<User className="h-4 w-4 text-stone-500 dark:text-stone-400" />
							</div>
							<div className="min-w-0">
								<p className="text-xs text-stone-400 dark:text-stone-500">Name</p>
								<p className="truncate font-medium text-stone-800 dark:text-stone-100">{user.name ?? "—"}</p>
							</div>
						</div>
						<div className="flex items-center gap-4 px-6 py-4">
							<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-700">
								<Mail className="h-4 w-4 text-stone-500 dark:text-stone-400" />
							</div>
							<div className="min-w-0">
								<p className="text-xs text-stone-400 dark:text-stone-500">Email</p>
								<p className="truncate font-medium text-stone-800 dark:text-stone-100">{user.email ?? "—"}</p>
							</div>
						</div>
						<div className="flex items-center gap-4 px-6 py-4">
							<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-700">
								<Shield className="h-4 w-4 text-stone-500 dark:text-stone-400" />
							</div>
							<div className="min-w-0">
								<p className="text-xs text-stone-400 dark:text-stone-500">Role</p>
								<span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${role.color}`}>
									{role.label}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* OAuth note */}
				<div className="mb-6 flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-800/40 dark:text-stone-400">
					<ExternalLink className="mt-0.5 h-4 w-4 shrink-0" />
					<p>
						Your account details are managed through your sign-in provider (Google). To update your name or profile
						picture, visit your Google account settings.
					</p>
				</div>

				{/* Danger zone */}
				<div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm dark:border-red-900/40 dark:bg-stone-800">
					<div className="border-b border-red-100 px-6 py-4 dark:border-red-900/30">
						<h3 className="font-semibold text-red-700 dark:text-red-400">Sign Out</h3>
					</div>
					<div className="flex items-center justify-between px-6 py-4">
						<p className="text-sm text-stone-500 dark:text-stone-400">Sign out of your TEDI account on this device.</p>
						<SignOutButton />
					</div>
				</div>
			</div>
		</div>
	);
}
