import React, { useContext } from "react";

import Styles from "./WordsList.module.scss";

import WordPair from "../WordPair/WordPair";

import { WordsContext } from "../../contexts/WordsContext";

export default function WordsList() {
  const { wordsArr } = useContext(WordsContext);

  return (
    <div className={Styles.WordPairContainer}>
      {wordsArr.length !== 0 ? (
        wordsArr.map((word, index) => {
          return (
            <WordPair
              word={word.foreignWord.toLowerCase()}
              transaltion={word.translation.toLowerCase()}
              key={index}
              ID={word._id}
            />
          );
        })
      ) : (
        <p>Here will be your words.</p>
      )}
    </div>
  );
}
