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
	const [win, setWin] = React.useState(false);
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

		console.log([...guessList, newGuess]);
		// Push new guess object
		setGuessList([...guessList, newGuess]);

		if (guess === answer.toString()) {
			setWin(true);
		}

		setNumberOfTries(tries + 1);
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
				win={win}
				tries={tries}
				numberOfGuesses={NUM_OF_GUESSES_ALLOWED}
				answer={answer}
			/>
		</>
	);
}

export default Game;
