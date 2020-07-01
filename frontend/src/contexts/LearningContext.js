import React, { createContext, useState } from "react";
import { useForm } from "../hooks/useForm";

export const LearningContext = createContext();

export const LearningContextProvider = ({ children }) => {
  const [wordCount, setWordCount] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [isIncorrectGuess, setIsIncorrectGuess] = useState(false);
  const [doNotKnowGuess, setDoNotKnowGuess] = useState(false);

  const [borderColor, setBorderColor] = useState("");
  const [reaction, setReaction] = useState("");

  const [showCongratilationPage, setShowCongratilationPage] = useState(false);

  const [values, handleChange, clearValues] = useForm({
    translationInput: ""
  });

  return (
    <LearningContext.Provider
      value={{
        wordCount,
        setWordCount,
        currentWord,

        setCurrentWord,
        isCorrectGuess,
        setIsCorrectGuess,
        isIncorrectGuess,
        setIsIncorrectGuess,
        doNotKnowGuess,
        setDoNotKnowGuess,

        borderColor,
        setBorderColor,
        reaction,
        setReaction,

        showCongratilationPage,
        setShowCongratilationPage,

        values,
        handleChange,
        clearValues
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};
