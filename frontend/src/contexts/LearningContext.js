import React, { createContext, useState, useEffect, useContext } from "react";

export const LearningContext = createContext();

export const LearningContextProvider = ({ children }) => {
  const [totalWordsNumber, setTotalWordsNumber] = useState(0);
  const [newWordsNumber, setNewWordsNumber] = useState(0);
  const [learningWordsNumber, setLearningWordsNumber] = useState(0);
  const [learnedWordsNumber, setLearnedWordsNumber] = useState(0);

  const [totalWordsArray, setTotalWordsArray] = useState([]);
  const [newWordsArray, setNewWordsArray] = useState([]);
  const [learningWordsArray, setLearningWordsArray] = useState([]);
  const [learnedWordsArray, setLearnedWordsArray] = useState([]);

  useEffect(() => {
    const numberOfTotal = localStorage.getItem("total-words-number");
    const numberOfNew = localStorage.getItem("new-words-number");
    const numberOfLearning = localStorage.getItem("learning-words-number");
    const numberOfLearned = localStorage.getItem("learned-words-number");

    if ((numberOfTotal, numberOfNew, numberOfLearning, numberOfLearned)) {
      setTotalWordsNumber(JSON.parse(numberOfTotal));
      setNewWordsNumber(JSON.parse(numberOfNew));
      setLearningWordsNumber(JSON.parse(numberOfLearning));
      setLearnedWordsNumber(JSON.parse(numberOfLearned));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "total-words-number",
      JSON.stringify(totalWordsNumber)
    );
    localStorage.setItem("new-words-number", JSON.stringify(newWordsNumber));
    localStorage.setItem(
      "learning-words-number",
      JSON.stringify(learningWordsNumber)
    );
    localStorage.setItem(
      "learned-words-number",
      JSON.stringify(learnedWordsNumber)
    );
  });

  return (
    <LearningContext.Provider
      value={{
        totalWordsNumber,
        setTotalWordsNumber,
        newWordsNumber,
        setNewWordsNumber,
        learningWordsNumber,
        setLearningWordsNumber,
        learnedWordsNumber,
        setLearnedWordsNumber,

        totalWordsArray,
        newWordsArray,
        learningWordsArray,
        learnedWordsArray,

        setTotalWordsArray,
        setNewWordsArray,
        setLearningWordsArray,
        setLearnedWordsArray
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};
