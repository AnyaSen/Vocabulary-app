import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isLoginError, setIsLoginError] = useState(false);
  const [isSignupError, setIsSignupError] = useState(false);
  const [isVocabularyError, setIsVocabularyError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        isLoginError,
        setIsLoginError,
        isSignupError,
        setIsSignupError,
        isVocabularyError,
        setIsVocabularyError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
