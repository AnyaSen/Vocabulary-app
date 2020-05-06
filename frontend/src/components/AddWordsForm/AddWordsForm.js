import React, { useState } from "react";

import Styles from "./AddWordsForm.module.scss";

import { postData } from "../../services/postData";

import InputField from "../InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

export default function AddWordsForm() {
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
    postData(wordsURL, {
      foreignWord: inputWord,
      translation: inputTranslation
    });

    setInputTranslation("");
    setInputWord("");
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

        <PrimaryButton type="submit" value="submit" buttonMessage="Add" />
      </form>
    </div>
  );
}
