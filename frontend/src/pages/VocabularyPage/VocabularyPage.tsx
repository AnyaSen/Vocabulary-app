import React, { useContext } from "react";
import typography from "../../typography/typography.json";

import Styles from "./VocabularyPage.module.scss";

import WordsList from "../../components/WordsList";
import BrowseVocabulary from "../../components/BrowseVocabulary";
import Loader from "../../components/shared/Loader";
import ErrorCard from "../../components/ErrorCard";
import Layout from "../../components/Layout";
import AddWordsForm from "../../components/AddWordsForm";
import WordPairInfoCard from "../../components/WordPairInfoCard";

import { WordsContext } from "../../contexts/WordsContext";
import { BrowseContext } from "../../contexts/BrowseContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function VocabularyPage() {
  const { language } = useContext(LanguageContext);

  const { here_will_be_your_words, no_words_were_found } = typography[
    language
  ].VocabularyPage;

  const { wordsArr } = useContext(WordsContext);
  const { isBrowsingMode, modifiedWordsArr, isWordPairOpen } = useContext(
    BrowseContext
  );
  const { isLoading } = useContext(LoadingContext);
  const { isError } = useContext(ErrorContext);

  if (isError) return <ErrorCard />;

  return (
    <Layout>
      <div className={Styles.VocabularyContainer}>
        <BrowseVocabulary />

        {!isBrowsingMode ? (
          <>
            {!isLoading ? (
              <>
                {isWordPairOpen ? <WordPairInfoCard /> : <AddWordsForm />}

                <WordsList
                  wordsArray={wordsArr}
                  noWordsMessage={here_will_be_your_words}
                />
              </>
            ) : (
              <Loader />
            )}
          </>
        ) : !isLoading ? (
          <>
            {isWordPairOpen && <WordPairInfoCard />}
            <WordsList
              wordsArray={modifiedWordsArr}
              noWordsMessage={no_words_were_found}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  );
}
