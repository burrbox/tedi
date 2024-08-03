/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
	images: {
		domains: ["res.cloudinary.com", "cdn.discordapp.com", "lh3.googleusercontent.com"],
	},
	rewrites: async () => [
		{ source: "/rss.xml", destination: "/api/rss" },
		{ source: "/donate", destination: "/api/donate" },
	],
};

export default config;
