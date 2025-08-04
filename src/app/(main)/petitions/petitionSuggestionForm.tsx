"use client";

import Loading from "@/components/loading";
import { savePetitionSuggestion } from "@/lib/serverActions";
import { useState, type FormEvent } from "react";

export default function PetitionSuggestionForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [suggestion, setSuggestion] = useState("");
	const [level, setLevel] = useState<"local" | "state" | "national">("local");

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [done, setDone] = useState(false);

	const submitForm = async (event: FormEvent<HTMLFormElement>) => {
		console.log("Form submit function called!");
		console.log("Form data:", { name, email, suggestion, level });

		if (done || isSubmitting) {
			console.log("Form already submitted or submitting, returning early");
			return;
		}

		event.preventDefault();
		console.log("Prevented default, setting isSubmitting to true");
		setIsSubmitting(true);

		try {
			console.log("Calling savePetitionSuggestion...");
			await savePetitionSuggestion({ name, email, suggestion, level });
			console.log("savePetitionSuggestion completed successfully");
			setIsSubmitting(false);
			setDone(true);
		} catch (error) {
			console.error("Form submission error:", error);
			setIsSubmitting(false);
			// Show more specific error message
			const errorMessage =
				error instanceof Error ? error.message : "There was an error submitting your suggestion. Please try again.";
			alert(errorMessage);
		}
	};

	if (done)
		return (
			<div className="rounded-2xl bg-white text-center dark:bg-stone-800">
				<div className="mx-4 py-4 lg:py-8">
					<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700 dark:text-green-400">
						Thank You!
					</h1>
					<h2 className="text-wrap text-center text-lg text-blue-700 dark:text-blue-400">
						Your suggestion has been submitted. We&apos;ll review it and get back to you soon!
					</h2>
				</div>
			</div>
		);

	return (
		<form className="rounded-2xl bg-white dark:bg-stone-800" onSubmit={submitForm}>
			<div className="mx-4 py-4 lg:py-8">
				<h1 className="text-wrap py-6 text-center text-5xl font-bold text-green-700 dark:text-green-400">
					Suggest a Petition
				</h1>
				<h2 className="text-wrap text-center text-lg text-blue-700 dark:text-blue-400">
					Help us create petitions that matter to your community
				</h2>
			</div>
			<div className="mx-6 grid justify-center gap-3 md:flex-col">
				<div className="flex-col">
					<label className="text-blue-700 dark:text-blue-300">
						Name *
						<input
							name="name"
							className="w-full rounded-md bg-blue-300 p-3 shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:bg-stone-700 dark:text-white dark:hover:bg-stone-800 dark:focus:bg-stone-800"
							type="text"
							required
							value={name}
							onChange={(event) => void setName(event.target.value)}
						/>
					</label>
				</div>
				<div className="flex-col">
					<label className="text-blue-700 dark:text-blue-300">
						Email *
						<input
							name="email"
							className="w-full rounded-md bg-blue-300 p-3 shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:bg-stone-700 dark:text-white dark:hover:bg-stone-800 dark:focus:bg-stone-800"
							type="email"
							required
							value={email}
							onChange={(event) => void setEmail(event.target.value)}
						/>
					</label>
				</div>
				<div className="flex-col">
					<label className="text-blue-700 dark:text-blue-300">
						Level *
						<select
							name="level"
							className="w-full rounded-md bg-blue-300 p-3 shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:bg-stone-700 dark:text-white dark:hover:bg-stone-800 dark:focus:bg-stone-800"
							required
							value={level}
							onChange={(event) => void setLevel(event.target.value as "local" | "state" | "national")}
						>
							<option value="local">Local</option>
							<option value="state">State</option>
							<option value="national">National</option>
						</select>
					</label>
				</div>
				<div className="flex-col">
					<label className="text-blue-700 dark:text-blue-300">
						Suggestion *
						<textarea
							name="suggestion"
							className="h-32 w-full resize-none rounded-md bg-blue-300 p-3 shadow-blue-700 duration-200 hover:bg-blue-100 focus:bg-white dark:bg-stone-700 dark:text-white dark:hover:bg-stone-800 dark:focus:bg-stone-800"
							placeholder="Describe the environmental issue you'd like us to address with a petition. Include details about the problem, who it affects, and what change you'd like to see."
							required
							value={suggestion}
							onChange={(event) => void setSuggestion(event.target.value)}
						/>
					</label>
				</div>
			</div>
			<div className="mx-3 flex justify-center py-10">
				<button
					type="submit"
					disabled={isSubmitting || done}
					className="w-4/5 cursor-pointer rounded-xl bg-blue-700 py-3 text-white duration-300 hover:bg-blue-600"
					onClick={() => console.log("Button clicked!")}
				>
					{isSubmitting ? <Loading className="m-auto" /> : "Submit Suggestion"}
				</button>
			</div>
		</form>
	);
}
