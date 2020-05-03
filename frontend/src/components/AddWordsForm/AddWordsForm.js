import React, { useState } from "react";

import { postData } from "../../services/postData";

import InputField from "../InputField/InputField";

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

      <button type="submit" value="submit">
        Add
      </button>
    </form>
  );
}
