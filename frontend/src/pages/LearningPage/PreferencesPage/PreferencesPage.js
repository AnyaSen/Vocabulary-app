import React, { useContext, useEffect, useState } from "react";

import Styles from "./PreferencesPage.module.scss";

import { WordsContext } from "../../../contexts/WordsContext";
import { LoadingContext } from "../../../contexts/LoadingContext";
import { ErrorContext } from "../../../contexts/ErrorContext";

import Layout from "../../../components/Layout/Layout";
import PageLayout from "../../../components/PageLayout/PageLayout";
import ErrorCard from "../../../components/ErrorCard/ErrorCard";
import LoadingPage from "../../LoadingPage/LoadingPage";
import ExplanatoryWordsCard from "../../../components/ExplanatoryWordsCard/ExplanatoryWordsCard";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import InputFieldSmall from "../../../components/InputFieldSmall/InputFieldSmall";

export default function PreferencesPage() {
  const [isShowButtonPressed, setIsShowButtonPressed] = useState(false);

  const [isEmptyInputError, setIsEmptyInputError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isInputTotalWordsError, setIsInputTotalWordsError] = useState(false);
  const [isSumError, setIsSumError] = useState(false);

  const [inputTotalWords, setInputTotalWords] = useState("");
  const [inputNumberNewWords, setInputNumberNewWords] = useState("");
  const [inputNumberLearningWords, setInputNumberLearningWords] = useState("");
  const [inputNumberLearnedWords, setInputNumberLearnedWords] = useState("");

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

  const handleTotalWordsChange = event => {
    setInputTotalWords(event.target.value);
  };

  const handleNewWordsChange = event => {
    setInputNumberNewWords(event.target.value);
  };

  const handleLearningWordsChange = event => {
    setInputNumberLearningWords(event.target.value);
  };

  const handleLearnedWordsChange = event => {
    setInputNumberLearnedWords(event.target.value);
  };

  const areAllFieldsEmpty =
    inputTotalWords === "" ||
    inputNumberNewWords === "" ||
    inputNumberLearningWords === "" ||
    inputNumberLearnedWords === "";

  const isSumEqualToTotal =
    parseInt(inputNumberNewWords) +
      parseInt(inputNumberLearningWords) +
      parseInt(inputNumberLearnedWords) ===
    parseInt(inputTotalWords);

  const validateNumber = num => {
    // eslint-disable-next-line
    const numbers = /^[0-9]+$/;

    return num.match(numbers);
  };

  const areValidNumbers =
    validateNumber(inputTotalWords) &&
    validateNumber(inputNumberNewWords) &&
    validateNumber(inputNumberLearningWords) &&
    validateNumber(inputNumberLearnedWords);

  const handleSubmit = event => {
    event.preventDefault();
    setIsEmptyInputError(false);
    setIsTypeError(false);
    setIsInputTotalWordsError(false);
    setIsSumError(false);

    if (areAllFieldsEmpty) {
      setIsTypeError(false);
      setIsInputTotalWordsError(false);
      setIsSumError(false);

      setIsEmptyInputError(true);
    } else if (!areValidNumbers) {
      setIsInputTotalWordsError(false);
      setIsSumError(false);
      setIsEmptyInputError(false);

      setIsTypeError(true);
    } else if (inputTotalWords < 1 || inputTotalWords > totalWordsLength) {
      setIsTypeError(false);
      setIsEmptyInputError(false);
      setIsSumError(false);

      setIsInputTotalWordsError(true);
    } else if (!isSumEqualToTotal) {
      setIsTypeError(false);
      setIsEmptyInputError(false);
      setIsInputTotalWordsError(false);

      setIsSumError(true);
    } else {
      console.log("YES");
    }
  };

  if (isVocabularyLoading) return <LoadingPage />;
  if (isVocabularyError) return <ErrorCard />;

  return (
    <Layout>
      <PageLayout
        header="PREFERENCES"
        subHeader="How many words would you like to review?"
      >
        <form onSubmit={handleSubmit} className={Styles.PreferencesForm}>
          <p>Please, fill the preferences in numbers and press START</p>

          {isEmptyInputError ? (
            <p className={Styles.error}>All the fields should be filled</p>
          ) : isTypeError ? (
            <p className={Styles.error}>Please, enter NUMBERS</p>
          ) : isInputTotalWordsError ? (
            <p className={Styles.error}>
              "Words in total" should be between 1 and {totalWordsLength}
            </p>
          ) : isSumError ? (
            <p className={Styles.error}>
              "Words in total" should be equal to the sum of words types
            </p>
          ) : null}

          <div className={Styles.inputFieldsContainer}>
            <InputFieldSmall
              labelText="Words in total"
              type="number"
              value={inputTotalWords}
              onChange={handleTotalWordsChange}
            />

            <InputFieldSmall
              labelText="New words"
              type="number"
              value={inputNumberNewWords}
              onChange={handleNewWordsChange}
            />

            <InputFieldSmall
              labelText="Learing words"
              type="number"
              value={inputNumberLearningWords}
              onChange={handleLearningWordsChange}
            />

            <InputFieldSmall
              labelText="Learned words"
              type="number"
              maxlength={`${learnedWordsWordsLength}`}
              minlength={1}
              value={inputNumberLearnedWords}
              onChange={handleLearnedWordsChange}
            />
          </div>

          <PrimaryButton type="submit" value="submit" buttonMessage="START" />
        </form>

        <div className={Styles.explanatoryContainer}>
          <p>
            You have {totalWordsLength} words. New: {newWordsLength}, learning:{" "}
            {learningWordsLength}, learned: {learnedWordsWordsLength}
          </p>
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
