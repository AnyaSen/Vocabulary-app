import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isVocabularyLoading, setIsVocabularyLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [isFormSubmissionLoading, setIsFormSubmissionLoading] = useState(false);
  const [isDeletingLoading, setIsDeletingLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isVocabularyLoading,
        setIsVocabularyLoading,
        isProfileLoading,
        setIsProfileLoading,
        isFormSubmissionLoading,
        setIsFormSubmissionLoading,
        isDeletingLoading,
        setIsDeletingLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
