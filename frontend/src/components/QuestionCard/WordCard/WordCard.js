import React from "react";

import Styles from "./WordCard.module.scss";

export default function WordCard({ children, borderColor }) {
  return (
    <div
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
