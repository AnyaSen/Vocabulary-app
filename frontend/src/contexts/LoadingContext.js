import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [isVocabularyLoading, setIsVocabularyLoading] = useState(true);

  return (
    <LoadingContext.Provider
      value={{
        isProfileLoading,
        setIsProfileLoading,
        isVocabularyLoading,
        setIsVocabularyLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
