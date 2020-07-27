import React from "react";

import Styles from "./ConfirmationCard.module.scss";

import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

export default function ConfirmationCard({
  confQuestion,
  confAnswerOne,
  confAnswerTwo,
  answerOneOnClick,
  answerTwoOnClick
}) {
  return (
    <div className={Styles.ConfirmationCard}>
      <p className={Styles.ConfirmationCardQuestion}>{confQuestion}</p>

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
