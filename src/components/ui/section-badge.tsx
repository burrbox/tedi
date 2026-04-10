import { cn } from "@/lib/utils";

interface SectionBadgeProps {
	children: React.ReactNode;
	className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
	return (
		<div
			className={cn(
				"inline-block rounded-full bg-stone-200 px-3 py-1 text-sm font-medium text-stone-700 dark:bg-stone-700 dark:text-stone-300",
				className,
			)}
		>
			{children}
		</div>
	);
}
