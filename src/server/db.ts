import { PrismaClient } from "@prisma/client";

import { env } from "@/env";

const createPrismaClient = () => new PrismaClient({});

declare global {
	var prisma: ReturnType<typeof createPrismaClient> | undefined;
}

export const db = globalThis.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalThis.prisma = db;
