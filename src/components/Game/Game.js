import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "./Guess";
import GuessList from "./GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log({ answer });
// To make debugging easier, we'll log the solution in the console.

function Game() {
	const [guessList, setGuessList] = React.useState([]);
	const [status, setStatus] = React.useState("playing");
	const [tries, setNumberOfTries] = React.useState(0);

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

		// Create new guess list
		const nextGuesses = [...guessList, newGuess];

		// Push new guess object
		setGuessList(nextGuesses);

		// Check if player won
		if (guess === answer.toString()) {
			setStatus("win");
		}

		// Increment number of tries
		setNumberOfTries(tries + 1);

		// Check if player lost
		if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setStatus("lose");
		}
	}

	return (
		<>
			<GuessList
				guessList={guessList}
				numberOfGuesses={NUM_OF_GUESSES_ALLOWED}
				answer={answer}
			/>
			<Guess
				handleSubmit={handleSubmit}
				status={status}
				tries={tries}
				numberOfGuesses={NUM_OF_GUESSES_ALLOWED}
				answer={answer}
			/>
		</>
	);
}

export default Game;
