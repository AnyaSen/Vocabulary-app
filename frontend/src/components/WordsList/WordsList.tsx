import React, { useState, ReactElement } from "react";

import Styles from "./WordsList.module.scss";

import WordPair from "./WordPair";
import ArrowUp from "../Buttons/ArrowUp";

interface Props {
  wordsArray: Array<{
    newlyAdded: boolean;
    learning: boolean;
    learned: boolean;
    _id: string;
    foreignWord: string;
    translation: string;
    creator: string;
  }>;

  noWordsMessage: string;
}

export default function WordsList({
  wordsArray,
  noWordsMessage
}: Props): ReactElement {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);

  if (wordsArray.length === 0)
    return (
      <div className={Styles.WordsList}>
        <p>{noWordsMessage}</p>
      </div>
    );

  const lowerCaseWord = word => {
    if (word) {
      return word.toLowerCase();
    }
  };

  return (
    <>
      <div className={Styles.WordsList}>
        {wordsArray.map(word => {
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
              word={lowerCaseWord(foreignWord)}
              transaltion={lowerCaseWord(translation)}
              key={_id}
              ID={_id}
              newlyAdded={newlyAdded}
              learning={learning}
              learned={learned}
            />
          );
        })}
      </div>
      {wordsArray.length > 10 && <ArrowUp onClick={scrollTop} />}
    </>
  );
}
