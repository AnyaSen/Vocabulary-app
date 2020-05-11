import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isLoginError, setIsLoginError] = useState(false);
  const [isSignupError, setIsSignupError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        isLoginError,
        setIsLoginError,
        isSignupError,
        setIsSignupError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
