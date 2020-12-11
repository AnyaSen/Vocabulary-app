import React, { ReactElement } from "react";

import Styles from "./ConfirmationCard.module.scss";

import SecondaryButton from "../../Buttons/SecondaryButton";

interface Props {
  confQuestion: string;
  confQuestionSpan?: string;
  confAnswerOne: string;
  confAnswerTwo: string;
  answerOneOnClick: () => void;
  answerTwoOnClick: () => void;
}

export default function ConfirmationCard({
  confQuestion,
  confQuestionSpan,
  confAnswerOne,
  confAnswerTwo,
  answerOneOnClick,
  answerTwoOnClick
}: Props): ReactElement {
  return (
    <div className={Styles.ConfirmationCard}>
      <div className={Styles.QuestionContainer}>
        <p>{confQuestion}</p>
        <p className={Styles.ConfirmationCardNotice}>{confQuestionSpan}</p>
      </div>

      <div>
        <SecondaryButton
          buttonMessage={confAnswerOne}
          onClick={answerOneOnClick}
          buttonColor="pink"
        />
        <SecondaryButton
          onClick={answerTwoOnClick}
          buttonMessage={confAnswerTwo}
        />
      </div>
    </div>
  );
}
