import React, { useState, createContext, useContext, useEffect } from "react";

import {
  filterNewWords,
  filterLearnedWords,
  filterLearningWords
} from "../services/filterVocabulary";
import { getWords } from "../services/getWords";

import { LoadingContext } from "./LoadingContext";
import { ErrorContext } from "./ErrorContext";

export const WordsContext = createContext();

export const WordsContextProvider = ({ children }) => {
  const [wordsArr, setWordsArr] = useState([]);
  const [newWords, setNewWords] = useState([]);
  const [learningWords, setLearningWords] = useState([]);
  const [learnedWords, setLearnedWords] = useState([]);

  const { setIsVocabularyLoading } = useContext(LoadingContext);
  const { setIsVocabularyError } = useContext(ErrorContext);

  const filterWords = VocabularyArray => {
    const filteredNewWords = filterNewWords(VocabularyArray);
    const filteredLearningWords = filterLearningWords(VocabularyArray);
    const filteredLearnedWords = filterLearnedWords(VocabularyArray);

    setNewWords(filteredNewWords);
    setLearningWords(filteredLearningWords);
    setLearnedWords(filteredLearnedWords);
  };

  const setWordsData = async () => {
    try {
      const wordsDataArr = await getWords();

      setWordsArr(wordsDataArr);

      filterWords(wordsDataArr);

      setIsVocabularyLoading(false);
    } catch (error) {
      setIsVocabularyLoading(false);
      setIsVocabularyError(true);

      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setWordsData();
    } else {
      setIsVocabularyLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  const totalWordsLength = wordsArr.length;
  const newWordsLength = newWords.length;
  const learningWordsLength = learningWords.length;
  const learnedWordsLength = learnedWords.length;

  const noWords = wordsArr.length === 0;
  const noNewWords = newWordsLength === 0;
  const noLearningWords = learningWordsLength === 0;
  const noLearnedWords = learnedWordsLength === 0;

  return (
    <WordsContext.Provider
      value={{
        wordsArr,
        newWords,
        learningWords,
        learnedWords,
        setWordsData,

        totalWordsLength,
        newWordsLength,
        learningWordsLength,
        learnedWordsLength,

        noWords,
        noNewWords,
        noLearningWords,
        noLearnedWords
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};
