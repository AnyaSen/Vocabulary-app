import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [errorMessages, setErrorMessages] = useState([
    "Sorry, something went wrong."
  ]);

  const [isVocabularyError, setIsVocabularyError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        errorMessages,
        setErrorMessages,

        isVocabularyError,
        setIsVocabularyError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
