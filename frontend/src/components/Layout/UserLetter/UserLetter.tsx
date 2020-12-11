import React, { useContext, ReactElement } from "react";

import { logout } from "../../../services/logout";

import { LanguageContext } from "../../../contexts/LanguageContext";
import { ConfirmationCardContext } from "../../../contexts/ConfirmationCardContext";
import typography from "../../../typography/typography.json";

import Styles from "./UserLetter.module.scss";

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
  const { log_out, delete_account } = typography[language].SideBar;

  const { setIsDeleteAccountConfirmationOpen } = useContext(
    ConfirmationCardContext
  );

  return (
    <div className={Styles.userLetterContainer}>
      <div
        className={inCircle ? Styles.userLetterInCircle : Styles.userLetter}
        data-testid="user-letter"
      >
        <h1> {firstLetter} </h1>
      </div>
      <button className={Styles.logOutButton} onClick={logout}>
        {log_out}
      </button>

      <button
        className={Styles.deleteButton}
        onClick={() => {
          setIsDeleteAccountConfirmationOpen(true);
        }}
      >
        {delete_account}
      </button>
    </div>
  );
}
