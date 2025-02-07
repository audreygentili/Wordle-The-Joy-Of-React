import { LOSESTATUS, WINSTATUS } from "./constants";

export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const checkGameStatus = (guessList) => {
  if (guessList.length === 0) return null;

  const lastWord = guessList[guessList.length - 1];
  console.log(lastWord);

  if (lastWord.every((letterDetail) => letterDetail.status === "correct")) {
    return WINSTATUS;
  }

  if (guessList.length === 6) {
    return LOSESTATUS;
  }

  return null;
};
