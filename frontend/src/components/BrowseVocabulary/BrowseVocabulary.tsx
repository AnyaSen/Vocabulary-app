import React, { useContext, useState, ReactElement, FormEvent } from "react";

import Styles from "./BrowseVocabulary.module.scss";

import { BrowseContext } from "../../contexts/BrowseContext";
import { WordsContext } from "../../contexts/WordsContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import { filterVocabulary } from "../../services/filterVocabulary";
import typography from "../../typography/typography.json";

import InputField from "../InputField";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useForm } from "../../hooks/useForm";
import WarningMessage from "../shared/WarningMessage";

export default function BrowseVocabulary(): ReactElement {
  const { language } = useContext(LanguageContext);

  const { enter_a_word, search, start_entering_a_word, show_all } = typography[
    language
  ];

  const [values, handleChange, clearValues] = useForm({
    searchWord: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { setModifiedWordsArr, isBrowsingMode, setIsBrowsingMode } = useContext(
    BrowseContext
  );
  const { setWordsData, wordsArr } = useContext(WordsContext);

  const { searchWord } = values;

  const searchAndUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isFieldEmpty = searchWord === "";

    if (isFieldEmpty) {
      setErrorMessage(start_entering_a_word);
    } else {
      setErrorMessage("");
      setIsBrowsingMode(true);

      const filteredVocabularyArray = filterVocabulary(wordsArr, searchWord);
      setModifiedWordsArr(filteredVocabularyArray);
    }
  };

  const handleShowAll = () => {
    setIsBrowsingMode(false);
    setErrorMessage("");
    clearValues();

    setWordsData();
  };

  return (
    <div className={Styles.BrowseVocabulary} data-testid="browse-container">
      <form
        className={Styles.BrowseVocabularyForm}
        onSubmit={searchAndUpdate}
        data-testid="browse-form-container"
      >
        <InputField
          small
          type="text"
          name="searchWord"
          placeholder={enter_a_word}
          value={searchWord}
          onChange={handleChange}
        />

        <SecondaryButton type="submit" value="submit" buttonMessage={search} />
      </form>

      <WarningMessage warnMessage={errorMessage} />

      {isBrowsingMode && (
        <div className={Styles.showAllButton}>
          <SecondaryButton
            buttonMessage={show_all}
            onClick={handleShowAll}
            buttonColor="pink"
          />
        </div>
      )}
    </div>
  );
}
