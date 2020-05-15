import React, { useState, createContext } from "react";

import { getWords } from "../services/getWords";

export const WordsContext = createContext();

export const WordsContextProvider = ({ children }) => {
  const [wordsArr, setWordsArr] = useState([]);

  const setWordsData = async () => {
    try {
      const wordsDataArr = await getWords();

      setWordsArr(wordsDataArr);
    } catch (error) {
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
