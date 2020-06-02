import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
import WarningMessage from "../../../components/WarningMessage/WarningMessage";

export default function PreferencesPage() {
  const [isShowButtonPressed, setIsShowButtonPressed] = useState(false);

  const [isEmptyInputError, setIsEmptyInputError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isInputTotalWordsError, setIsInputTotalWordsError] = useState(false);
  const [isInputNumberNewWordsError, setIsInputNumberNewWordsError] = useState(
    false
  );
  const [
    isInputNumberLearningWordsError,
    setIsInputNumberLearningWordsError
  ] = useState(false);
  const [
    isInputNumberLearnedWordsError,
    setIsInputNumberLearnedWordsError
  ] = useState(false);
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

  const history = useHistory();

  useEffect(() => {
    setWordsData();
    // eslint-disable-next-line
  }, []);

  const totalWordsLength = wordsArr.length;
  const newWordsLength = newWords.length;
  const learningWordsLength = learningWords.length;
  const learnedWordsLength = learnedWords.length;
  const noWords = wordsArr.length === 0;

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
    setIsInputNumberNewWordsError(false);

    if (areAllFieldsEmpty) {
      setIsTypeError(false);
      setIsInputTotalWordsError(false);
      setIsSumError(false);
      setIsInputNumberNewWordsError(false);
      setIsInputNumberLearnedWordsError(false);

      setIsEmptyInputError(true);
    } else if (!areValidNumbers) {
      setIsInputTotalWordsError(false);
      setIsSumError(false);
      setIsEmptyInputError(false);
      setIsInputNumberNewWordsError(false);
      setIsInputNumberLearningWordsError(false);
      setIsInputNumberLearnedWordsError(false);

      setIsTypeError(true);
    } else if (inputTotalWords < 1 || inputTotalWords > totalWordsLength) {
      setIsTypeError(false);
      setIsEmptyInputError(false);
      setIsSumError(false);
      setIsInputNumberNewWordsError(false);
      setIsInputNumberLearningWordsError(false);
      setIsInputNumberLearnedWordsError(false);

      setIsInputTotalWordsError(true);
    } else if (
      inputNumberNewWords < 0 ||
      inputNumberNewWords > newWordsLength
    ) {
      setIsTypeError(false);
      setIsEmptyInputError(false);
      setIsSumError(false);
      setIsInputTotalWordsError(false);
      setIsInputNumberLearningWordsError(false);
      setIsInputNumberLearnedWordsError(false);

      setIsInputNumberNewWordsError(true);
    } else if (
      inputNumberLearningWords < 0 ||
      inputNumberLearningWords > learningWordsLength
    ) {
      setIsTypeError(false);
      setIsEmptyInputError(false);
      setIsSumError(false);
      setIsInputTotalWordsError(false);
      setIsInputNumberNewWordsError(false);
      setIsInputNumberLearnedWordsError(false);

      setIsInputNumberLearningWordsError(true);
    } else if (
      inputNumberLearnedWords < 0 ||
      inputNumberLearnedWords > learnedWordsLength
    ) {
      setIsTypeError(false);
      setIsEmptyInputError(false);
      setIsSumError(false);
      setIsInputTotalWordsError(false);
      setIsInputNumberNewWordsError(false);
      setIsInputNumberLearningWordsError(false);

      setIsInputNumberLearnedWordsError(true);
    } else if (!isSumEqualToTotal) {
      setIsTypeError(false);
      setIsEmptyInputError(false);
      setIsInputTotalWordsError(false);
      setIsInputNumberNewWordsError(false);
      setIsInputNumberLearningWordsError(false);
      setIsInputNumberLearnedWordsError(false);

      setIsSumError(true);
    } else {
      console.log("YES");
      history.push("/question");
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
        {noWords ? (
          <h2 className={Styles.noWordsMessage}>
            Please, add some vocabulary before learning
          </h2>
        ) : (
          <>
            <form onSubmit={handleSubmit} className={Styles.PreferencesForm}>
              <p className={Styles.PreferencesHeader}>
                Please, fill the preferences in numbers and press START
              </p>

              {isEmptyInputError ? (
                <WarningMessage warnMessage="All the fields should be filled" />
              ) : isTypeError ? (
                <WarningMessage warnMessage="Please, enter NUMBERS" />
              ) : isInputTotalWordsError ? (
                <WarningMessage
                  warnMessage={`Words in total" should be between 1 and ${totalWordsLength}`}
                />
              ) : isInputNumberNewWordsError ? (
                <WarningMessage
                  warnMessage={`"New words" should be less than or equal to ${newWordsLength}`}
                />
              ) : isInputNumberLearningWordsError ? (
                <WarningMessage
                  warnMessage={`"Learing words" should be less than or equal to ${learningWordsLength}`}
                />
              ) : isInputNumberLearnedWordsError ? (
                <WarningMessage
                  warnMessage={`"Learned words" should be less than or equal to ${learnedWordsLength}`}
                />
              ) : isSumError ? (
                <WarningMessage warnMessage='"Words in total" should be equal to the sum of words types' />
              ) : null}

              <div className={Styles.inputFieldsContainer}>
                <InputFieldSmall
                  labelText="Total words"
                  type="number"
                  value={inputTotalWords}
                  onChange={handleTotalWordsChange}
                />

                {(newWordsLength !== 0 && learningWordsLength !== 0) ||
                learnedWordsLength !== 0 ? (
                  <InputFieldSmall
                    labelText="New words"
                    type="number"
                    value={inputNumberNewWords}
                    onChange={handleNewWordsChange}
                  />
                ) : null}

                {(learningWordsLength !== 0 && newWordsLength !== 0) ||
                learnedWordsLength !== 0 ? (
                  <InputFieldSmall
                    labelText="Learing words"
                    type="number"
                    value={inputNumberLearningWords}
                    onChange={handleLearningWordsChange}
                  />
                ) : null}

                {(learnedWordsLength !== 0 && newWordsLength !== 0) ||
                learningWordsLength !== 0 ? (
                  <InputFieldSmall
                    labelText="Learned words"
                    type="number"
                    maxlength={`${learnedWordsLength}`}
                    minlength={1}
                    value={inputNumberLearnedWords}
                    onChange={handleLearnedWordsChange}
                  />
                ) : null}
              </div>

              <PrimaryButton
                type="submit"
                value="submit"
                buttonMessage="START"
              />
            </form>

            <div className={Styles.explanatoryContainer}>
              <p>
                You have {totalWordsLength} word(s) in total
                <br /> New: {newWordsLength}
                <br /> Learning: {learningWordsLength}
                <br />
                Learned: {learnedWordsLength}
              </p>
              <button onClick={toggleisShowButtonPressed}>
                {isShowButtonPressed
                  ? "Close types of words"
                  : "Show types of words"}
              </button>

              {isShowButtonPressed ? <ExplanatoryWordsCard /> : null}
            </div>
          </>
        )}
      </PageLayout>
    </Layout>
  );
}
