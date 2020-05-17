import React, { useState, createContext, useContext } from "react";

import { getWords } from "../services/getWords";
import { LoadingContext } from "./LoadingContext";
import { ErrorContext } from "./ErrorContext";

export const WordsContext = createContext();

export const WordsContextProvider = ({ children }) => {
  // const { setIsVocabularyLoading } = useContext(LoadingContext);

  const [wordsArr, setWordsArr] = useState([]);
  const { setIsVocabularyLoading } = useContext(LoadingContext);
  const { setIsVocabularyError } = useContext(ErrorContext);

  const setWordsData = async () => {
    try {
      setIsVocabularyLoading(true);
      const wordsDataArr = await getWords();

      setWordsArr(wordsDataArr);

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
        setWordsData
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};
