import React, { useContext } from "react";

import Styles from "./WordPairCard.module.scss";
import closeSvg from "../../../assets/img/close.svg";

import { BrowseContext } from "../../../contexts/BrowseContext";

export default function WordPairCard() {
  const {
    setIsWordPairOpen,
    wordPairForeignWord,
    wordPairTranslation,
    wordPairType
  } = useContext(BrowseContext);

  return (
    <div className={Styles.WordPairCard}>
      <div>
        <img
          alt="close"
          src={closeSvg}
          onClick={() => setIsWordPairOpen(false)}
        />
      </div>
      <p>{wordPairType}</p>
      <h2>{wordPairForeignWord}</h2>
      <h2>{wordPairTranslation}</h2>
    </div>
  );
}
