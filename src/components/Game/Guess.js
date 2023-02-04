import React from "react";

function Guess() {
	const [guess, setGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const upperCasedGuess = guess.toUpperCase();
		console.log({ guess: upperCasedGuess });
		setGuess("");
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess: </label>
			<input
				id="guess-input"
				type="text"
				minLength={5}
				maxLength={5}
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value);
				}}
			></input>
		</form>
	);
}

export default Guess;
