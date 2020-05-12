import React, { useContext, useState } from "react";

import { WordsContext } from "../../contexts/WordsContext";
import { deleteWord } from "../../services/deleteWord";
import { editWord } from "../../services/editWord";

import Styles from "./WordPair.module.scss";
import editSvg from "../../assets/img/edit.svg";
import deleteSvg from "../../assets/img/delete.svg";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import InputField from "../InputField/InputField";

export default function WordPair({ word, transaltion, ID }) {
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const [foreignWordInput, setForeignWordInput] = useState(word);
  const [translationInput, setTranslationInput] = useState(transaltion);

  const { setWordsData } = useContext(WordsContext);

  const deleteAndUpdate = () => {
    deleteWord(ID);
    setWordsData();
  };

  const setEditMode = () => {
    setIsEditButtonClicked(true);
  };

  const editAndUpdate = () => {
    editWord(
      { foreignWord: foreignWordInput, translation: translationInput },
      ID
    );
    setWordsData();
    setIsEditButtonClicked(false);
  };

  const handleWordInputChange = event => {
    setForeignWordInput(event.target.value);
  };

  const handleTranslationInputChange = event => {
    setTranslationInput(event.target.value);
  };

  return (
    <div className={Styles.WordPair}>
      {isEditButtonClicked ? (
        <>
          <InputField
            type="text"
            placeholder="Foreign word"
            value={foreignWordInput}
            onChange={handleWordInputChange}
          />
          <InputField
            type="text"
            placeholder="Translation"
            value={translationInput}
            onChange={handleTranslationInputChange}
          />

          <SecondaryButton onClick={editAndUpdate} buttonMessage="Submit" />
        </>
      ) : (
        <>
          <p>{word.toLowerCase()}</p>
          <p>{transaltion.toLowerCase()}</p>

          <button onClick={setEditMode}>
            <img src={editSvg} alt="Edit" />
          </button>

          <button onClick={deleteAndUpdate}>
            <img src={deleteSvg} alt="Delete" />
          </button>
        </>
      )}
    </div>
  );
}
