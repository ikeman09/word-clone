import React from "react";

function Guess({ handleSubmit, win, tries, numberOfGuesses, answer }) {
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
			{win ? (
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
				tries === numberOfGuesses &&
				!win && (
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
				disabled={win || tries === numberOfGuesses}
			></input>
		</form>
	);
}

export default Guess;
