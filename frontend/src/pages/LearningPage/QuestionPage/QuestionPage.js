import React, { useContext, useEffect } from "react";

import { getRandomWords } from "../../../services/getRandomWords";

import { LearningContext } from "../../../contexts/LearningContext";
import { WordsContext } from "../../../contexts/WordsContext";
import QuestionCard from "../../../components/QuestionCard/QuestionCard";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";

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
      <ProgressCard
        totalWordsNum={totalWordsNumber}
        newWordsNum={newWordsNumber}
        learningWordsNum={learningWordsNumber}
        learnedWordsNum={learnedWordsNumber}
      />

      <QuestionCard task="Please, enter translation of the word" word="word" />
    </div>
  );
}
