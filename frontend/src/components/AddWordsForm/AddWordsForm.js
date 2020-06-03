import React, { useContext } from "react";

import Styles from "./AddWordsForm.module.scss";

import { createWord } from "../../services/createWord";
import { WordsContext } from "../../contexts/WordsContext";
import { useForm } from "../../hooks/useForm";

import InputField from "../InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

export default function AddWordsForm() {
  const { setWordsData } = useContext(WordsContext);

  const [values, handleChange, clearValues] = useForm({
    word: "",
    translation: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    const wordsURL = "/words";

    createWord(wordsURL, {
      foreignWord: values.word,
      translation: values.translation
    });

    clearValues();

    setWordsData();
  };

  return (
    <div className={Styles.AddWordsForm}>
      <h2>ADD VOCABULARY</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          placeholder="Foreing word"
          name="word"
          value={values.word}
          onChange={handleChange}
        />

        <InputField
          placeholder="Translation"
          name="translation"
          value={values.translation}
          onChange={handleChange}
        />

        <PrimaryButton type="submit" value="submit" buttonMessage="ADD" />
      </form>
    </div>
  );
}
