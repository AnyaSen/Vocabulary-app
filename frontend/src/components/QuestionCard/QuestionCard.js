import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Styles from "./QuestionCard.module.scss";
import arrowSvg from "../../assets/img/arrow_back.svg";

import WordCard from "./WordCard/WordCard";

import { useForm } from "../../hooks/useForm";
import InputField from "../InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import ConfirmationCard from "../ConfirmationCard/ConfirmationCard";

export default function QuestionCard({ task, word }) {
  const [values, handleChange] = useForm({
    translation: ""
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const history = useHistory();

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  return (
    <div className={Styles.QuestionCardContainer}>
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
          />
        </WordCard>
      </div>
      <PrimaryButton buttonMessage="CHECK THE ANSWER" />
    </div>
  );
}
