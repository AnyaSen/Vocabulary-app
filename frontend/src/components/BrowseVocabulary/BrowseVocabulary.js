import React, { useState, useContext } from "react";

import Styles from "./BrowseVocabulary.module.scss";

import { BrowseContext } from "../../contexts/BrowseContext";
import { WordsContext } from "../../contexts/WordsContext";
import { filterVocabulary } from "../../services/filterVocabulary";

import InputField from "../InputField/InputField";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

export default function BrowseVocabulary() {
  const [searchWordInput, setSearchWordInput] = useState("");
  const { setModifiedWordsArr, isBrowsingMode, setIsBrowsingMode } = useContext(
    BrowseContext
  );

  const { wordsArr } = useContext(WordsContext);

  const searchAndUpdate = event => {
    event.preventDefault();

    setIsBrowsingMode(true);
    const filteredVocabularyArray = filterVocabulary(wordsArr, searchWordInput);
    setModifiedWordsArr(filteredVocabularyArray);

    setSearchWordInput("");
  };

  const handleSearchWordInputChange = event => {
    setSearchWordInput(event.target.value);
  };

  return (
    <div className={Styles.BrowseVocabulary}>
      <form className={Styles.BrowseVocabularyForm} onSubmit={searchAndUpdate}>
        <InputField
          type="text"
          placeholder="Enter a word"
          value={searchWordInput}
          onChange={handleSearchWordInputChange}
        />

        <SecondaryButton type="submit" value="submit" buttonMessage="Search" />
      </form>

      {isBrowsingMode ? (
        <div className={Styles.showAllButton}>
          <SecondaryButton
            buttonMessage="ShowAll"
            onClick={() => setIsBrowsingMode(false)}
          />
        </div>
      ) : null}
    </div>
  );
}
