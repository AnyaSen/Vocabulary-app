import React, { useContext } from "react";

import Styles from "../QuestionCard.module.scss";
import correctEmojiSvg from "../../../assets/img/correctEmoji.svg";
import incorrectEmojiSvg from "../../../assets/img/incorrectEmoji.svg";

import WordCard from "../WordCard/WordCard";
import SecondaryButton from "../../Buttons/SecondaryButton";

import { LearningContext } from "../../../contexts/LearningContext";
import { LanguageContext } from "../../../contexts/LanguageContext";
import typography from "../../../typography/typography.json";

export default function AnswerModeCard({ totalWorsArray }) {
  const { language } = useContext(LanguageContext);

  const { continue_ } = typography[language].shared;

  const {
    wordCount,
    currentWord,
    setWordCount,
    isCorrectGuess,
    setIsCorrectGuess,
    isIncorrectGuess,
    setIsIncorrectGuess,
    doNotKnowGuess,
    setDoNotKnowGuess,

    borderColor,
    setBorderColor,
    reaction,
    setReaction,
    setShowCongratilationPage,

    values,
    clearValues
  } = useContext(LearningContext);

  const { translationInput } = values;
  const { translation } = totalWorsArray[wordCount];

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
      setShowCongratilationPage(true);
      setWordCount(0);
    }
  };

  return (
    <div className={Styles.QuestionCardContainer}>
      <div className={Styles.headerWithImg}>
        <h2>{reaction}</h2>
        {!doNotKnowGuess && (
          <img
            src={isCorrectGuess ? correctEmojiSvg : incorrectEmojiSvg}
            alt="reaction emoji"
          />
        )}
      </div>

      {isIncorrectGuess && (
        <p className={Styles.wrongTranslation}>{translationInput}</p>
      )}

      <div className={Styles.WordCardsContainer}>
        <WordCard>
          <h2>{currentWord.toLowerCase()}</h2>
        </WordCard>

        <WordCard borderColor={borderColor}>
          <h2>{translation.toLowerCase()}</h2>
        </WordCard>
      </div>

      <SecondaryButton
        type="button"
        buttonMessage={continue_}
        onClick={handleContinueClick}
      />
    </div>
  );
}
