"use client";

import { CldImage } from "next-cloudinary";

export function CloudinaryClientWrapper(props: Parameters<typeof CldImage>[0]) {
	return <CldImage {...props} />;
}
