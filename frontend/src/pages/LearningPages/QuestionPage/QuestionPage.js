import React, { useContext, useState, useEffect } from "react";

import { filterWordsFromArrayByNumber } from "../../../services/filterVocabulary";
import { WordsContext } from "../../../contexts/WordsContext";
import { LearningContext } from "../../../contexts/LearningContext";

import QuestionCard from "../../../components/QuestionCard/QuestionCard";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";

export default function QuestionPage({ match }) {
  const { newWords, learningWords, learnedWords } = useContext(WordsContext);

  const {
    wordCount,
    setCurrentWord,
    croppedNewWordsLength,
    setCroppedNewWordsLength,
    croppedLearningWordsLength,
    setCroppedLearningWordsLength,
    croppedLearnedWordsLength,
    setCroppedLearnedWordsLength
  } = useContext(LearningContext);

  const { newNumber, learningNumber, learnedNumber } = match.params;
  const numberOfNewParam = newNumber;
  const numberOfLearningParam = learningNumber;
  const numberOfLearnedParam = learnedNumber;

  const croppedNewWordsArray = filterWordsFromArrayByNumber(
    newWords,
    numberOfNewParam
  );

  const croppedLearningWordsArray = filterWordsFromArrayByNumber(
    learningWords,
    numberOfLearningParam
  );

  const croppedLearnedWordsArray = filterWordsFromArrayByNumber(
    learnedWords,
    numberOfLearnedParam
  );

  const [croppedNewWords, setCroppedNewWords] = useState(croppedNewWordsArray);
  const [croppedLearningWords, setCroppedLearningWords] = useState(
    croppedLearningWordsArray
  );
  const [croppedLearnedWords, setCroppedLearnedWords] = useState(
    croppedLearnedWordsArray
  );

  const totalWordArr = croppedNewWords.concat(
    croppedLearningWords,
    croppedLearnedWords
  );

  const [totalWords] = useState(totalWordArr);

  useEffect(() => {
    const { foreignWord } = totalWords[wordCount];

    setCurrentWord(foreignWord);
  }, [wordCount]);

  useEffect(() => {
    setCroppedNewWordsLength(croppedNewWords.length);
    setCroppedLearningWordsLength(croppedLearningWords.length);
    setCroppedLearnedWordsLength(croppedLearnedWords.length);
  }, []);

  return (
    <div>
      <ProgressCard
        newWordsNum={croppedNewWordsLength}
        learningWordsNum={croppedLearningWordsLength}
        learnedWordsNum={croppedLearnedWordsLength}
      />

      <QuestionCard
        task="Please, enter translation of the word"
        totalWorsArray={totalWords}
      />
    </div>
  );
}
