"use client";

import { CldImage } from "next-cloudinary";

export async function CloudinaryClientWrapper(props: Parameters<typeof CldImage>[0]) {
	return <CldImage {...props} />;
}
