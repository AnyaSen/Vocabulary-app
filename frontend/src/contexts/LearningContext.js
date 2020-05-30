import React, { createContext, useState } from "react";

export const LearningContext = createContext();

export const LearningContextProvider = ({ children }) => {
  const [totalWords, setTotalWords] = useState([]);
  const [newWords, setNewWords] = useState([]);
  const [learningWords, setLearningWords] = useState([]);
  const [learnedWords, setLearnedWords] = useState([]);

  return (
    <LearningContext.Provider
      value={{
        totalWords,
        setTotalWords,
        newWords,
        setNewWords,
        learningWords,
        setLearningWords,
        learnedWords,
        setLearnedWords
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};
