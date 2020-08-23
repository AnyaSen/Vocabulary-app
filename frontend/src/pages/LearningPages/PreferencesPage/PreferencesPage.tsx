import React, { useContext, useState, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import typography from "../../../typography/typography.json";

import Styles from "./PreferencesPage.module.scss";

import { WordsContext } from "../../../contexts/WordsContext";
import { LanguageContext } from "../../../contexts/LanguageContext";

import Layout from "../../../components/Layout";
import PageLayout from "../../../components/PageLayout/PageLayout";
import ExplanatoryWordsCard from "../../../components/shared/ExplanatoryWordsCard";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import InputFieldSmall from "../../../components/InputFieldSmall";
import WarningMessage from "../../../components/shared/WarningMessage";
import NotificationMessage from "../../../components/shared/NotificationMessage";

export default function PreferencesPage(): ReactElement {
  const { language } = useContext(LanguageContext);

  const {
    preferences,
    how_many_words_to_review,
    you_have_in_total,
    words,
    show_word_types,
    close_word_types,
    fill_the_preferences,
    start,
    new_form_label,
    learning_form_label,
    learned_form_label,
    go_to_vocabulary
  } = typography[language].PreferencesPage;

  const {
    enter_numbers,
    the_number_should_be_positive_and,
    _maximum,
    add_vocabulary_before_learning,
    you_cannot_review_0
  } = typography[language].PreferencesPage.errors;

  const {
    new_type,
    learning_type,
    learned_type,
    empty_fields_err
  } = typography[language].shared;

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

  const isValidNumber = (num: number) => {
    const numbers = /^[0-9]+$/;
    if (num) {
      const numberToString = num.toString();

      return numberToString.match(numbers);
    }
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");

    if (areSomeFieldsEmpty) {
      setErrorMessage(empty_fields_err);
    } else if (areNotValidNumbers) {
      setErrorMessage(enter_numbers);
    } else if (!newWordsRange && !noNewWords) {
      setErrorMessage(
        `"${new_form_label}": ${the_number_should_be_positive_and} ${newWordsLength} ${_maximum}`
      );
    } else if (!learningWordsRange && !noLearningWords) {
      setErrorMessage(
        `"${learning_form_label}": ${the_number_should_be_positive_and} ${learningWordsLength} ${_maximum}`
      );
    } else if (!learnedWordsRange && !noLearnedWords) {
      setErrorMessage(
        `"${learned_form_label}": ${the_number_should_be_positive_and} ${learnedWordsLength} ${_maximum}`
      );
    } else if (allTheValuesAreZero) {
      setErrorMessage(you_cannot_review_0);
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
        header={preferences}
        subHeader={how_many_words_to_review}
      >
        {noWords ? (
          <NotificationMessage
            text={add_vocabulary_before_learning}
            linkMessage={go_to_vocabulary}
            linkRoute="/vocabulary"
          />
        ) : (
          <div data-testid="preferences">
            <div className={Styles.explanatoryContainer}>
              <div className={Styles.wordsNumberInfo}>
                <p className={Styles.totalWordsNumber}>
                  {you_have_in_total}{" "}
                  <span>
                    {totalWordsLength} {words}
                  </span>{" "}
                </p>
                <p>
                  {new_type}: {newWordsLength}
                  <br /> {learning_type}: {learningWordsLength}
                  <br />
                  {learned_type}: {learnedWordsLength}
                </p>
              </div>
              <button onClick={toggleisShowButtonPressed}>
                {isShowButtonPressed ? close_word_types : show_word_types}
              </button>

              {isShowButtonPressed && <ExplanatoryWordsCard />}
            </div>

            <form onSubmit={handleSubmit} className={Styles.PreferencesForm}>
              <p className={Styles.PreferencesHeader}>{fill_the_preferences}</p>

              <WarningMessage warnMessage={errorMessage} />

              <div className={Styles.inputFieldsContainer}>
                {!noNewWords && (
                  <InputFieldSmall
                    labelText={new_form_label}
                    name="newWordsInput"
                    value={newWordsInput}
                    onChange={handleChange}
                  />
                )}

                {!noLearningWords && (
                  <InputFieldSmall
                    labelText={learning_form_label}
                    name="learningWordsInput"
                    value={learningWordsInput}
                    onChange={handleChange}
                  />
                )}

                {!noLearnedWords && (
                  <InputFieldSmall
                    labelText={learned_form_label}
                    name="learnedWordsInput"
                    value={learnedWordsInput}
                    onChange={handleChange}
                  />
                )}
              </div>

              <PrimaryButton
                type="submit"
                value="submit"
                buttonMessage={start}
              />
            </form>
          </div>
        )}
      </PageLayout>
    </Layout>
  );
}
