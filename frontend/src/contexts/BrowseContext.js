import React, { useState, createContext } from "react";

export const BrowseContext = createContext();

export const BrowseContextProvider = ({ children }) => {
  const [modifiedWordsArr, setModifiedWordsArr] = useState([]);
  const [isBrowsingMode, setIsBrowsingMode] = useState(false);
  const [isWordPairOpen, setIsWordPairOpen] = useState(false);
  const [wordPairForeignWord, setWordPairForeignWord] = useState("");
  const [wordPairTranslation, setWordPairTranslation] = useState("");
  const [wordPairType, setWordPairType] = useState("");

  return (
    <BrowseContext.Provider
      value={{
        modifiedWordsArr,
        setModifiedWordsArr,
        isBrowsingMode,
        setIsBrowsingMode,

        isWordPairOpen,
        setIsWordPairOpen,
        wordPairForeignWord,
        setWordPairForeignWord,
        wordPairTranslation,
        setWordPairTranslation,

        wordPairType,
        setWordPairType
      }}
    >
      {children}
    </BrowseContext.Provider>
  );
};
