import React, {
  useContext,
  useState,
  useEffect,
  FormEvent,
  ReactElement
} from "react";

import Styles from "./AddWordsForm.module.scss";

import { createWord } from "../../services/createWord";
import { WordsContext } from "../../contexts/WordsContext";
import { useForm } from "../../hooks/useForm";

import InputField from "../InputField";
import PrimaryButton from "../Buttons/PrimaryButton";
import WarningMessage from "../shared/WarningMessage";

export default function AddWordsForm(): ReactElement {
  const { setWordsData, totalWordsLength } = useContext(WordsContext);

  const [values, handleChange, clearValues] = useForm({
    foreignWord: "",
    translation: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { foreignWord, translation } = values;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

  useEffect(() => {
    setWordsData();
  }, [totalWordsLength]);

  return (
    <div className={Styles.AddWordsForm} data-testid="add-words-form-container">
      <h2>ADD VOCABULARY</h2>

      <WarningMessage warnMessage={errorMessage} />

      <form
        onSubmit={handleSubmit}
        className={Styles.form}
        data-testid="add-words-form"
      >
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
