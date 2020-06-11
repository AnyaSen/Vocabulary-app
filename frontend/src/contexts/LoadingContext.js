import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isVocabularyLoading, setIsVocabularyLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isVocabularyLoading,
        setIsVocabularyLoading,
        isProfileLoading,
        setIsProfileLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
