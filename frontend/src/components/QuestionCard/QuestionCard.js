import React, { useContext, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import { LearningContext } from "../../contexts/LearningContext";

import Styles from "./QuestionCard.module.scss";
import arrowSvg from "../../assets/img/arrow_back.svg";

import CongratsPage from "../../pages/CongratsPage/CongratsPage";
import QuestionModeCard from "./QuestionModeCard/QuestionModeCard";
import AnswerModeCard from "./AnswerModeCard/AnswerModeCard";
import ConfirmationCard from "../ConfirmationCard/ConfirmationCard";

export default function QuestionCard({ task, totalWorsArray }) {
  const {
    isCorrectGuess,
    isIncorrectGuess,
    doNotKnowGuess,
    showCongratilationPage
  } = useContext(LearningContext);

  const isAnswerMode = isCorrectGuess || isIncorrectGuess || doNotKnowGuess;

  const [showConfirmation, setShowConfirmation] = useState(false);

  const history = useHistory();

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const confitmationCard = useRef();

  const handleClick = e => {
    if (!e.composedPath().includes(confitmationCard.current)) {
      setShowConfirmation(false);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div>
      {!showCongratilationPage &&
        (showConfirmation ? (
          <div ref={confitmationCard}>
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
          </div>
        ) : (
          <div className={Styles.arrow}>
            <img src={arrowSvg} alt="Go Back" onClick={handleConfirmation} />
          </div>
        ))}
      {showCongratilationPage && (
        <CongratsPage numberOfReviewedWords={totalWorsArray.length} />
      )}
      {isAnswerMode ? (
        <AnswerModeCard totalWorsArray={totalWorsArray} />
      ) : (
        <QuestionModeCard task={task} totalWorsArray={totalWorsArray} />
      )}
    </div>
  );
}
