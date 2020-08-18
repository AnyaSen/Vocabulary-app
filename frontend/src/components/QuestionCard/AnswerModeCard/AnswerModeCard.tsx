import React, { useContext, ReactElement } from "react";

import Styles from "../QuestionCard.module.scss";
import correctEmojiSvg from "../../../assets/img/correctEmoji.svg";
import incorrectEmojiSvg from "../../../assets/img/incorrectEmoji.svg";

import LearningWordCard from "../../shared/LearningWordCard";
import SecondaryButton from "../../Buttons/SecondaryButton";

import { LearningContext } from "../../../contexts/LearningContext";
import { LanguageContext } from "../../../contexts/LanguageContext";
import typography from "../../../typography/typography.json";
import { lowerCaseWord } from "../../../services/lowerCase";

interface Props {
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

export default function AnswerModeCard({
  totalWorsArray
}: Props): ReactElement {
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
    <div
      className={Styles.QuestionCardContainer}
      data-testid="question-card-container"
    >
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
        <LearningWordCard>
          <h2>{currentWord.toLowerCase()}</h2>
        </LearningWordCard>

        <LearningWordCard borderColor={borderColor}>
          <h2>{lowerCaseWord(translation)}</h2>
        </LearningWordCard>
      </div>

      <SecondaryButton
        type="button"
        buttonMessage={continue_}
        onClick={handleContinueClick}
      />
    </div>
  );
}
