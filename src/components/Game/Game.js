import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "./Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log({ answer });
// To make debugging easier, we'll log the solution in the console.

function Game() {
	return (
		<>
			<Guess />
		</>
	);
}

export default Game;
