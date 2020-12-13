import React, { useContext, ReactElement } from "react";
import { useHistory } from "react-router-dom";

import typography from "../../typography/typography.json";
import { guestLogin } from "../../services/guestLogin.js";

import Styles from "./InitialPage.module.scss";
import signupSvg from "../../assets/img/signup.svg";
import loginSvg from "../../assets/img/login.svg";
import instructionsSvg from "../../assets/img/instructions.svg";

import PageLayout from "../../components/PageLayout/PageLayout";
import InitialPageButton from "../../components/Buttons/InitialPageButton";
import LoadingPage from "../LoadingPage";

import { LanguageContext } from "../../contexts/LanguageContext";
import { LoadingContext } from "../../contexts/LoadingContext";

export default function InitialPage(): ReactElement {
  const { language } = useContext(LanguageContext);
  const {
    welcome,
    welcome_subheader,
    sign_up,
    log_in,
    log_in_as_guest,
    instructions,
    log_in_message,
    sign_up_message,
    instructions_message
  } = typography[language];

  const { isProfileLoading, setIsProfileLoading } = useContext(LoadingContext);

  const history = useHistory();

  const sendGuestProfile = async () => {
    try {
      setIsProfileLoading(true);

      await guestLogin();

      setIsProfileLoading(false);

      history.push("/home");
    } catch (error) {
      console.log(error);

      setIsProfileLoading(false);
    }
  };

  if (isProfileLoading) return <LoadingPage />;

  return (
    <PageLayout
      showLanguageSelector
      showLogo
      header={welcome}
      subHeader={welcome_subheader}
    >
      <div className={Styles.buttons}>
        <InitialPageButton
          imgSrc={signupSvg}
          imgAlt="Sign up"
          linkTo="/signup"
          buttonMessage={sign_up}
          buttonDescription={sign_up_message}
        />

        <InitialPageButton
          imgSrc={instructionsSvg}
          imgAlt="Instructions"
          linkTo="/instructions"
          buttonMessage={instructions}
          buttonDescription={instructions_message}
        />

        <div className={Styles.loginButtons}>
          <InitialPageButton
            imgSrc={loginSvg}
            imgAlt="Log in"
            linkTo="/login"
            buttonMessage={log_in}
            buttonDescription={log_in_message}
          />
          <button className={Styles.guestLoginBtn} onClick={sendGuestProfile}>
            {log_in_as_guest}
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
