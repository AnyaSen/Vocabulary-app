import React from "react";

import Styles from "./SecondaryButton.module.scss";

export default function SecondaryButton({
  buttonMessage,
  onClick,
  type,
  value,
  textColor,
  backgroundColor
}) {
  return (
    <button
      style={{ color: textColor, backgroundColor: backgroundColor }}
      onClick={onClick}
      type={type}
      value={value}
      className={Styles.SecondaryButton}
    >
      {buttonMessage}
    </button>
  );
}
