import React, { ReactElement } from "react";

import Styles from "./SecondaryButton.module.scss";

interface Props {
  buttonMessage: string;
  value?: string;
  buttonColor?: string;
  type?: "button" | "submit";
  onClick: () => {};
}

export default function SecondaryButton({
  buttonMessage,
  onClick,
  type,
  value,
  buttonColor
}: Props): ReactElement {
  return (
    <button
      data-testid="button"
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
