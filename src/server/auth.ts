import { type DefaultSession } from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";

import { env } from "@/env";
import { db } from "@/server/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
// import PasskeyProvider from "next-auth/providers/passkey";
// import ResendProvider from "next-auth/providers/resend";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import { clientPromise, connectToDatabase } from "@/lib/mongodb";
// import { Resend } from "resend";
// import SignInEmail from "@/components/emails/signInEmail";
// import crypto from "crypto";
import { PrismaAdapter } from "@auth/prisma-adapter";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
			// ...other properties
			// role: UserRole;
		} & DefaultSession["user"];
	}

	// interface User {
	//   // ...other properties
	//   // role: UserRole;
	// }
}

// const resend = new Resend(env.AUTH_RESEND_KEY);

export const { auth, handlers, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(db),
	providers: [
		GoogleProvider,
		Discord,
		// ResendProvider({
		// 	from: "signin@deaplearning.com",
		// 	async sendVerificationRequest({ identifier: email, url }) {
		// 		const code = crypto.randomBytes(4).toString("hex").match(/.{4}/g)?.join("-");
		// 		if (!code) throw new Error("Could not generate code");

		// 		const intermediateUrl = `${env.URL}/verifyRedirect${new URL(url).search}`;
		// 		const result = await resend.emails.send({
		// 			from: "Ember <support@deaplearning.com>",
		// 			to: [email],
		// 			subject: "Sign in to Ember",
		// 			react: SignInEmail(intermediateUrl, code),
		// 		});
		// 		if (result.error || !result.data) throw new Error(`Could not send email: ${result.error}`);

		// 		const { verifyEmailsDB, emailedCodesDB } = await connectToDatabase();
		// 		verifyEmailsDB.insertOne({ emailId: result.data.id, email });
		// 		emailedCodesDB.insertOne({
		// 			code,
		// 			email,
		// 			timestamp: new Date(),
		// 			redirect: intermediateUrl,
		// 		});
		// 	},
		// }),
		// PasskeyProvider,
	],
	callbacks: {
		async session({ session, user }) {
			/* eslint-disable no-param-reassign */
			session.user.id = user.id;
			// session.user.isAdmin = (user as User).isAdmin ?? false;
			// session.user.role = (user as User).role;
			/* eslint-enable no-param-reassign */
			return session;
		},
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
	},
	pages: {
		// signIn: "/signin",
		verifyRequest: "/verify",
	},
	secret: env.NEXTAUTH_SECRET,
	debug: false, // env.NODE_ENV === "development",
	experimental: { enableWebAuthn: true },
});
