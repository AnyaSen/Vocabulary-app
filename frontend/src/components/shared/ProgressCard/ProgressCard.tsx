import React, { ReactElement } from "react";

import Styles from "./ProgressCard.module.scss";
import ProgressCardRow from "./ProgressCardRow";

interface Props {
  newWordsNum: number;
  learningWordsNum: number;
  learnedWordsNum: number;
}

export default function ProgressCard({
  newWordsNum,
  learningWordsNum,
  learnedWordsNum
}: Props): ReactElement {
  return (
    <table className={Styles.ProgressCard} data-testid="progress-card">
      <caption className={Styles.header}>PROGRESS</caption>
      <tbody data-testid="progress-table-body">
        <ProgressCardRow wordType="New:" number={newWordsNum} />
        <ProgressCardRow wordType="Learning:" number={learningWordsNum} />
        <ProgressCardRow wordType="Learned:" number={learnedWordsNum} />
      </tbody>
    </table>
  );
}
