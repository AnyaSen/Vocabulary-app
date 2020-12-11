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
      <p className={Styles.ConfirmationCardQuestion}>
        {confQuestion}
        <span>{confQuestionSpan}</span>
      </p>

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
