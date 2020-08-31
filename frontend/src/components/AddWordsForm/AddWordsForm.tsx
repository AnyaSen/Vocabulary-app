import React, {
  useContext,
  useState,
  FormEvent,
  ReactElement,
  useRef,
  useEffect
} from "react";
import typography from "../../typography/typography.json";

import Styles from "./AddWordsForm.module.scss";

import { createWord } from "../../services/createWord";
import { WordsContext } from "../../contexts/WordsContext";
import { LanguageContext } from "../../contexts/LanguageContext";

import { useForm } from "../../hooks/useForm";

import InputField from "../InputField";
import PrimaryButton from "../Buttons/PrimaryButton";
import WarningMessage from "../shared/WarningMessage";
import { ErrorContext } from "../../contexts/ErrorContext";

export default function AddWordsForm(): ReactElement {
  const { language } = useContext(LanguageContext);
  const { setIsVocabularyError } = useContext(ErrorContext);

  const { add, add_vocabulary } = typography[language].VocabularyPage;
  const { empty_fields_err, foreign_word, translation_word } = typography[
    language
  ].shared;

  const { setWordsData, totalWordsLength } = useContext(WordsContext);

  const [values, handleChange, clearValues] = useForm({
    foreignWord: "",
    translation: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { foreignWord, translation } = values;

  const createWordAndUpdate = async () => {
    try {
      await createWord({
        foreignWord,
        translation
      });

      await setWordsData();
    } catch (e) {
      console.log(e);
      setIsVocabularyError(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    const isForeignWordEmpty = foreignWord === "";
    const isTranslationEmpty = translation === "";

    if (isForeignWordEmpty || isTranslationEmpty) {
      setErrorMessage(empty_fields_err);
    } else {
      createWordAndUpdate();

      clearValues();
    }
  };

  const inputFieldRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    inputFieldRef.current.focus();
  }, [totalWordsLength, inputFieldRef]);

  return (
    <div className={Styles.AddWordsForm} data-testid="add-words-form-container">
      <h2>{add_vocabulary}</h2>

      <WarningMessage warnMessage={errorMessage} />

      <form
        onSubmit={handleSubmit}
        className={Styles.form}
        data-testid="add-words-form"
      >
        <InputField
          placeholder={foreign_word}
          name="foreignWord"
          value={foreignWord}
          onChange={handleChange}
          autoFocus
          inputRef={inputFieldRef}
        />

        <InputField
          placeholder={translation_word}
          name="translation"
          value={translation}
          onChange={handleChange}
        />

        <PrimaryButton type="submit" value="submit" buttonMessage={add} />
      </form>
    </div>
  );
}
