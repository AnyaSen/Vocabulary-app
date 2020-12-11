import React, {
  ReactElement,
  useContext,
  useState,
  useEffect,
  useRef
} from "react";

import Styles from "./ConfirmationDeleteAccont.module.scss";

import typography from "../../../typography/typography.json";
import { useForm } from "../../../hooks/useForm";
import { lowerCaseWord } from "../../../services/lowerCase";

import { ConfirmationCardContext } from "../../../contexts/ConfirmationCardContext";
import ConfirmationCard from "../../shared/ConfirmationCard";
import InputField from "../../InputField";
import WarningMessage from "../../shared/WarningMessage";
import SecondaryButton from "../../Buttons/SecondaryButton";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { deleteAccount } from "../../../services/deleteAccount";

interface UserName {
  userName: string;
}

export default function ConfirmationDeleteAccont(): ReactElement {
  const userName: UserName = JSON.parse(localStorage.getItem("userName")!);

  const { language } = useContext(LanguageContext);

  const {
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
    areConfirmationInputsOpen,
    setIsDeleteAccountConfirmationOpen,
    setAreConfirmationInputsOpen
  } = useContext(ConfirmationCardContext);

  const confitmationCard = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const handleClick = e => {
      if (!e.composedPath().includes(confitmationCard.current)) {
        setIsDeleteAccountConfirmationOpen(false);
        setAreConfirmationInputsOpen(false);
        setErrorMessage("");
        clearValues();
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
    <div
      className={Styles.ConfirmationDeleteAccont}
      data-testid="confirmation-card-container"
    >
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
                  setErrorMessage("");
                }}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
