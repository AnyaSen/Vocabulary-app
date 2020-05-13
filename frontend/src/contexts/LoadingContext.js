import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isVocabularyLoading, setIsVocabularyLoading] = useState(true);

  return (
    <LoadingContext.Provider
      value={{
        isVocabularyLoading,
        setIsVocabularyLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
