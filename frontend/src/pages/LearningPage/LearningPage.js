import React, { useContext, useEffect, useState } from "react";

import Styles from "./LearningPage.module.scss";

import { WordsContext } from "../../contexts/WordsContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";

import Layout from "../../components/Layout/Layout";
import PageLayout from "../../components/PageLayout/PageLayout";
import ErrorCard from "../../components/ErrorCard/ErrorCard";
import LoadingPage from "../LoadingPage/LoadingPage";
import ExplanatoryWordsCard from "../../components/ExplanatoryWordsCard/ExplanatoryWordsCard";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import InputFieldSmall from "../../components/InputFieldSmall/InputFieldSmall";

export default function LearningPage() {
  const [isShowButtonPressed, setIsShowButtonPressed] = useState(false);
  const [inputNumberWordstoReview, setInputNumberWordstoReview] = useState("");

  const {
    wordsArr,
    setWordsData,
    newWords,
    learningWords,
    learnedWords
  } = useContext(WordsContext);

  const { isVocabularyLoading } = useContext(LoadingContext);
  const { isVocabularyError } = useContext(ErrorContext);

  useEffect(() => {
    setWordsData();
    // eslint-disable-next-line
  }, []);

  const totalWordsLength = wordsArr.length;
  const newWordsLength = newWords.length;
  const learningWordsLength = learningWords.length;
  const learnedWordsWordsLength = learnedWords.length;

  const toggleisShowButtonPressed = () => {
    setIsShowButtonPressed(!isShowButtonPressed);
  };

  const handleNumberWordstoReviewChange = event => {
    setInputNumberWordstoReview(event.target.value);
  };

  const handleSubmit = () => {};

  if (isVocabularyLoading) return <LoadingPage />;
  if (isVocabularyError) return <ErrorCard />;

  return (
    <Layout>
      <PageLayout
        header="Learning Preferences"
        subHeader={`In your vocabulary, there are ${totalWordsLength} words in total: ${newWordsLength} new , ${learningWordsLength} learning, ${learnedWordsWordsLength} learned `}
      >
        <form onSubmit={handleSubmit} className={Styles.PreferencesForm}>
          <p>How many words would you like to review?</p>

          <div className={Styles.inputFieldsContainer}>
            <InputFieldSmall
              labelText="Words in total"
              type="number"
              maxlength={`${totalWordsLength}`}
              minlength={1}
              value={inputNumberWordstoReview}
              onChange={handleNumberWordstoReviewChange}
            />
          </div>

          <PrimaryButton type="submit" value="submit" buttonMessage="Start" />
        </form>

        <div className={Styles.explanatoryContainer}>
          <button onClick={toggleisShowButtonPressed}>
            {isShowButtonPressed
              ? "Close types of words"
              : "Show types of words"}
          </button>

          {isShowButtonPressed ? <ExplanatoryWordsCard /> : null}
        </div>
      </PageLayout>
    </Layout>
  );
}
