import React, { useContext, useState } from "react";

import Styles from "../QuestionCard.module.scss";

import WordCard from "../WordCard/WordCard";
import InputField from "../../InputField/InputField";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";
import WarningMessage from "../../WarningMessage/WarningMessage";

import { LearningContext } from "../../../contexts/LearningContext";

import { editWord } from "../../../services/editWord";

export default function QuestionModeCard({ task, totalWorsArray }) {
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
    setReaction("It's okay, try to remember: ");

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

  const handleSubmit = event => {
    const noTranslation = translationInput === "";

    event.preventDefault();
    setErrorMessage("");

    if (noTranslation) {
      setErrorMessage("Please, enter the translation");
      return;
    }

    const rightTranslation = translation === translationInput;

    if (rightTranslation) {
      setIsCorrectGuess(true);
      setBorderColor("green");
      setReaction("CORRECT");

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
      setReaction("INCORRECT");

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

  return (
    <form onSubmit={handleSubmit} className={Styles.QuestionCardContainer}>
      <div className={Styles.header}>
        <h2>{task}</h2>

        <SecondaryButton
          type="button"
          backgroundColor="#f4f4f4"
          buttonMessage="I don't remember"
          onClick={handleDoNotKnowClick}
        />
      </div>

      <WarningMessage warnMessage={errorMessage} />

      <div className={Styles.WordCardsContainer}>
        <WordCard>
          <h1>{currentWord}</h1>
        </WordCard>

        <WordCard>
          <InputField
            placeholder="Enter translation"
            name="translationInput"
            value={translationInput}
            onChange={handleChange}
            type="text"
          />
        </WordCard>
      </div>

      <PrimaryButton
        type="submit"
        value="submit"
        buttonMessage="CHECK THE ANSWER"
      />
    </form>
  );
}
