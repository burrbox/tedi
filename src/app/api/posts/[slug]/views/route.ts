import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function POST(_req: Request, { params }: { params: { slug: string } }) {
	try {
		const post = await db.post.update({
			where: { slug: params.slug },
			data: { views: { increment: 1 } },
			select: { views: true },
		});
		return NextResponse.json({ views: post.views });
	} catch {
		return NextResponse.json({ views: 0 }, { status: 200 });
	}
}

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
	try {
		const post = await db.post.findFirst({
			where: { slug: params.slug },
			select: { views: true },
		});
		return NextResponse.json({ views: post?.views ?? 0 });
	} catch {
		return NextResponse.json({ views: 0 }, { status: 200 });
	}
}
