import React from "react";

import Styles from "./SecondaryButton.module.scss";

export default function SecondaryButton({ buttonMessage, onClick }) {
  return (
    <button onClick={onClick} className={Styles.SecondaryButton}>
      {buttonMessage}
    </button>
  );
}
