"use client";

import Loading from "@/components/loading";
import { petition } from "@/lib/constants";
import { savePetitionSignature } from "@/lib/serverActions";
import { useState, type FormEvent } from "react";

export default function PetitionForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [message, setMessage] = useState("");

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [done, setDone] = useState(false);

	const submitForm = async (event: FormEvent<HTMLFormElement>) => {
		if (done || isSubmitting) return;
		event.preventDefault();
		setIsSubmitting(true);
		await savePetitionSignature({ firstName, lastName, email, zipCode, message });
		setIsSubmitting(false);
		setDone(true);
	};
	if (done)
		return (
			<div className="rounded-2xl bg-white text-center dark:bg-stone-800">
				<div className="mx-4 py-4 lg:py-8">
					<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700">Thank You!</h1>
					<h2 className="text-wrap text-center text-lg text-blue-700">Your support will help us create change</h2>
				</div>
			</div>
		);
	return (
		<form className="rounded-2xl bg-white dark:bg-stone-800" onSubmit={submitForm}>
			<div className="mx-4 py-4 lg:py-8">
				<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700 dark:text-green-500">
					Sign Today!
				</h1>
				<h2 className="text-wrap text-center text-lg text-blue-700 dark:text-blue-400">{petition.callToAction}</h2>
			</div>
			<div className="mx-6 grid justify-center gap-3 md:flex-col lg:grid-cols-2 lg:grid-rows-3">
				<div className="flex-col lg:col-span-1 lg:row-span-1">
					<label className="text-blue-700 dark:text-blue-300">
						First Name *
						<input
							name="firstName"
							className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
							type="text"
							required
							value={firstName}
							onChange={(event) => void setFirstName(event.target.value)}
						/>
					</label>
				</div>
				<div className="flex-col lg:col-span-1 lg:col-start-2 lg:row-span-1">
					<label className="text-blue-700 dark:text-blue-300">
						Last Name *
						<input
							name="lastName"
							className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
							type="text"
							required
							value={lastName}
							onChange={(event) => void setLastName(event.target.value)}
						/>
					</label>
				</div>
				<div className="flex-col lg:col-span-1 lg:col-start-1 lg:row-span-1">
					<label className="text-blue-700 dark:text-blue-300">
						Email *
						<input
							name="email"
							className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
							type="email"
							required
							value={email}
							onChange={(event) => void setEmail(event.target.value)}
						/>
					</label>
				</div>
				<div className="flex-col lg:col-span-1 lg:col-start-1 lg:row-span-1">
					<label className="text-blue-700 dark:text-blue-300">
						Zip Code *
						<input
							name="zipCode"
							className="w-full rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
							type="text"
							required
							value={zipCode}
							onChange={(event) =>
								void setZipCode((prev) => (event.target.value.match(/^\d{0,5}$/) ? event.target.value : prev))
							}
						/>
					</label>
				</div>
				<div className="col-span-1 col-start-2 row-span-2 row-start-2 flex-col">
					<label className="text-blue-700 dark:text-blue-300">
						Message (optional)
						<textarea
							name="message"
							className="h-fit w-full resize-none rounded-md bg-blue-200 p-3 shadow-sm shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:text-black dark:focus:bg-stone-800 dark:focus:text-white"
							rows={5}
							value={message}
							onChange={(event) => void setMessage(event.target.value)}
						/>
					</label>
				</div>
			</div>
			<div className="mx-3 flex justify-center py-10">
				<button
					type="submit"
					disabled={isSubmitting || done}
					className="w-4/5 cursor-pointer rounded-xl bg-blue-700 py-3 text-white duration-300 hover:bg-blue-600">
					{isSubmitting ? <Loading className="m-auto" /> : "Sign"}
				</button>
			</div>
		</form>
	);
}
