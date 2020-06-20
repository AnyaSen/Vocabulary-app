import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Styles from "./PreferencesPage.module.scss";

import { WordsContext } from "../../../contexts/WordsContext";
import { useForm } from "../../../hooks/useForm";

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

  const newWordsRange =
    (newWordsInput > 0 && newWordsInput <= newWordsLength) ||
    isNewWordsInputEmpty;

  const learningWordsRange =
    (learningWordsInput > 0 && learningWordsInput <= learningWordsLength) ||
    isLearningWordsInputEmpty;

  const learnedWordsRange =
    (learnedWordsInput > 0 && learnedWordsInput <= learnedWordsLength) ||
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
    } else {
      history.push(
        `/question/${newWordsInput}/${learningWordsInput}/${learnedWordsInput}`
      );
    }
  };

  return (
    <Layout>
      <PageLayout
        header="PREFERENCES"
        subHeader="How many words would you like to review?"
      >
        {noWords ? (
          <NotificationMessage text=" Please, add some vocabulary before learning" />
        ) : (
          <>
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

              {isShowButtonPressed && <ExplanatoryWordsCard />}
            </div>
          </>
        )}
      </PageLayout>
    </Layout>
  );
}
