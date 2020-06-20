import React, { useContext, useState } from "react";

import { Redirect } from "react-router-dom";

import { WordsContext } from "../../../contexts/WordsContext";

import QuestionCard from "../../../components/QuestionCard/QuestionCard";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";

export default function QuestionPage({ match }) {
  const {
    newWords,
    learningWords,
    learnedWords,

    newWordsLength,
    learningWordsLength,
    learnedWordsLength
  } = useContext(WordsContext);

  const filterWordsFromArray = (array, numberOfWords) =>
    array.filter((item, index) => {
      return index < numberOfWords;
    });

  const { newNumber, learningNumber, learnedNumber } = match.params;
  const numberOfNewParam = newNumber;
  const numberOfLearningParam = learningNumber;
  const numberOfLearnedParam = learnedNumber;

  const croppedNewWordsArray = filterWordsFromArray(newWords, numberOfNewParam);

  const croppedLearningWordsArray = filterWordsFromArray(
    learningWords,
    numberOfLearningParam
  );

  const croppedLearnedWordsArray = filterWordsFromArray(
    learnedWords,
    numberOfLearnedParam
  );

  const isValidNumberOfNewWords = numberOfNewParam <= newWordsLength;
  const isValidNumberOfLearningWords =
    numberOfLearningParam <= learningWordsLength;
  const isValidNumberOfLearnedWords =
    numberOfLearnedParam <= learnedWordsLength;

  const [croppedNewWords, setCroppedNewWords] = useState(croppedNewWordsArray);
  const [croppedLearningWords, setCroppedLearningWords] = useState(
    croppedLearningWordsArray
  );
  const [croppedLearnedWords, setCroppedLearnedWords] = useState(
    croppedLearnedWordsArray
  );

  const [currentWord, setCurrentWord] = useState(
    croppedNewWords[0].foreignWord
  );

  if (
    !isValidNumberOfNewWords ||
    !isValidNumberOfLearningWords ||
    !isValidNumberOfLearnedWords
  )
    return <Redirect to="/learn" />;

  return (
    <div>
      <ProgressCard
        newWordsNum={croppedNewWords.length}
        learningWordsNum={croppedLearnedWords.length}
        learnedWordsNum={croppedLearningWords.length}
      />

      <QuestionCard
        task="Please, enter translation of the word"
        word={currentWord}
      />
    </div>
  );
}
