import React, { useContext } from "react";

import Styles from "./BrowseVocabulary.module.scss";

import { BrowseContext } from "../../contexts/BrowseContext";
import { WordsContext } from "../../contexts/WordsContext";
import { filterVocabulary } from "../../services/filterVocabulary";

import InputField from "../InputField/InputField";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import { useForm } from "../../hooks/useForm";

export default function BrowseVocabulary() {
  const [values, handleChange, clearValues] = useForm({
    searchWord: ""
  });

  const { setModifiedWordsArr, isBrowsingMode, setIsBrowsingMode } = useContext(
    BrowseContext
  );
  const { setWordsData } = useContext(WordsContext);

  const { wordsArr } = useContext(WordsContext);

  const searchAndUpdate = event => {
    event.preventDefault();

    setIsBrowsingMode(true);

    const filteredVocabularyArray = filterVocabulary(
      wordsArr,
      values.searchWord
    );
    setModifiedWordsArr(filteredVocabularyArray);
  };

  const handleShowAll = () => {
    setIsBrowsingMode(false);

    clearValues();

    setWordsData();
  };

  return (
    <div className={Styles.BrowseVocabulary}>
      <form className={Styles.BrowseVocabularyForm} onSubmit={searchAndUpdate}>
        <InputField
          type="text"
          name="searchWord"
          placeholder="Enter a word"
          value={values.searchWord}
          onChange={handleChange}
        />

        <SecondaryButton type="submit" value="submit" buttonMessage="Search" />
      </form>

      {isBrowsingMode ? (
        <div className={Styles.showAllButton}>
          <SecondaryButton
            buttonMessage="Show All"
            onClick={handleShowAll}
            textColor="white"
            backgroundColor="#f79090"
          />
        </div>
      ) : null}
    </div>
  );
}
