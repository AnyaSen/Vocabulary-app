import React, { useContext, ReactElement } from "react";

import { LearningContext } from "../../contexts/LearningContext";

import CongratsPage from "../../pages/CongratsPage";
import QuestionModeCard from "./QuestionModeCard";
import AnswerModeCard from "./AnswerModeCard";

interface Props {
  task: string;
  totalWorsArray: Array<{
    newlyAdded: boolean;
    learning: boolean;
    learned: boolean;
    _id: string;
    foreignWord: string;
    translation: string;
    creator: string;
  }>;
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
    <div data-testid="question-cards-container">
      {showCongratilationPage && (
        <CongratsPage numberOfReviewedWords={totalWorsArray.length} />
      )}
      {isAnswerMode ? (
        <AnswerModeCard totalWorsArray={totalWorsArray} />
      ) : (
        !showCongratilationPage && (
          <QuestionModeCard task={task} totalWorsArray={totalWorsArray} />
        )
      )}
    </div>
  );
}
