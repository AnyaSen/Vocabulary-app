import React, { useContext } from "react";

import { LearningContext } from "../../../contexts/LearningContext";

export default function QuestionPage() {
  const {
    totalWordsNumber,
    newWordsNumber,
    learningWordsNumber,
    learnedWordsNumber
  } = useContext(LearningContext);

  return (
    <div>
      <p>total: {totalWordsNumber}</p>
      <p>new: {newWordsNumber}</p>
      <p>learning: {learningWordsNumber}</p>
      <p>old: {learnedWordsNumber}</p>
    </div>
  );
}
