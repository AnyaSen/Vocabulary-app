import React from "react";

import Styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({
  buttonMessage,
  type,
  value,
  textColor,
  backgroundColor
}) {
  return (
    <button
      type={type}
      value={value}
      className={Styles.PrimaryButton}
      style={{ color: textColor, backgroundColor: backgroundColor }}
    >
      {buttonMessage}
    </button>
  );
}
