import React, { useContext, useState } from "react";

import { WordsContext } from "../../contexts/WordsContext";
import { BrowseContext } from "../../contexts/BrowseContext";

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
  const [editedFilteredForeignWord, setEditedFilteredForeignWord] = useState(
    word
  );
  const [editedFilteredTranslation, setEditedFilteredTranslation] = useState(
    transaltion
  );

  const { setWordsData } = useContext(WordsContext);
  const { isBrowsingMode } = useContext(BrowseContext);

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

    if (isBrowsingMode) {
      setEditedFilteredForeignWord(foreignWordInput);
      setEditedFilteredTranslation(translationInput);
    }

    setIsEditButtonClicked(false);
  };

  const handleWordInputChange = event => {
    setForeignWordInput(event.target.value);
  };

  const handleTranslationInputChange = event => {
    setTranslationInput(event.target.value);
  };

  return (
    <>
      {isEditButtonClicked ? (
        <form onSubmit={editAndUpdate} className={Styles.EditWordForm}>
          <div className={Styles.editInputs}>
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
          </div>
          <div className={Styles.SubmitButtonContainer}>
            <SecondaryButton
              type="submit"
              value="submit"
              buttonMessage="Submit"
            />
          </div>
        </form>
      ) : (
        <div className={Styles.WordPairContainer}>
          <div className={Styles.WordPair}>
            <p>{!isBrowsingMode ? word : editedFilteredForeignWord}</p>
            <p>{!isBrowsingMode ? transaltion : editedFilteredTranslation}</p>
          </div>

          <div className={Styles.buttonsContainer}>
            <button onClick={setEditMode}>
              <img src={editSvg} alt="Edit" />
            </button>

            <button onClick={deleteAndUpdate}>
              <img src={deleteSvg} alt="Delete" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
