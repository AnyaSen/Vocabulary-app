import React, { useState, useEffect, useRef } from "react";

import { logout } from "../../../services/logout";
import { deleteAccount } from "../../../services/deleteAccount";

import Styles from "./UserLetter.module.scss";
import deleteSvg from "../../../assets/img/delete_account.svg";
import ConfirmationCard from "../../ConfirmationCard/ConfirmationCard";

export default function UserLetter({ inCircle }) {
  const name = JSON.parse(localStorage.getItem("userName"));
  const firstLetter = name.toUpperCase().charAt(0);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const confitmationCard = useRef();

  const handleClick = e => {
    if (!e.composedPath().includes(confitmationCard.current)) {
      setShowConfirmation(false);
      return;
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

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
            answerTwoOnClick={deleteAccount}
          />
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
