import React from "react";
import { range } from "../../utils";

function GuessList({ guessList, numberOfGuesses }) {
	return (
		<div className="guess-results">
			{range(0, numberOfGuesses).map((order) => {
				return (
					<div key={order} className="guess">
						{range(0, 5).map((cell) => (
							<span key={cell} className="cell">
								{guessList.length > order && guessList[order].guess[cell]}
							</span>
						))}
					</div>
				);
			})}
		</div>
	);
}

export default GuessList;
