import React, { useEffect, useContext } from "react";

import Styles from "./VocabularyPage.module.scss";

import WordsList from "../../components/WordsList/WordsList";
import AddWordsForm from "../../components/AddWordsForm/AddWordsForm";
import SideBar from "../../components/SideBar/SideBar";
import BrowseVocabulary from "../../components/BrowseVocabulary/BrowseVocabulary";

import { WordsContext } from "../../contexts/WordsContext";
import { BrowseContext } from "../../contexts/BrowseContext";

export default function VocabularyPage() {
  const { wordsArr, setWordsData } = useContext(WordsContext);
  const { isBrowsingMode, modifiedWordsArr } = useContext(BrowseContext);

  useEffect(() => {
    setWordsData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={Styles.VocabularyPage}>
      <SideBar />
      <div className={Styles.VocabularyContainer}>
        <BrowseVocabulary />
        {!isBrowsingMode ? (
          <>
            <AddWordsForm />

            <WordsList
              wordsArray={wordsArr}
              noWordsMessage="Here will be your words."
            />
          </>
        ) : (
          <WordsList
            wordsArray={modifiedWordsArr}
            noWordsMessage="No words were found."
          />
        )}
      </div>
    </div>
  );
}
