import { useState } from "react";
import { checkGuess } from "../../game-helpers";

const GuessInput = ({ guessList, setGuessList, answer, isDisabled }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGuessList = [...guessList];
    const guess = checkGuess(input, answer);
    newGuessList.push(guess);
    setGuessList(newGuessList);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={isDisabled}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default GuessInput;
