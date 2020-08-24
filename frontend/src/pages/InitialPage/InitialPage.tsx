import React, { useContext, ReactElement } from "react";
import typography from "../../typography/typography.json";

import Styles from "./InitialPage.module.scss";
import signupSvg from "../../assets/img/signup.svg";
import loginSvg from "../../assets/img/login.svg";
import instructionsSvg from "../../assets/img/instructions.svg";

import PageLayout from "../../components/PageLayout/PageLayout";
import InitialPageButton from "../../components/Buttons/InitialPageButton";

import { LanguageContext } from "../../contexts/LanguageContext";

export default function InitialPage(): ReactElement {
  const { language } = useContext(LanguageContext);
  const {
    welcome,
    welcome_subheader,
    sign_up,
    log_in,
    instructions,
    log_in_message,
    sign_up_message,
    instructions_message
  } = typography[language];

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

        <InitialPageButton
          imgSrc={loginSvg}
          imgAlt="Log in"
          linkTo="/login"
          buttonMessage={log_in}
          buttonDescription={log_in_message}
        />
      </div>
    </PageLayout>
  );
}
