import React, { useContext, useState } from "react";

import Styles from "./BrowseVocabulary.module.scss";

import { BrowseContext } from "../../contexts/BrowseContext";
import { WordsContext } from "../../contexts/WordsContext";
import { filterVocabulary } from "../../services/filterVocabulary";

import InputField from "../InputField/InputField";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import { useForm } from "../../hooks/useForm";
import WarningMessage from "../shared/WarningMessage/WarningMessage";

export default function BrowseVocabulary() {
  const [values, handleChange, clearValues] = useForm({
    searchWord: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { setModifiedWordsArr, isBrowsingMode, setIsBrowsingMode } = useContext(
    BrowseContext
  );
  const { setWordsData, wordsArr } = useContext(WordsContext);

  const { searchWord } = values;

  const searchAndUpdate = event => {
    event.preventDefault();

    const isFieldEmpty = searchWord === "";

    if (isFieldEmpty) {
      setErrorMessage("Start entering a word");
    } else {
      setErrorMessage("");
      setIsBrowsingMode(true);

      const filteredVocabularyArray = filterVocabulary(wordsArr, searchWord);
      setModifiedWordsArr(filteredVocabularyArray);
    }
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
          small
          type="text"
          name="searchWord"
          placeholder="Enter a word"
          value={searchWord}
          onChange={handleChange}
        />

        <SecondaryButton type="submit" value="submit" buttonMessage="Search" />
      </form>

      <WarningMessage warnMessage={errorMessage} />

      {isBrowsingMode && (
        <div className={Styles.showAllButton}>
          <SecondaryButton
            buttonMessage="Show All"
            onClick={handleShowAll}
            buttonColor="pink"
          />
        </div>
      )}
    </div>
  );
}
