import React, { useState, createContext } from "react";
import { readData } from "../services/readData";

export const WordsContext = createContext();

export const WordsContextProvider = ({ children }) => {
  const [wordsArr, setWordsArr] = useState([]);

  const setWordsData = async () => {
    const wordsURL = "/words";

    try {
      const wordsDataArr = await readData(wordsURL);

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
