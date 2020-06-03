import React, { useContext, useState } from "react";

import Styles from "./WordPair.module.scss";

import { WordsContext } from "../../contexts/WordsContext";
import { BrowseContext } from "../../contexts/BrowseContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";

import { deleteWord } from "../../services/deleteWord";
import { editWord } from "../../services/editWord";
import { useForm } from "../../hooks/useForm";

import editSvg from "../../assets/img/edit.svg";
import deleteSvg from "../../assets/img/delete.svg";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import InputField from "../InputField/InputField";
import LoaderSmall from "../Loader/LoaderSmall/LoaderSmall";
import ErrorSmall from "../ErrorSmall/ErrorSmall";

export default function WordPair({ word, transaltion, ID }) {
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);

  const [values, handleChange] = useForm({
    foreignWord: "",
    translation: ""
  });

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
      deleteWord(ID);

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
      if (!isBrowsingMode) {
        editWord(
          { foreignWord: values.foreignWord, translation: values.translation },
          ID
        );

        setWordsData();

        setIsFormSubmissionLoading(false);

        setIsEditButtonClicked(false);
      } else {
        setEditedFilteredForeignWord(values.foreignWord);

        setEditedFilteredTranslation(values.translation);

        editWord(
          { foreignWord: values.foreignWord, translation: values.translation },
          ID
        );

        setIsFormSubmissionLoading(false);

        setIsEditButtonClicked(false);
      }
    } catch (e) {
      setIsFormSubmissionLoading(false);
      setIsFormSubmissionError(true);
      console.log(e);
    }
  };

  const setEditMode = () => {
    setIsEditButtonClicked(true);
  };

  return (
    <>
      {isEditButtonClicked ? (
        <form onSubmit={editAndUpdate} className={Styles.EditWordForm}>
          <div className={Styles.editInputs}>
            <InputField
              type="text"
              placeholder="Foreign word"
              value={values.foreignWord}
              onChange={handleChange}
            />
            <InputField
              type="text"
              placeholder="Translation"
              value={values.translation}
              onChange={handleChange}
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
