import React, { useState, useEffect, useRef, useContext } from "react";

import { logout } from "../../../services/logout";
import { deleteAccount } from "../../../services/deleteAccount";
import { useForm } from "../../../hooks/useForm";

import { LanguageContext } from "../../../contexts/LanguageContext";
import typography from "../../../typography/typography.json";

import Styles from "./UserLetter.module.scss";
import deleteSvg from "../../../assets/img/delete_account.svg";

import ConfirmationCard from "../../shared/ConfirmationCard";
import InputField from "../../InputField/InputField";
import SecondaryButton from "../../Buttons/SecondaryButton";
import WarningMessage from "../../shared/WarningMessage";

interface UserName {
  userName: string;
}

export default function UserLetter({ inCircle }) {
  const userName: UserName = JSON.parse(localStorage.getItem("userName")!);

  const upperCaseFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  const lowerCaseName = name => {
    return name.toLowerCase();
  };

  const firstLetter = upperCaseFirstLetter(userName);

  const { language } = useContext(LanguageContext);
  const {
    log_out,
    delete_account,
    delete_confirmation_question_1,
    delete_confirmation_question_2,
    enter_user_name,
    wrong_user_name
  } = typography[language].SideBar;

  const { yes, no, cancel, empty_field_err, delete_ } = typography[
    language
  ].shared;

  const [values, handleChange, clearValues] = useForm({
    name: ""
  });

  const { name } = values;
  const [errorMessage, setErrorMessage] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showValidationRequest, setShowValidationRequest] = useState(false);
  const [showNameInputField, setShowNameInputField] = useState(false);

  // const confitmationCard = useRef();

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   if (!event.composedPath().includes(confitmationCard.current)) {
  //     setShowConfirmation(false);
  //     setShowValidationRequest(false);
  //     setShowNameInputField(false);
  //     return;
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  const checkNameAndDelete = e => {
    e.preventDefault();
    setErrorMessage("");

    if (name === "") {
      setErrorMessage(empty_field_err);
    } else if (lowerCaseName(userName) !== name.toLowerCase()) {
      setErrorMessage(wrong_user_name);
    } else {
      clearValues();
      setShowNameInputField(false);
      deleteAccount();
    }
  };

  return (
    <div className={Styles.userLetterContainer}>
      {showConfirmation && (
        <div
        // ref={confitmationCard}
        >
          <ConfirmationCard
            confQuestion={delete_confirmation_question_1}
            confAnswerOne={no}
            confAnswerTwo={yes}
            answerOneOnClick={() => {
              setShowConfirmation(false);
            }}
            answerTwoOnClick={() => {
              setShowConfirmation(false);
              setShowValidationRequest(true);
            }}
          />
        </div>
      )}

      {showValidationRequest && (
        <div
        // ref={confitmationCard}
        >
          <ConfirmationCard
            confQuestion={delete_confirmation_question_2}
            confAnswerOne={cancel}
            confAnswerTwo={yes}
            answerOneOnClick={() => {
              setShowValidationRequest(false);
            }}
            answerTwoOnClick={() => {
              setShowValidationRequest(false);
              setShowNameInputField(true);
            }}
          />
        </div>
      )}

      {showNameInputField && (
        <div
          // ref={confitmationCard}
          className={Styles.formContainer}
        >
          <p>{enter_user_name}</p>

          <form onSubmit={checkNameAndDelete} className={Styles.form}>
            <div className={Styles.input}>
              <InputField
                small
                placeholder="User name"
                name="name"
                value={name}
                onChange={handleChange}
                type="name"
              />
              <WarningMessage warnMessage={errorMessage} />
            </div>

            <div className={Styles.formButtons}>
              <SecondaryButton
                buttonColor="pink"
                buttonMessage={delete_}
                type="submit"
              />

              <SecondaryButton
                buttonMessage={cancel}
                type="button"
                onClick={() => {
                  clearValues();
                  setShowNameInputField(false);
                }}
              />
            </div>
          </form>
        </div>
      )}

      <div className={inCircle ? Styles.userLetterInCircle : Styles.userLetter}>
        {inCircle && (
          <img
            alt="delete account"
            className={Styles.delete}
            src={deleteSvg}
            onClick={() => {
              setShowConfirmation(true);
              setErrorMessage("");
            }}
          />
        )}

        <h1> {firstLetter} </h1>
      </div>
      <button className={Styles.logOutButton} onClick={logout}>
        {log_out}
      </button>
      {!inCircle && (
        <button
          className={Styles.deleteButton}
          onClick={() => {
            setShowConfirmation(true);
          }}
        >
          {delete_account}
        </button>
      )}
    </div>
  );
}
