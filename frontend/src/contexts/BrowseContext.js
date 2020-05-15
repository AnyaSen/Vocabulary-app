import React, { useState, createContext } from "react";

export const BrowseContext = createContext();

export const BrowseContextProvider = ({ children }) => {
  const [modifiedWordsArr, setModifiedWordsArr] = useState([]);
  const [isBrowsingMode, setIsBrowsingMode] = useState(false);

  return (
    <BrowseContext.Provider
      value={{
        modifiedWordsArr,
        setModifiedWordsArr,
        isBrowsingMode,
        setIsBrowsingMode
      }}
    >
      {children}
    </BrowseContext.Provider>
  );
};
