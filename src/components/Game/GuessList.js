import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessList({ guessList, numberOfGuesses, answer }) {
	return (
		<div className="guess-results">
			{range(numberOfGuesses).map((order) => {
				return (
					<div key={order} className="guess">
						{guessList.length <= order
							? range(5).map((cell) => (
									<span key={cell} className="cell">
										{guessList.length > order && guessList[order].guess[cell]}
									</span>
							  ))
							: checkGuess(guessList[order].guess, answer).map(
									({ letter, status, id }) => (
										<span key={id} className={`cell ${status}`}>
											{letter}
										</span>
									)
							  )}
					</div>
				);
			})}
		</div>
	);
}

export default GuessList;
