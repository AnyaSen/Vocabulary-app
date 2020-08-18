import React, { ReactElement, useContext } from "react";

import Styles from "./ErrorSmall.module.scss";

import typography from "../../typography/typography.json";
import { LanguageContext } from "../../contexts/LanguageContext";

interface Props {
  onClick: () => void;
}

export default function ErrorSmall({ onClick }: Props): ReactElement {
  const { language } = useContext(LanguageContext);

  const { error } = typography[language].shared;
  return (
    <div className={Styles.ErrorSmall}>
      <p>{error}</p>

      <div onClick={onClick}>x</div>
    </div>
  );
}
