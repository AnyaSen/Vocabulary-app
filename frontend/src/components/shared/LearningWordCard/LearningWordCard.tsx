import React from "react";

import Styles from "./LearningWordCard.module.scss";

interface Props {
  borderColor: string;
  children: React.ReactNode;
}

export default function LearningWordCard({ children, borderColor }: Props) {
  return (
    <div
      data-testid="word-card"
      className={
        borderColor === "green"
          ? Styles.LearningWordCardGreen
          : borderColor === "red"
          ? Styles.LearningWordCardRed
          : borderColor === "yellow"
          ? Styles.LearningWordCardYellow
          : Styles.LearningWordCard
      }
    >
      {children}
    </div>
  );
}
