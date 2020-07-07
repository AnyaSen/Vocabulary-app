import React from "react";

import Styles from "./InstructionsCard.module.scss";

export default function InstructionsCard({
  text,
  textafterBreak,
  instructionNumber
}) {
  return (
    <div className={Styles.InstructionsCardContainer}>
      <div className={Styles.InstructionsNumber}>
        <span>{instructionNumber}</span>
      </div>
      <div className={Styles.InstructionsCard}>
        {text}
        <br />
        {textafterBreak}
      </div>
    </div>
  );
}
