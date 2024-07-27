"use client";

import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { useState } from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Command as CommandPrimitive } from "cmdk";

import { getPostAuthor } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { type Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

export function BlogSearch({ articles }: { articles: Prisma.PostGetPayload<null>[] }) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");

	return (
		<div className="flex items-center">
			<Popover open={open} onOpenChange={setOpen}>
				<Command>
					<PopoverPrimitive.Anchor asChild>
						<CommandPrimitive.Input
							asChild
							value={search}
							onValueChange={setSearch}
							onKeyDown={(e) => setOpen(e.key !== "Escape")}
							onMouseDown={() => setOpen((open) => !!search || !open)}
							onFocus={() => setOpen(true)}>
							<Input placeholder="Select article..." className="w-full" />
						</CommandPrimitive.Input>
					</PopoverPrimitive.Anchor>
					{!open && <CommandList aria-hidden="true" className="hidden" />}
					<PopoverContent
						asChild
						onOpenAutoFocus={(e) => e.preventDefault()}
						onInteractOutside={(e) => {
							if (e.target instanceof Element && e.target.hasAttribute("cmdk-input")) e.preventDefault();
						}}
						className="w-[--radix-popover-trigger-width] p-0">
						<CommandList>
							<CommandEmpty>No article found.</CommandEmpty>
							<CommandGroup>
								{articles.map((article) => (
									<CommandItem
										key={article.slug}
										value={article.slug}
										onMouseDown={(e) => e.preventDefault()}
										onSelect={(currentValue) => {
											setOpen(false);
											void router.push(`/blog/${currentValue}`);
										}}>
										<CldImage
											className="mr-3 shrink-0 rounded-full"
											src={getPostAuthor(article).image ?? "utter"}
											width={32}
											height={32}
											crop="thumb"
											gravity="face"
											alt={getPostAuthor(article).name ?? "Anonymous Author"}
										/>
										{article.title}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</PopoverContent>
				</Command>
			</Popover>
		</div>
	);
}
