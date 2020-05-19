import React, { useEffect, useContext } from "react";

import Styles from "./VocabularyPage.module.scss";

import WordsList from "../../components/WordsList/WordsList";
import AddWordsForm from "../../components/AddWordsForm/AddWordsForm";
import SideBar from "../../components/SideBar/SideBar";
import BrowseVocabulary from "../../components/BrowseVocabulary/BrowseVocabulary";
import Loader from "../../components/Loader/Loader";
import ErrorCard from "../../components/ErrorCard/ErrorCard";

import { WordsContext } from "../../contexts/WordsContext";
import { BrowseContext } from "../../contexts/BrowseContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";

export default function VocabularyPage() {
  const { wordsArr, setWordsData } = useContext(WordsContext);
  const { isBrowsingMode, modifiedWordsArr } = useContext(BrowseContext);
  const { isVocabularyLoading } = useContext(LoadingContext);
  const { isVocabularyError } = useContext(ErrorContext);

  useEffect(() => {
    setWordsData();
    // eslint-disable-next-line
  }, []);

  if (isVocabularyError) return <ErrorCard />;

  return (
    <div className={Styles.VocabularyPage}>
      <SideBar />
      <div className={Styles.VocabularyContainer}>
        <BrowseVocabulary />

        {!isBrowsingMode ? (
          <>
            {!isVocabularyLoading ? (
              <>
                <AddWordsForm />
                <WordsList
                  wordsArray={wordsArr}
                  noWordsMessage="Here will be your words."
                />
              </>
            ) : (
              <Loader />
            )}
          </>
        ) : !isVocabularyLoading ? (
          <WordsList
            wordsArray={modifiedWordsArr}
            noWordsMessage="No words were found."
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
