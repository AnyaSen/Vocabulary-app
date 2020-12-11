import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  ReactElement
} from "react";

import { logout } from "../../../services/logout";
import { deleteAccount } from "../../../services/deleteAccount";
import { useForm } from "../../../hooks/useForm";
import { lowerCaseWord } from "../../../services/lowerCase";

import { LanguageContext } from "../../../contexts/LanguageContext";
import { ConfirmationCardContext } from "../../../contexts/ConfirmationCardContext";
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

interface Props {
  inCircle?: boolean;
}

export default function UserLetter({ inCircle }: Props): ReactElement {
  const userName: UserName = JSON.parse(localStorage.getItem("userName")!);

  const upperCaseFirstLetter = name => {
    if (name) {
      return name.charAt(0).toUpperCase();
    }
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

  const {
    isDeleteAccountConfirmationOpen,
    setIsDeleteAccountConfirmationOpen,
    areConfirmationInputsOpen,
    setAreConfirmationInputsOpen
  } = useContext(ConfirmationCardContext);

  const confitmationCard = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const handleClick = e => {
      if (!e.composedPath().includes(confitmationCard.current)) {
        setIsDeleteAccountConfirmationOpen(false);
        setAreConfirmationInputsOpen(false);
        return;
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [confitmationCard]);

  const checkNameAndDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (name === "") {
      setErrorMessage(empty_field_err);
    } else if (lowerCaseWord(userName) !== name.toLowerCase()) {
      setErrorMessage(wrong_user_name);
    } else {
      clearValues();
      setAreConfirmationInputsOpen(false);
      deleteAccount();
    }
  };

  return (
    <div className={Styles.userLetterContainer}>
      {isDeleteAccountConfirmationOpen && (
        <div ref={confitmationCard} data-testid="confirmation-card">
          <ConfirmationCard
            confQuestion={delete_confirmation_question_1}
            confQuestionSpan={delete_confirmation_question_2}
            confAnswerOne={no}
            confAnswerTwo={yes}
            answerOneOnClick={() => {
              setIsDeleteAccountConfirmationOpen(false);
            }}
            answerTwoOnClick={() => {
              setIsDeleteAccountConfirmationOpen(false);
              setAreConfirmationInputsOpen(true);
            }}
          />
        </div>
      )}

      {areConfirmationInputsOpen && (
        <div
          ref={confitmationCard}
          className={Styles.formContainer}
          data-testid="form"
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
                  setAreConfirmationInputsOpen(false);
                }}
              />
            </div>
          </form>
        </div>
      )}

      <div
        className={inCircle ? Styles.userLetterInCircle : Styles.userLetter}
        data-testid="user-letter"
      >
        {inCircle && (
          <img
            alt="delete account"
            className={Styles.delete}
            src={deleteSvg}
            onClick={() => {
              setIsDeleteAccountConfirmationOpen(true);
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
            setIsDeleteAccountConfirmationOpen(true);
          }}
        >
          {delete_account}
        </button>
      )}
    </div>
  );
}
