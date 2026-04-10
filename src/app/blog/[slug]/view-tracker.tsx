"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function ViewTracker({ slug, initialViews }: { slug: string; initialViews: number }) {
	const [views, setViews] = useState(initialViews);

	useEffect(() => {
		fetch(`/api/posts/${slug}/views`, { method: "POST" })
			.then((r) => r.json())
			.then((data: { views: number }) => setViews(data.views))
			.catch(() => null);
	}, [slug]);

	return (
		<span className="flex items-center gap-1 text-sm text-white/70">
			<Eye className="h-3.5 w-3.5" />
			{views.toLocaleString()}
		</span>
	);
}
