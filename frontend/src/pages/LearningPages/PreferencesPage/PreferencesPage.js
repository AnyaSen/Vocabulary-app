import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import Styles from "./PreferencesPage.module.scss";

import { WordsContext } from "../../../contexts/WordsContext";

import Layout from "../../../components/Layout/Layout";
import PageLayout from "../../../components/PageLayout/PageLayout";
import ExplanatoryWordsCard from "../../../components/ExplanatoryWordsCard/ExplanatoryWordsCard";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import InputFieldSmall from "../../../components/InputFieldSmall/InputFieldSmall";
import WarningMessage from "../../../components/WarningMessage/WarningMessage";
import NotificationMessage from "../../../components/NotificationMessage/NotificationMessage";

export default function PreferencesPage() {
  const [isShowButtonPressed, setIsShowButtonPressed] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const {
    totalWordsLength,
    newWordsLength,
    learningWordsLength,
    learnedWordsLength,

    noWords,
    noNewWords,
    noLearningWords,
    noLearnedWords
  } = useContext(WordsContext);

  const [values, handleChange] = useForm({
    newWordsInput: newWordsLength,
    learningWordsInput: learningWordsLength,
    learnedWordsInput: learnedWordsLength
  });
  const { newWordsInput, learningWordsInput, learnedWordsInput } = values;

  const history = useHistory();

  const toggleisShowButtonPressed = () => {
    setIsShowButtonPressed(!isShowButtonPressed);
  };

  const isNewWordsInputEmpty = newWordsInput === "";
  const isLearningWordsInputEmpty = learningWordsInput === "";
  const isLearnedWordsInputEmpty = learnedWordsInput === "";

  const areSomeFieldsEmpty =
    (isNewWordsInputEmpty && !noNewWords) ||
    (isLearningWordsInputEmpty && !noLearningWords) ||
    (isLearnedWordsInputEmpty && !noLearnedWords);

  const isValidNumber = num => {
    const numbers = /^[0-9]+$/;
    const numberToString = num.toString();

    return numberToString.match(numbers);
  };

  const areNotValidNumbers =
    (!isValidNumber(newWordsInput) && !noNewWords) ||
    (!isValidNumber(learningWordsInput) && !noLearningWords) ||
    (!isValidNumber(learnedWordsInput) && !noLearnedWords);

  const allTheValuesAreZero =
    parseInt(newWordsInput) === 0 &&
    parseInt(learningWordsInput) === 0 &&
    parseInt(learnedWordsInput) === 0;

  const newWordsRange =
    (newWordsInput > -1 && newWordsInput <= newWordsLength) ||
    isNewWordsInputEmpty;

  const learningWordsRange =
    (learningWordsInput > -1 && learningWordsInput <= learningWordsLength) ||
    isLearningWordsInputEmpty;

  const learnedWordsRange =
    (learnedWordsInput > -1 && learnedWordsInput <= learnedWordsLength) ||
    isLearnedWordsInputEmpty;

  const handleSubmit = event => {
    event.preventDefault();

    setErrorMessage("");

    if (areSomeFieldsEmpty) {
      setErrorMessage("All the fields should be filled");
    } else if (areNotValidNumbers) {
      setErrorMessage("Please, enter Numbers");
    } else if (!newWordsRange && !noNewWords) {
      setErrorMessage(
        `"New words" should be positive and ${newWordsLength} maximum`
      );
    } else if (!learningWordsRange && !noLearningWords) {
      setErrorMessage(
        `"Learing words" should be positive and ${learningWordsLength} maximum`
      );
    } else if (!learnedWordsRange && !noLearnedWords) {
      setErrorMessage(
        `"Learned words" should be positive and ${learnedWordsLength} maximum`
      );
    } else if (allTheValuesAreZero) {
      setErrorMessage(`Chose at least 1 word to review`);
    } else {
      history.push(
        `/question/${newWordsInput}/${learningWordsInput}/${learnedWordsInput}`
      );
    }
  };

  return (
    <Layout>
      <PageLayout
        childrenFlexColumn
        header="PREFERENCES"
        subHeader="How many words would you like to review?"
      >
        {noWords ? (
          <NotificationMessage
            text=" Please, add some vocabulary before learning."
            linkMessage="GO TO VOCABULARY"
            linkRoute="/vocabulary"
          />
        ) : (
          <>
            <div className={Styles.explanatoryContainer}>
              <div className={Styles.wordsNumberInfo}>
                <p className={Styles.totalWordsNumber}>
                  You have <span>{totalWordsLength} word(s)</span> in total
                </p>
                <p>
                  New: {newWordsLength}
                  <br /> Learning: {learningWordsLength}
                  <br />
                  Learned: {learnedWordsLength}
                </p>
              </div>
              <button onClick={toggleisShowButtonPressed}>
                {isShowButtonPressed ? "Close" : "Show word types"}
              </button>

              {isShowButtonPressed && <ExplanatoryWordsCard />}
            </div>

            <form onSubmit={handleSubmit} className={Styles.PreferencesForm}>
              <p className={Styles.PreferencesHeader}>
                Please, fill the preferences in numbers and press START
              </p>

              <WarningMessage warnMessage={errorMessage} />

              <div className={Styles.inputFieldsContainer}>
                {!noNewWords && (
                  <InputFieldSmall
                    labelText="New words"
                    name="newWordsInput"
                    value={newWordsInput}
                    onChange={handleChange}
                  />
                )}

                {!noLearningWords && (
                  <InputFieldSmall
                    labelText="Learing words"
                    name="learningWordsInput"
                    value={learningWordsInput}
                    onChange={handleChange}
                  />
                )}

                {!noLearnedWords && (
                  <InputFieldSmall
                    labelText="Learned words"
                    name="learnedWordsInput"
                    value={learnedWordsInput}
                    onChange={handleChange}
                  />
                )}
              </div>

              <PrimaryButton
                type="submit"
                value="submit"
                buttonMessage="START"
              />
            </form>
          </>
        )}
      </PageLayout>
    </Layout>
  );
}
