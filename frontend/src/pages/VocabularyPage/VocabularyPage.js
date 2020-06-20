import React, { useContext } from "react";

import Styles from "./VocabularyPage.module.scss";

import WordsList from "../../components/WordsList/WordsList";
import AddWordsForm from "../../components/AddWordsForm/AddWordsForm";
import BrowseVocabulary from "../../components/BrowseVocabulary/BrowseVocabulary";
import Loader from "../../components/Loader/Loader";
import ErrorCard from "../../components/ErrorCard/ErrorCard";

import { WordsContext } from "../../contexts/WordsContext";
import { BrowseContext } from "../../contexts/BrowseContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import Layout from "../../components/Layout/Layout";

export default function VocabularyPage() {
  const { wordsArr } = useContext(WordsContext);
  const { isBrowsingMode, modifiedWordsArr } = useContext(BrowseContext);
  const { isVocabularyLoading } = useContext(LoadingContext);
  const { isVocabularyError } = useContext(ErrorContext);

  if (isVocabularyError) return <ErrorCard />;

  return (
    <Layout>
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
    </Layout>
  );
}
