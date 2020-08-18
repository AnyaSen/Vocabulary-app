import React, { ReactElement, useContext } from "react";

import Styles from "./ErrorCard.module.scss";
import error from "../../assets/img/error.svg";

import typography from "../../typography/typography.json";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function ErrorCard(): ReactElement {
  const { language } = useContext(LanguageContext);

  const { sorry_error } = typography[language].shared;

  return (
    <div className={Styles.ErrorCard}>
      <img src={error} alt="Error" />
      <p>{sorry_error}</p>
    </div>
  );
}
