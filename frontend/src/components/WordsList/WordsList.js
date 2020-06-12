import React from "react";

import Styles from "./WordsList.module.scss";

import WordPair from "../WordPair/WordPair";

export default function WordsList({ wordsArray, noWordsMessage }) {
  return (
    <div className={Styles.WordPairContainer}>
      {wordsArray.length !== 0 ? (
        wordsArray.map(word => {
          const { foreignWord, translation, _id } = word;
          return (
            <WordPair
              word={foreignWord.toLowerCase()}
              transaltion={translation.toLowerCase()}
              key={_id}
              ID={_id}
            />
          );
        })
      ) : (
        <p>{noWordsMessage}</p>
      )}
    </div>
  );
}
