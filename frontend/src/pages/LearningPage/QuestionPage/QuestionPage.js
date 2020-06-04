import React, { useContext, useEffect } from "react";

import { getRandomWords } from "../../../services/getRandomWords";

import { LearningContext } from "../../../contexts/LearningContext";
import { WordsContext } from "../../../contexts/WordsContext";

export default function QuestionPage() {
  const {
    totalWordsNumber,
    newWordsNumber,
    learningWordsNumber,
    learnedWordsNumber,
    setTotalWordsArray,
    setNewWordsArray,
    setLearningWordsArray,
    setLearnedWordsArray
  } = useContext(LearningContext);

  const { newWords, learningWords, learnedWords, setWordsData } = useContext(
    WordsContext
  );

  const randomNewWordsArr = getRandomWords(newWords, newWordsNumber);
  const randomLearningWordsArr = getRandomWords(
    learningWords,
    learningWordsNumber
  );
  const randomLearnedWordsArr = getRandomWords(
    learnedWords,
    learnedWordsNumber
  );

  const totalArray = randomNewWordsArr.concat(
    randomLearningWordsArr,
    randomLearnedWordsArr
  );

  useEffect(() => {
    setWordsData();
    setTotalWordsArray(totalArray);
    setNewWordsArray(randomNewWordsArr);
    setLearningWordsArray(randomLearningWordsArr);
    setLearnedWordsArray(randomLearnedWordsArr);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>total: {totalWordsNumber}</p>
      <p>new: {newWordsNumber}</p>
      <p>learning: {learningWordsNumber}</p>
      <p>old: {learnedWordsNumber}</p>
    </div>
  );
}
