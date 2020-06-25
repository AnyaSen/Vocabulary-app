import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { editWord } from "../../services/editWord";

import { LearningContext } from "../../contexts/LearningContext";

import Styles from "./QuestionCard.module.scss";
import arrowSvg from "../../assets/img/arrow_back.svg";
import correctEmojiSvg from "../../assets/img/correctEmoji.svg";
import incorrectEmojiSvg from "../../assets/img/incorrectEmoji.svg";

import WordCard from "./WordCard/WordCard";
import InputField from "../InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import ConfirmationCard from "../ConfirmationCard/ConfirmationCard";
import CongratsPage from "../../pages/CongratsPage/CongratsPage";
import WarningMessage from "../WarningMessage/WarningMessage";

export default function QuestionCard({ task, currentWord, totalWorsArray }) {
  const [values, handleChange, clearValues] = useForm({
    translationInput: ""
  });

  const { translationInput } = values;

  const { wordCount, setWordCount } = useContext(LearningContext);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCongratilationPage, setShowCongratilationPage] = useState(false);

  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [isIncorrectGuess, setIsIncorrectGuess] = useState(false);
  const [doNotKnowGuess, setDoNotKnowGuess] = useState(false);

  const [borderColor, setBorderColor] = useState("");
  const [reaction, setReaction] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const isAnswerMode = isCorrectGuess || isIncorrectGuess || doNotKnowGuess;

  const history = useHistory();

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleDoNotKnowClick = () => {
    setErrorMessage("");
    setDoNotKnowGuess(true);

    setBorderColor("yellow");
    setReaction("It's okay, try to remember: ");
  };

  const handleContinueClick = () => {
    setIsCorrectGuess(false);
    setDoNotKnowGuess(false);
    setIsIncorrectGuess(false);

    setReaction("");
    setBorderColor("");

    clearValues();

    if (wordCount < totalWorsArray.length - 1) {
      setWordCount(wordCount + 1);
    } else {
      setWordCount(0);

      setShowCongratilationPage(true);
    }
  };

  const noTranslation = translationInput === "";

  const { newlyAdded, learned, _id, translation } = totalWorsArray[wordCount];

  const handleSubmit = event => {
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
    } else {
      setIsIncorrectGuess(true);
      setBorderColor("red");
      setReaction("INCORRECT");
    }

    if (newlyAdded || learned) {
      editWord({ newlyAdded: "false", learning: "true" }, _id);

      return;
    }
  };

  if (showCongratilationPage)
    return <CongratsPage numberOfReviewedWords={totalWorsArray.length} />;

  return (
    <form onSubmit={handleSubmit} className={Styles.QuestionCardContainer}>
      {showConfirmation ? (
        <ConfirmationCard
          confQuestion="Are you sure you want to quit learning?"
          confAnswerOne="YES"
          confAnswerTwo="NO"
          answerOneOnClick={() => {
            history.push("/learn");
          }}
          answerTwoOnClick={() => {
            setShowConfirmation(false);
          }}
        />
      ) : (
        <div className={Styles.arrow}>
          <img src={arrowSvg} alt="Go Back" onClick={handleConfirmation} />
        </div>
      )}

      {isAnswerMode ? (
        <h2 className={Styles.headerWithImg}>
          {reaction}{" "}
          {isCorrectGuess ? (
            <img src={correctEmojiSvg} />
          ) : isIncorrectGuess ? (
            <img src={incorrectEmojiSvg} />
          ) : null}
        </h2>
      ) : (
        <div className={Styles.header}>
          <h2>{task}</h2>

          <SecondaryButton
            type="button"
            backgroundColor="#f4f4f4"
            buttonMessage="I don't remember"
            onClick={handleDoNotKnowClick}
          />
        </div>
      )}

      <WarningMessage warnMessage={errorMessage} />

      <div className={Styles.WordCardsContainer}>
        <WordCard>
          <h1>{currentWord}</h1>
        </WordCard>

        {isAnswerMode ? (
          <WordCard borderColor={borderColor}>
            <h1>{translation}</h1>
          </WordCard>
        ) : (
          <WordCard>
            <InputField
              placeholder="Enter translation"
              name="translationInput"
              value={translationInput}
              onChange={handleChange}
              type="text"
              autocomplete="off"
            />
          </WordCard>
        )}
      </div>
      {!isAnswerMode && (
        <PrimaryButton
          type="submit"
          value="submit"
          buttonMessage="CHECK THE ANSWER"
        />
      )}
      {isAnswerMode && (
        <SecondaryButton
          type="button"
          backgroundColor="#f4f4f4"
          buttonMessage="Continue"
          onClick={handleContinueClick}
        />
      )}
    </form>
  );
}
