"use client";

import { useEffect } from "react";
import { incrementPostViews } from "@/lib/serverActions";

export function ViewTracker({ slug }: { slug: string }) {
	useEffect(() => {
		void incrementPostViews(slug);
	}, [slug]);

	return null;
}
