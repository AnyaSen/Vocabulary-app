import React, { useState, ReactElement, useContext } from "react";

import Styles from "./WordsList.module.scss";

import { lowerCaseWord } from "../../services/lowerCase";
import { ErrorContext } from "../../contexts/ErrorContext";

import WordPair from "./WordPair";
import ArrowUp from "../Buttons/ArrowUp";
import Loader from "../shared/Loader";
import ErrorCard from "../ErrorCard";
import PrimaryButton from "../Buttons/PrimaryButton";

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

  const { isVocabularyError } = useContext(ErrorContext);

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

  if (isVocabularyError) return <ErrorCard />;

  if (wordsArray.length === 0)
    return (
      <div className={Styles.WordsList}>
        <p>{noWordsMessage}</p>
      </div>
    );

  return (
    <>
      <div className={Styles.WordsList}>
        {isVocabularyError ? (
          <Loader small />
        ) : (
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
                word={lowerCaseWord(foreignWord)}
                transaltion={lowerCaseWord(translation)}
                key={_id}
                ID={_id}
                newlyAdded={newlyAdded}
                learning={learning}
                learned={learned}
              />
            );
          })
        )}
      </div>
      {wordsArray.length > 10 && <ArrowUp onClick={scrollTop} />}
    </>
  );
}
