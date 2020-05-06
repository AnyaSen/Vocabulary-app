import React from "react";

import Styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({ buttonMessage, type, value }) {
  return (
    <button type={type} value={value} className={Styles.PrimaryButton}>
      {buttonMessage}
    </button>
  );
}
