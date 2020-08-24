import React, {
  useState,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode
} from "react";

interface BrowseContextType {
  modifiedWordsArr: Array<{
    newlyAdded: boolean;
    learning: boolean;
    learned: boolean;
    _id: string;
    foreignWord: string;
    translation: string;
    creator: string;
  }>;
  setModifiedWordsArr: Dispatch<any>;
  isBrowsingMode: boolean;
  setIsBrowsingMode: Dispatch<any>;
  isWordPairOpen: boolean;
  setIsWordPairOpen: Dispatch<any>;
  wordPairForeignWord: string;
  setWordPairForeignWord: Dispatch<any>;
  wordPairTranslation: string;
  setWordPairTranslation: Dispatch<any>;
  wordPairType: string;
  setWordPairType: Dispatch<any>;
}

interface Props {
  children: ReactNode;
}

export const BrowseContext = createContext<BrowseContextType>({
  modifiedWordsArr: [],
  setModifiedWordsArr: () => {},
  isBrowsingMode: false,
  setIsBrowsingMode: () => {},
  isWordPairOpen: false,
  setIsWordPairOpen: () => {},
  wordPairForeignWord: "",
  setWordPairForeignWord: () => {},
  wordPairTranslation: "",
  setWordPairTranslation: () => {},
  wordPairType: "",
  setWordPairType: () => {}
});

export const BrowseContextProvider = ({ children }: Props): ReactElement => {
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
