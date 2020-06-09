import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([
    "Sorry, something went wrong."
  ]);

  const [isSignupError, setIsSignupError] = useState(false);
  const [isVocabularyError, setIsVocabularyError] = useState(false);
  const [isFormSubmissionError, setIsFormSubmissionError] = useState(false);
  const [isDeletingError, setIsDeletingError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        isError,
        setIsError,
        errorMessages,
        setErrorMessages,

        isSignupError,
        setIsSignupError,
        isVocabularyError,
        setIsVocabularyError,
        isFormSubmissionError,
        setIsFormSubmissionError,
        isDeletingError,
        setIsDeletingError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
