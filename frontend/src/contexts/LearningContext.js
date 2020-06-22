import React, { createContext, useState } from "react";

export const LearningContext = createContext();

export const LearningContextProvider = ({ children }) => {
  const [wordCount, setWordCount] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  return (
    <LearningContext.Provider
      value={{
        wordCount,
        setWordCount,
        currentWord,
        setCurrentWord
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};
