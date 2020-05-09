import React, { useContext } from "react";

import Styles from "./WordsList.module.scss";

import WordPair from "../WordPair/WordPair";

import { WordsContext } from "../../contexts/WordsContext";

export default function WordsList() {
  const { wordsArr } = useContext(WordsContext);

  return (
    <div className={Styles.WordPairContainer}>
      {wordsArr.map((word, id) => {
        return (
          <WordPair
            word={word.foreignWord}
            transaltion={word.translation}
            key={id}
          />
        );
      })}
    </div>
  );
}
