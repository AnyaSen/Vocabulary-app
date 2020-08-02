import React, { useContext, useState } from "react";

import Styles from "./WordPair.module.scss";

import { WordsContext } from "../../../contexts/WordsContext";
import { BrowseContext } from "../../../contexts/BrowseContext";

import { deleteWord } from "../../../services/deleteWord";
import { editWord } from "../../../services/editWord";
import { useForm } from "../../../hooks/useForm";

import editSvg from "../../../assets/img/edit.svg";
import deleteSvg from "../../../assets/img/delete.svg";
import SecondaryButton from "../../Buttons/SecondaryButton";
import InputField from "../../InputField";
import LoaderSmall from "../../shared/LoaderSmall/LoaderSmall";
import ErrorSmall from "../../ErrorSmall";
import WarningMessage from "../../shared/WarningMessage";

export default function WordPair({
  word,
  transaltion,
  ID,
  newlyAdded,
  learning,
  learned
}) {
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);

  const [editedFilteredWords, setEditedFilteredWords] = useState({
    editedFilteredForeignWord: word,
    editedFilteredTranslation: transaltion
  });

  const { setWordsData } = useContext(WordsContext);

  const [errors, setErrors] = useState({
    isFormSubmissionError: false,
    isDeletingError: false
  });

  const [loading, setLoading] = useState({
    isFormSubmissionLoading: false,
    isDeletingLoading: false
  });

  const {
    isBrowsingMode,
    modifiedWordsArr,
    setModifiedWordsArr,
    setIsWordPairOpen,
    setWordPairForeignWord,
    setWordPairTranslation,
    setWordPairType
  } = useContext(BrowseContext);

  const [values, handleChange] = useForm({
    foreignWord: word,
    translation: transaltion
  });

  const { foreignWord, translation } = values;
  const { isFormSubmissionError, isDeletingError } = errors;
  const { isFormSubmissionLoading, isDeletingLoading } = loading;
  const {
    editedFilteredForeignWord,
    editedFilteredTranslation
  } = editedFilteredWords;

  const handleWordPairClick = () => {
    setIsWordPairOpen(true);
    setWordPairForeignWord(foreignWord);
    setWordPairTranslation(transaltion);
    if (newlyAdded) {
      setWordPairType("NEW");
    } else if (learning) {
      setWordPairType("LEARNING");
    } else {
      setWordPairType("LEARNED");
    }
  };

  const deleteFilteredWord = id => {
    const newModifiedArr = modifiedWordsArr;

    const wordIndex = newModifiedArr.findIndex(word => word._id === id);

    newModifiedArr.splice(wordIndex, 1);

    setModifiedWordsArr(newModifiedArr);
  };

  const sendDeletedWords = async () => {
    try {
      setIsDeleteButtonClicked(true);
      setLoading({ ...loading, isDeletingLoading: true });

      await deleteWord(ID);

      await setWordsData();
    } catch (e) {
      setLoading({ ...loading, isDeletingLoading: false });
      setErrors({ ...errors, isDeletingError: true });
      console.log(e);
    }
  };

  const deleteAndUpdate = async event => {
    event.preventDefault();

    if (!isBrowsingMode) {
      sendDeletedWords();
    } else {
      deleteFilteredWord(ID);
      sendDeletedWords();
    }
  };

  const sendEditedWords = async () => {
    setLoading({ ...loading, isFormSubmissionLoading: true });

    try {
      await editWord({ foreignWord, translation }, ID);

      setLoading({ ...loading, isFormSubmissionLoading: false });

      setIsEditButtonClicked(false);

      await setWordsData();
    } catch (e) {
      setLoading({ ...loading, isFormSubmissionLoading: false });

      setErrors({ ...errors, isFormSubmissionError: true });
      console.log(e);
    }
  };

  const editAndUpdate = event => {
    event.preventDefault();

    const areFieldEmpty = foreignWord === "" || translation === "";

    if (areFieldEmpty) {
      setErrorMessage("Enter the words");
    } else {
      setErrorMessage("");

      if (!isBrowsingMode) {
        sendEditedWords();
      } else {
        setEditedFilteredWords({
          editedFilteredForeignWord: foreignWord,
          editedFilteredTranslation: translation
        });
        editWord({ foreignWord, translation }, ID);
        setLoading({ ...loading, isFormSubmissionLoading: false });

        setIsEditButtonClicked(false);
      }
    }
  };

  const setEditMode = () => {
    setIsEditButtonClicked(true);
  };

  const cutLongerWord = word => {
    if (word.length > 15) {
      const cutWord = word.slice(0, 15);
      return cutWord + "...";
    } else {
      return word;
    }
  };

  return (
    <>
      {isEditButtonClicked ? (
        <form onSubmit={editAndUpdate} className={Styles.EditWordForm}>
          <div className={Styles.editInputs}>
            <InputField
              type="text"
              placeholder="Foreign word"
              value={foreignWord}
              name="foreignWord"
              onChange={handleChange}
            />
            <InputField
              type="text"
              placeholder="Translation"
              value={translation}
              name="translation"
              onChange={handleChange}
            />
          </div>
          <div className={Styles.SubmitButtonContainer}>
            {isFormSubmissionError ? (
              <ErrorSmall onClick={() => setIsEditButtonClicked(false)} />
            ) : !isFormSubmissionLoading ? (
              <>
                <SecondaryButton
                  type="submit"
                  value="submit"
                  buttonMessage="Submit"
                />
                <WarningMessage warnMessage={errorMessage} />
              </>
            ) : (
              <LoaderSmall />
            )}
          </div>
        </form>
      ) : (
        <div className={Styles.WordPairContainer}>
          <div className={Styles.WordPair}>
            <p onClick={handleWordPairClick}>
              {!isBrowsingMode
                ? cutLongerWord(word)
                : cutLongerWord(editedFilteredForeignWord)}
            </p>
            <p onClick={handleWordPairClick}>
              {!isBrowsingMode
                ? cutLongerWord(transaltion)
                : cutLongerWord(editedFilteredTranslation)}
            </p>
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
