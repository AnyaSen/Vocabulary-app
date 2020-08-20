import React, { ReactElement } from "react";

import Styles from "./InstructionsCard.module.scss";

interface Props {
  text: string;
  textafterBreak?: string;
  instructionNumber: number | string;
}

export default function InstructionsCard({
  text,
  textafterBreak,
  instructionNumber
}: Props): ReactElement {
  return (
    <div
      className={Styles.InstructionsCardContainer}
      data-testid="instructions-card-container"
    >
      <div className={Styles.InstructionsNumber}>
        <span data-testid="instructions-number">{instructionNumber}</span>
      </div>
      <div className={Styles.InstructionsCard}>
        {text}
        <br />
        {textafterBreak}
      </div>
    </div>
  );
}
