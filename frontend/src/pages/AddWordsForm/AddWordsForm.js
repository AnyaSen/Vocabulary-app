import React, { useState } from "react";

import { postData } from "../../services/postData";

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
    const wordsURL = "/words";
    e.preventDefault();

    postData(wordsURL, {
      foreignWord: inputWord,
      translation: inputTranslation
    });
    setInputTranslation("");
    setInputWord("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Foreing word"
        type="text"
        name="word"
        value={inputWord}
        onChange={handleWordInputChange}
      />
      <input
        placeholder="Translation"
        type="text"
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
