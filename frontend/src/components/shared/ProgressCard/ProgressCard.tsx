import React, { ReactElement, useContext } from "react";

import Styles from "./ProgressCard.module.scss";
import ProgressCardRow from "./ProgressCardRow";

import typography from "../../../typography/typography.json";
import { LanguageContext } from "../../../contexts/LanguageContext";

interface Props {
  newWordsNum: number;
  learningWordsNum: number;
  learnedWordsNum: number;
}

export default function ProgressCard({
  newWordsNum,
  learningWordsNum,
  learnedWordsNum
}: Props): ReactElement {
  const { language } = useContext(LanguageContext);

  const { new_type, learning_type, learned_type } = typography[language].shared;
  const { progress } = typography[language].ProgressPage;

  return (
    <table className={Styles.ProgressCard} data-testid="progress-card">
      <caption className={Styles.header}>{progress}</caption>
      <tbody data-testid="progress-table-body">
        <ProgressCardRow wordType={new_type} number={newWordsNum} />
        <ProgressCardRow wordType={learning_type} number={learningWordsNum} />
        <ProgressCardRow wordType={learned_type} number={learnedWordsNum} />
      </tbody>
    </table>
  );
}
