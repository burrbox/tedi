"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
	return (
		<button
			onClick={() => signOut({ callbackUrl: "/" })}
			className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
		>
			Sign Out
		</button>
	);
}
