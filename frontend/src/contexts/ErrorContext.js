import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [isVocabularyError, setIsVocabularyError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        isError,
        setIsError,
        isVocabularyError,
        setIsVocabularyError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
