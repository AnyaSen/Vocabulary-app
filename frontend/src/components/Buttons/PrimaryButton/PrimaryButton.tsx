import React, { ReactElement } from "react";

import Styles from "./PrimaryButton.module.scss";

interface Props {
  buttonMessage: string;
  value?: string;
  buttonColor?: string;
  type?: "button";
}

export default function PrimaryButton({
  buttonMessage,
  type,
  value,
  buttonColor
}: Props): ReactElement {
  return (
    <button
      data-testid="button"
      value={value}
      type={type}
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
