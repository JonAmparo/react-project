import React from "react";
import { connect } from "react-redux";

const correctGuessesRecordKey = "CORRECT_GUESSES_RECORD_foo123";

const checkRecord = correctGuesses => {
  const record = Number(localStorage.getItem(correctGuessesRecordKey));

  if (correctGuesses > record) {
    localStorage.setItem(correctGuessesRecordKey, correctGuesses);

    return { record: correctGuesses, isNewRecord: true };
  }

  return { record, isNewRecord: false };
};

const GameState = ({ remaining, correctGuesses, incorrectGuesses }) => {
  const guessText = correctGuesses === 1 ? "guess" : "guesses";
  const guessText2 = incorrectGuesses === 1 ? "guess" : "guesses";

  const { record, isNewRecord } = checkRecord(correctGuesses);

  const recordLabel = isNewRecord ? "🎉 New Record" : "Record";

  return (
    <div>
      <h3>
        {recordLabel}: {record}
      </h3>
      <p>{remaining} cards remaining</p>
      <p>
        {correctGuesses} correct {guessText}
      </p>
      <p>
        {incorrectGuesses} incorrect {guessText2}
      </p>
    </div>
  );
};

export default connect(
  ({
    deck: { remaining },
    gameState: { correctGuesses, incorrectGuesses }
  }) => ({
    remaining,
    correctGuesses,
    incorrectGuesses
  })
)(GameState);
