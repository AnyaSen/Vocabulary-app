import React, { useState, useContext } from "react";

import Styles from "./AddWordsForm.module.scss";

import { createWord } from "../../services/createWord";
import { WordsContext } from "../../contexts/WordsContext";

import InputField from "../InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

export default function AddWordsForm() {
  const { setWordsData } = useContext(WordsContext);
  const [inputWord, setInputWord] = useState("");
  const [inputTranslation, setInputTranslation] = useState("");

  const handleWordInputChange = event => {
    setInputWord(event.target.value);
  };

  const handleTranslationInputChange = event => {
    setInputTranslation(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const wordsURL = "/words";
    createWord(wordsURL, {
      foreignWord: inputWord,
      translation: inputTranslation
    });

    setInputTranslation("");
    setInputWord("");
    setWordsData();
  };

  return (
    <div className={Styles.AddWordsForm}>
      <h2>ADD VOCABULARY</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          placeholder="Foreing word"
          name="word"
          value={inputWord}
          onChange={handleWordInputChange}
        />

        <InputField
          placeholder="Translation"
          name="translation"
          value={inputTranslation}
          onChange={handleTranslationInputChange}
        />

        <PrimaryButton type="submit" value="submit" buttonMessage="ADD" />
      </form>
    </div>
  );
}
