import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([
    "Sorry, something went wrong."
  ]);

  const [isVocabularyError, setIsVocabularyError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        isError,
        setIsError,
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
