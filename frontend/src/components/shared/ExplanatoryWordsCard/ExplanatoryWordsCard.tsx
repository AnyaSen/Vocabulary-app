import React, { ReactElement, useContext } from "react";

import Styles from "./ExplanatoryWordsCard.module.scss";

import typography from "../../../typography/typography.json";
import { LanguageContext } from "../../../contexts/LanguageContext";

export default function ExplanatoryWordsCard(): ReactElement {
  const { language } = useContext(LanguageContext);

  const { new_type, learning_type, learned_type } = typography[language].shared;
  const {
    new_type_explanation,
    learning_type_explanation,
    learned_type_explanation
  } = typography[language].ExplanatoryWordsCard;
  return (
    <div className={Styles.ExplanatoryWordsCard} data-testid="explanatory-card">
      <p className={Styles.header}>WORDS</p>

      <p>
        <span>{new_type}</span> - {new_type_explanation}
      </p>
      <p>
        <span>{learning_type}</span> - {learning_type_explanation}
      </p>
      <p>
        <span>{learned_type}</span> - {learned_type_explanation}
      </p>
    </div>
  );
}
