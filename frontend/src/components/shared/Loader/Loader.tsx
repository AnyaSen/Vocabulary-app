import React, { ReactElement, useContext } from "react";

import Styles from "./Loader.module.scss";

import { LanguageContext } from "../../../contexts/LanguageContext";
import typography from "../../../typography/typography.json";

interface Props {
  small?: boolean;
}

export default function Loader({ small }: Props): ReactElement {
  const { language } = useContext(LanguageContext);

  const { loading } = typography[language].shared;
  return (
    <div
      className={small ? Styles.smallLoader : Styles.Loader}
      data-testid="loader-container"
    >
      <div className={Styles.loadingDots} data-testid="loader">
        <div />
        <div />
        <div />
      </div>

      {!small && <p>{loading.toUpperCase()}</p>}
    </div>
  );
}
