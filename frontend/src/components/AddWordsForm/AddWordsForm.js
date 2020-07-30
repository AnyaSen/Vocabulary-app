import React, { useContext, useState } from "react";

import Styles from "./AddWordsForm.module.scss";

import { createWord } from "../../services/createWord";
import { WordsContext } from "../../contexts/WordsContext";
import { useForm } from "../../hooks/useForm";

import InputField from "../InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/";
import WarningMessage from "../shared/WarningMessage/WarningMessage";

export default function AddWordsForm() {
  const { setWordsData } = useContext(WordsContext);

  const [values, handleChange, clearValues] = useForm({
    foreignWord: "",
    translation: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { foreignWord, translation } = values;

  const handleSubmit = e => {
    e.preventDefault();

    setErrorMessage("");

    const isForeignWordEmpty = foreignWord === "";
    const isTranslationEmpty = translation === "";

    const wordsURL = "/words";

    if (isForeignWordEmpty || isTranslationEmpty) {
      setErrorMessage("All fields should be filled");
    } else {
      createWord(wordsURL, {
        foreignWord,
        translation
      });

      clearValues();

      setWordsData();
    }
  };

  return (
    <div className={Styles.AddWordsForm}>
      <h2>ADD VOCABULARY</h2>

      <WarningMessage warnMessage={errorMessage} />

      <form onSubmit={handleSubmit} className={Styles.form}>
        <InputField
          placeholder="Foreing word"
          name="foreignWord"
          value={foreignWord}
          onChange={handleChange}
        />

        <InputField
          placeholder="Translation"
          name="translation"
          value={translation}
          onChange={handleChange}
        />

        <PrimaryButton type="submit" value="submit" buttonMessage="ADD" />
      </form>
    </div>
  );
}
