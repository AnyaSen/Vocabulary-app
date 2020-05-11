import React, { useContext, useEffect } from "react";

import Styles from "./WordsList.module.scss";

import WordPair from "../WordPair/WordPair";

import { WordsContext } from "../../contexts/WordsContext";

export default function WordsList() {
  const { wordsArr } = useContext(WordsContext);

  return (
    <div className={Styles.WordPairContainer}>
      {wordsArr.length !== 0 ? (
        wordsArr.map((word, id) => {
          return (
            <WordPair
              word={word.foreignWord}
              transaltion={word.translation}
              key={id}
              ID={word._id}
              wordObject={word}
            />
          );
        })
      ) : (
        <p>Here will be your words.</p>
      )}
    </div>
  );
}
