import React from "react";

import Styles from "./ProgressCard.module.scss";
import ProgressCardRow from "./ProgressCardRow/ProgressCardRow";

export default function ProgressCard({
  totalWordsNum,
  newWordsNum,
  learningWordsNum,
  learnedWordsNum
}) {
  return (
    <div className={Styles.ProgressCard}>
      <p className={Styles.header}>PROGRESS</p>
      <table>
        <tbody>
          <ProgressCardRow wordType="Total:" number={totalWordsNum} />
          <ProgressCardRow wordType="New:" number={newWordsNum} />
          <ProgressCardRow wordType="Learning:" number={learningWordsNum} />
          <ProgressCardRow wordType="Learned:" number={learnedWordsNum} />
        </tbody>
      </table>
    </div>
  );
}
