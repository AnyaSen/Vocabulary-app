import React from "react";

import Styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({
  buttonMessage,
  type,
  value,
  buttonColor
}) {
  return (
    <button
      type={type}
      value={value}
      className={
        buttonColor === "white"
          ? Styles.PrimaryButtonWhite
          : Styles.PrimaryButtonPink
      }
    >
      {buttonMessage}
    </button>
  );
}
