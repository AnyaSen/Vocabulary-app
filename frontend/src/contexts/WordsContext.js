import React, { useState, createContext, useContext } from "react";

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
      setIsVocabularyLoading(true);
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

  return (
    <WordsContext.Provider
      value={{
        wordsArr,
        setWordsArr,
        setWordsData,
        newWords,
        learningWords,
        learnedWords
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};
