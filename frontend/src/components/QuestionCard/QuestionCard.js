import React, { useContext } from "react";

import { LearningContext } from "../../contexts/LearningContext";

import CongratsPage from "../../pages/CongratsPage/CongratsPage";
import QuestionModeCard from "./QuestionModeCard/QuestionModeCard";
import AnswerModeCard from "./AnswerModeCard/AnswerModeCard";

export default function QuestionCard({ task, totalWorsArray }) {
  const {
    isCorrectGuess,
    isIncorrectGuess,
    doNotKnowGuess,
    showCongratilationPage
  } = useContext(LearningContext);

  const isAnswerMode = isCorrectGuess || isIncorrectGuess || doNotKnowGuess;

  return (
    <div>
      {showCongratilationPage && (
        <CongratsPage numberOfReviewedWords={totalWorsArray.length} />
      )}
      {isAnswerMode ? (
        <AnswerModeCard totalWorsArray={totalWorsArray} />
      ) : (
        <QuestionModeCard task={task} totalWorsArray={totalWorsArray} />
      )}
    </div>
  );
}
