import React, { useState, useEffect, useRef } from "react";

import { logout } from "../../../services/logout";
import { deleteAccount } from "../../../services/deleteAccount";
import { useForm } from "../../../hooks/useForm";

import Styles from "./UserLetter.module.scss";
import deleteSvg from "../../../assets/img/delete_account.svg";

import ConfirmationCard from "../../shared/ConfirmationCard/ConfirmationCard";
import InputField from "../../InputField/InputField";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";
import WarningMessage from "../../shared/WarningMessage/WarningMessage";

export default function UserLetter({ inCircle }) {
  const userName = JSON.parse(localStorage.getItem("userName"));
  const firstLetter = userName.toUpperCase().charAt(0);

  const [values, handleChange, clearValues] = useForm({
    name: ""
  });

  const { name } = values;
  const [errorMessage, setErrorMessage] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showValidationRequest, setShowValidationRequest] = useState(false);
  const [showNameInputField, setShowNameInputField] = useState(false);

  const confitmationCard = useRef();

  const handleClick = e => {
    if (!e.composedPath().includes(confitmationCard.current)) {
      setShowConfirmation(false);
      setShowValidationRequest(false);
      setShowNameInputField(false);
      return;
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const checkNameAndDelete = e => {
    e.preventDefault();
    setErrorMessage("");

    if (name === "") {
      setErrorMessage("The filed is empty");
    } else if (userName.toLowerCase() !== name.toLowerCase()) {
      setErrorMessage("Wrong user name");
    } else {
      clearValues();
      setShowNameInputField(false);
      deleteAccount();
    }
  };

  return (
    <div className={Styles.userLetterContainer}>
      {showConfirmation && (
        <div ref={confitmationCard}>
          <ConfirmationCard
            confQuestion="Are you sure you want to delete your account?"
            confAnswerOne="NO"
            confAnswerTwo="YES"
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
        <div ref={confitmationCard}>
          <ConfirmationCard
            confQuestion="Notice that your progress will be removed permanently, would you like to continue?"
            confAnswerOne="Cancel"
            confAnswerTwo="Continue"
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
        <div ref={confitmationCard} className={Styles.formContainer}>
          <p>Please, enter your user name to delete your account.</p>

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
                buttonMessage="Submit"
                type="submit"
              />

              <SecondaryButton
                buttonMessage="Cancel"
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
        LOG OUT
      </button>
      {!inCircle && (
        <button
          className={Styles.deleteButton}
          onClick={() => {
            setShowConfirmation(true);
          }}
        >
          DELETE ACCOUNT
        </button>
      )}
    </div>
  );
}
