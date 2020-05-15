import React from "react";

import Styles from "./WordsList.module.scss";

import WordPair from "../WordPair/WordPair";

export default function WordsList({ wordsArray, noWordsMessage }) {
  return (
    <div className={Styles.WordPairContainer}>
      {wordsArray.length !== 0 ? (
        wordsArray.map(word => {
          return (
            <WordPair
              word={word.foreignWord.toLowerCase()}
              transaltion={word.translation.toLowerCase()}
              key={word._id}
              ID={word._id}
            />
          );
        })
      ) : (
        <p>{noWordsMessage}</p>
      )}
    </div>
  );
}
