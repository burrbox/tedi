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
		// WARNING: Move this to redirects if too much bandwidth is used
		{
			source: "/files/:path*",
			destination: "https://res.cloudinary.com/mozzarella-tedi/image/upload/v1730714611/:path*",
			permanent: false,
		},
	],
	redirects: async () => [
		{
			source: "/join",
			destination:
				"https://docs.google.com/forms/d/e/1FAIpQLSfEWkGAauRBi07E8-4WRlay7RyXJlLII85dt1FCV2C0m-hI1Q/viewform",
			permanent: false,
		},
		// kill switch oh nooo how do i fix this. help me fix nixos please
		// {
		// 	source: "/:x",
		// 	destination: "https://jaybots.org/tedinitiative",
		// 	permanent: true,
		// },
	],
};

export default config;
