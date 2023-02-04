import React from "react";

function Guess({ handleSubmit }) {
	const [guess, setGuess] = React.useState("");

	function handleChange(event) {
		const guess = event.target.value;
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
			<input
				id="guess-input"
				type="text"
				value={guess}
				onChange={handleChange}
				minLength={5}
				maxLength={5}
			></input>
		</form>
	);
}

export default Guess;
