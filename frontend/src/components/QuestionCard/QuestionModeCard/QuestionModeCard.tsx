import React, { useContext, useState, ReactElement } from "react";

import Styles from "../QuestionCard.module.scss";

import LearningWordCard from "../../shared/LearningWordCard";
import InputField from "../../InputField";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
import WarningMessage from "../../shared/WarningMessage";

import { LearningContext } from "../../../contexts/LearningContext";
import { LanguageContext } from "../../../contexts/LanguageContext";

import { editWord } from "../../../services/editWord";
import { lowerCaseWord } from "../../../services/lowerCase";
import typography from "../../../typography/typography.json";
import { ErrorContext } from "../../../contexts/ErrorContext";
import ErrorCard from "../../ErrorCard";

interface Props {
  task: string;
  totalWorsArray: Array<{
    newlyAdded: boolean;
    learning: boolean;
    learned: boolean;
    _id: string;
    foreignWord: string;
    translation: string;
    creator: string;
  }>;
}

export default function QuestionModeCard({
  task,
  totalWorsArray
}: Props): ReactElement {
  const { language } = useContext(LanguageContext);

  const {
    enter_translation_placeholder,
    do_not_remember,
    try_to_remember,
    enter_translation_err,
    check_the_answer,
    incorrect,
    correct
  } = typography[language].LearningPage;

  const {
    currentWord,
    wordCount,
    setIsCorrectGuess,
    setIsIncorrectGuess,
    setDoNotKnowGuess,
    setBorderColor,
    setReaction,

    values,
    handleChange,

    croppedNewWordsLength,
    setCroppedNewWordsLength,
    croppedLearningWordsLength,
    setCroppedLearningWordsLength,
    croppedLearnedWordsLength,
    setCroppedLearnedWordsLength
  } = useContext(LearningContext);

  const [errorMessage, setErrorMessage] = useState("");

  const { translationInput } = values;

  const { newlyAdded, learning, learned, _id, translation } = totalWorsArray[
    wordCount
  ];

  const handleDoNotKnowClick = () => {
    setErrorMessage("");
    setDoNotKnowGuess(true);

    setBorderColor("yellow");
    setReaction(try_to_remember);

    if (newlyAdded || learned) {
      editWord(
        { newlyAdded: "false", learning: "true", learned: "false" },
        _id
      );
      newlyAdded && setCroppedNewWordsLength(croppedNewWordsLength - 1);
      learned && setCroppedLearnedWordsLength(croppedLearnedWordsLength - 1);
      setCroppedLearningWordsLength(croppedLearningWordsLength + 1);

      return;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const noTranslation = translationInput === "";

    event.preventDefault();
    setErrorMessage("");

    if (noTranslation) {
      setErrorMessage(enter_translation_err);
      return;
    }

    const rightTranslation =
      lowerCaseWord(translation) === lowerCaseWord(translationInput);

    if (rightTranslation) {
      setIsCorrectGuess(true);
      setBorderColor("green");
      setReaction(correct);

      editWord(
        { newlyAdded: "false", learning: "false", learned: "true" },
        _id
      );

      newlyAdded && setCroppedNewWordsLength(croppedNewWordsLength - 1);
      learning && setCroppedLearningWordsLength(croppedLearningWordsLength - 1);

      setCroppedLearnedWordsLength(croppedLearnedWordsLength + 1);
    } else {
      setIsIncorrectGuess(true);
      setBorderColor("red");
      setReaction(incorrect);

      editWord(
        { newlyAdded: "false", learning: "true", learned: "false" },
        _id
      );
      if (newlyAdded || learned) {
        newlyAdded && setCroppedNewWordsLength(croppedNewWordsLength - 1);
        learned && setCroppedLearnedWordsLength(croppedLearnedWordsLength - 1);

        setCroppedLearningWordsLength(croppedLearningWordsLength + 1);
      }
    }
  };
  const { isError } = useContext(ErrorContext);

  if (isError) return <ErrorCard />;

  return (
    <form
      onSubmit={handleSubmit}
      className={Styles.QuestionCardContainer}
      data-testid="question-card-container"
    >
      <div className={Styles.header}>
        <h2>{task}</h2>

        <SecondaryButton
          type="button"
          buttonMessage={do_not_remember}
          onClick={handleDoNotKnowClick}
        />
      </div>

      <WarningMessage warnMessage={errorMessage} />

      <div className={Styles.WordCardsContainer}>
        <LearningWordCard>
          <h2>{lowerCaseWord(currentWord)}</h2>
        </LearningWordCard>

        <LearningWordCard>
          <InputField
            placeholder={enter_translation_placeholder}
            name="translationInput"
            value={translationInput}
            onChange={handleChange}
            type="text"
          />
        </LearningWordCard>
      </div>

      <PrimaryButton
        type="submit"
        value="submit"
        buttonMessage={check_the_answer}
      />
    </form>
  );
}
