import React, { useContext, useState } from "react";

import Styles from "./WordPair.module.scss";

import { WordsContext } from "../../contexts/WordsContext";
import { BrowseContext } from "../../contexts/BrowseContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";

import { deleteWord } from "../../services/deleteWord";
import { editWord } from "../../services/editWord";

import editSvg from "../../assets/img/edit.svg";
import deleteSvg from "../../assets/img/delete.svg";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import InputField from "../InputField/InputField";
import LoaderSmall from "../Loader/LoaderSmall/LoaderSmall";
import ErrorSmall from "../ErrorSmall/ErrorSmall";

export default function WordPair({ word, transaltion, ID }) {
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
  const [foreignWordInput, setForeignWordInput] = useState(word);
  const [translationInput, setTranslationInput] = useState(transaltion);
  const [editedFilteredForeignWord, setEditedFilteredForeignWord] = useState(
    word
  );
  const [editedFilteredTranslation, setEditedFilteredTranslation] = useState(
    transaltion
  );

  const { setWordsData } = useContext(WordsContext);
  const { isFormSubmissionError, setIsFormSubmissionError } = useContext(
    ErrorContext
  );
  const { isDeletingError, setIsDeletingError } = useContext(ErrorContext);
  const { isFormSubmissionLoading, setIsFormSubmissionLoading } = useContext(
    LoadingContext
  );
  const { isDeletingLoading, setIsDeletingLoading } = useContext(
    LoadingContext
  );
  const { isBrowsingMode, modifiedWordsArr, setModifiedWordsArr } = useContext(
    BrowseContext
  );

  const deleteFilteredWord = id => {
    const newModifiedArr = modifiedWordsArr;

    const wordIndex = newModifiedArr.findIndex(word => word._id === id);

    newModifiedArr.splice(wordIndex, 1);

    setModifiedWordsArr(newModifiedArr);
  };

  const deleteAndUpdate = async event => {
    event.preventDefault();
    setIsDeletingLoading(true);

    try {
      setIsDeleteButtonClicked(true);
      await deleteWord(ID);

      if (isBrowsingMode) {
        deleteFilteredWord(ID);
      }

      setWordsData();

      setIsDeletingLoading(false);
    } catch (e) {
      setIsDeletingLoading(false);
      setIsDeletingError(true);
      console.log(e);
    }
  };

  const editAndUpdate = async event => {
    event.preventDefault();
    setIsFormSubmissionLoading(true);
    try {
      await editWord(
        { foreignWord: foreignWordInput, translation: translationInput },
        ID
      );

      if (isBrowsingMode) {
        setEditedFilteredForeignWord(foreignWordInput);
        setEditedFilteredTranslation(translationInput);
      }

      setWordsData();
      setIsFormSubmissionLoading(false);

      setIsEditButtonClicked(false);
    } catch (e) {
      setIsFormSubmissionLoading(false);
      setIsFormSubmissionError(true);
      console.log(e);
    }
  };

  const setEditMode = () => {
    setIsEditButtonClicked(true);
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
            {isFormSubmissionError ? (
              <ErrorSmall onClick={() => setIsEditButtonClicked(false)} />
            ) : !isFormSubmissionLoading ? (
              <SecondaryButton
                type="submit"
                value="submit"
                buttonMessage="Submit"
              />
            ) : (
              <LoaderSmall />
            )}
          </div>
        </form>
      ) : (
        <div className={Styles.WordPairContainer}>
          <div className={Styles.WordPair}>
            <p>{!isBrowsingMode ? word : editedFilteredForeignWord}</p>
            <p>{!isBrowsingMode ? transaltion : editedFilteredTranslation}</p>
          </div>

          {isDeletingLoading && isDeleteButtonClicked ? (
            <LoaderSmall />
          ) : isDeletingError && isDeleteButtonClicked ? (
            <ErrorSmall onClick={() => setIsDeleteButtonClicked(false)} />
          ) : (
            <div className={Styles.buttonsContainer}>
              <button onClick={setEditMode}>
                <img src={editSvg} alt="Edit" />
              </button>

              <button onClick={deleteAndUpdate}>
                <img src={deleteSvg} alt="Delete" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
