import React, { useEffect, useState } from "react";

import { checkGameStatus, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { LOSESTATUS, WINSTATUS } from "../../constants";
import SadBanner from "../SadBanner";
import HappyBanner from "../HappyBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    const status = checkGameStatus(guessList);
    setGameStatus(status);
  }, [guessList]);

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        isDisabled={gameStatus != null}
      />
      {gameStatus === WINSTATUS ? (
        <HappyBanner guessCount={guessList.length} />
      ) : null}
      {gameStatus === LOSESTATUS ? <SadBanner answer={answer} /> : null}
    </>
  );
}

export default Game;
