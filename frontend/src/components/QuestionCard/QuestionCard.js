import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { LearningContext } from "../../contexts/LearningContext";

import Styles from "./QuestionCard.module.scss";
import arrowSvg from "../../assets/img/arrow_back.svg";

import WordCard from "./WordCard/WordCard";
import InputField from "../InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import ConfirmationCard from "../ConfirmationCard/ConfirmationCard";
import CongratsPage from "../../pages/CongratsPage/CongratsPage";

export default function QuestionCard({ task, word, totalWorsArray }) {
  const [values, handleChange] = useForm({
    translation: ""
  });

  const { wordCount, setWordCount } = useContext(LearningContext);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCongratilationPage, setShowCongratilationPage] = useState(false);

  const history = useHistory();

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (wordCount < totalWorsArray.length - 1) {
      setWordCount(wordCount + 1);
    } else {
      setWordCount(0);
      setShowCongratilationPage(true);
    }
  };

  if (showCongratilationPage) return <CongratsPage />;

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

      <div className={Styles.header}>
        <h2>{task}</h2>
        <SecondaryButton
          backgroundColor="#f4f4f4"
          buttonMessage="I don't remember"
        />
      </div>
      <div className={Styles.WordCardsContainer}>
        <WordCard>
          <h1>{word}</h1>
        </WordCard>

        <WordCard>
          <InputField
            placeholder="Enter translation"
            name="translation"
            value={values.translation}
            onChange={handleChange}
            type="text"
            autocomplete="off"
          />
        </WordCard>
      </div>
      <PrimaryButton buttonMessage="CHECK THE ANSWER" />
    </form>
  );
}
