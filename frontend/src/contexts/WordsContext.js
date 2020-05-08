import React, { useState, createContext, useEffect } from "react";
import { fetchData } from "../services/fetchData";

export const WordsContext = createContext();

export const WordsContextProvider = ({ children }) => {
  const [wordsArr, setWordsArr] = useState([]);

  const setWordsData = async () => {
    const wordsURL = "/words";

    try {
      const wordsDataArr = await fetchData(wordsURL);

      setWordsArr(wordsDataArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setWordsData();
  }, []);

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
