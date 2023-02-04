import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "./Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log({ answer });
// To make debugging easier, we'll log the solution in the console.

function Game() {
	const [guessList, setGuessList] = React.useState([]);

	function handleSubmit(guess) {
		// Change guess input to upper case
		const upperCasedGuess = guess.toUpperCase();

		// Console log guess
		console.log({ guess: upperCasedGuess });

		// Create new guess object
		const newGuess = {
			guess: upperCasedGuess,
			id: crypto.randomUUID(),
		};

		console.log([...guessList, newGuess]);
		// Push new guess object
		setGuessList([...guessList, newGuess]);
	}

	return (
		<>
			<Guess />
		</>
	);
}

export default Game;
