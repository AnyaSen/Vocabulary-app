import React, { useContext, ReactElement } from "react";

import Styles from "./WordPairInfoCard.module.scss";
import closeSvg from "../../assets/img/close.svg";

import { BrowseContext } from "../../contexts/BrowseContext";

export default function WordPairCard(): ReactElement {
  const {
    setIsWordPairOpen,
    wordPairForeignWord,
    wordPairTranslation,
    wordPairType
  } = useContext(BrowseContext);

  return (
    <div className={Styles.WordPairInfoCard} data-testid="word-pair-info-card">
      <img
        alt="close"
        src={closeSvg}
        onClick={() => setIsWordPairOpen(false)}
      />

      <p>{wordPairType}</p>
      <h2>{wordPairForeignWord}</h2>
      <h2>{wordPairTranslation}</h2>
    </div>
  );
}
