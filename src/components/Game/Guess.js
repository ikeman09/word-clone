import React from "react";

function Guess({ handleSubmit, status, tries, answer }) {
	const [guess, setGuess] = React.useState("");

	function handleChange(event) {
		const guess = event.target.value.toUpperCase();
		setGuess(guess);
	}

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit(guess);
				setGuess("");
			}}
		>
			<label htmlFor="guess-input">Enter guess: </label>
			{status === "win" ? (
				<div className="happy banner">
					<p>
						<strong>Congratulations! </strong>
						Got it in{" "}
						<strong>
							{tries} {tries === 1 ? "guess" : "guesses"}
						</strong>
					</p>
				</div>
			) : (
				status === "lose" && (
					<div className="sad banner">
						<p>
							Sorry, the correct answer is
							<strong> {answer}</strong>.
						</p>
					</div>
				)
			)}

			<input
				id="guess-input"
				type="text"
				value={guess}
				onChange={handleChange}
				pattern="[a-zA-Z]{5}"
				minLength={5}
				maxLength={5}
				disabled={status !== "playing"}
			></input>
		</form>
	);
}

export default Guess;
