import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isVocabularyError, setIsVocabularyError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        isVocabularyError,
        setIsVocabularyError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
