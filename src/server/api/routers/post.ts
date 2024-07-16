import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
	hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
		return {
			greeting: `Hello ${input.text}`,
		};
	}),

	create: protectedProcedure.input(z.object({ name: z.string().min(1) })).mutation(async ({ ctx, input }) => {
		// simulate a slow db call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return ctx.db.post.create({
			data: {
				title: input.name,
				content: "This is a post",
				summary: "This is a summary",
				slug: "test-post",
				image: "https://example.com/image.jpg",
				author: "",
			},
		});
	}),

	getLatest: protectedProcedure.query(({ ctx }) => {
		return ctx.db.post.findFirst({
			orderBy: { createdAt: "desc" },
		});
	}),

	getSecretMessage: protectedProcedure.query(() => {
		return "you can now see this secret message!";
	}),
});
