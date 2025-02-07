import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import React from "react";

const GuessResults = ({ guessList }) => {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
        const currentLineWord = guessList[num];
        return (
          <p key={num} className="guess">
            {currentLineWord
              ? currentLineWord.map((letterDetails, index) => (
                  <span key={index} className={`cell ${letterDetails.status}`}>
                    {letterDetails.letter}
                  </span>
                ))
              : range(0, 5).map((num) => (
                  <span key={num} className="cell"></span>
                ))}
          </p>
        );
      })}
    </div>
  );
};

export default GuessResults;
