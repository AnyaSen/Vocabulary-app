import React from "react";

import Styles from "./WordCard.module.scss";

interface Props {
  borderColor: string;
  children: React.ReactNode;
}

export default function WordCard({ children, borderColor }: Props) {
  return (
    <div
      data-testid="word-card"
      className={
        borderColor === "green"
          ? Styles.WordCardGreen
          : borderColor === "red"
          ? Styles.WordCardRed
          : borderColor === "yellow"
          ? Styles.WordCardYellow
          : Styles.WordCard
      }
    >
      {children}
    </div>
  );
}
