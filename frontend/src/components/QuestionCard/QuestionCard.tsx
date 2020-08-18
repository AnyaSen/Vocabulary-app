import React, { useContext, ReactElement } from "react";

import { LearningContext } from "../../contexts/LearningContext";

import CongratsPage from "../../pages/CongratsPage";
import QuestionModeCard from "./QuestionModeCard";
import AnswerModeCard from "./AnswerModeCard";

interface Props {
  task: string;
  totalWorsArray: [];
}

export default function QuestionCard({
  task,
  totalWorsArray
}: Props): ReactElement {
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
