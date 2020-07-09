import React from "react";

import Styles from "./WordsList.module.scss";

import WordPair from "./WordPair/WordPair";

export default function WordsList({ wordsArray, noWordsMessage }) {
  return (
    <div className={Styles.WordPairContainer}>
      {wordsArray.length !== 0 ? (
        wordsArray.map(word => {
          const {
            foreignWord,
            translation,
            _id,
            newlyAdded,
            learning,
            learned
          } = word;
          return (
            <WordPair
              word={foreignWord.toLowerCase()}
              transaltion={translation.toLowerCase()}
              key={_id}
              ID={_id}
              newlyAdded={newlyAdded}
              learning={learning}
              learned={learned}
            />
          );
        })
      ) : (
        <p>{noWordsMessage}</p>
      )}
    </div>
  );
}
