import React from "react";

import Styles from "./SecondaryButton.module.scss";

export default function SecondaryButton({
  buttonMessage,
  onClick,
  type,
  value,
  buttonColor
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      value={value}
      className={
        buttonColor === "pink"
          ? Styles.SecondaryButtonPink
          : Styles.SecondaryButtonWhite
      }
    >
      {buttonMessage}
    </button>
  );
}
