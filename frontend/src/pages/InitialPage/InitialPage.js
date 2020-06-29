import React from "react";

import Styles from "./InitialPage.module.scss";

import signupSvg from "../../assets/img/signup.svg";
import loginSvg from "../../assets/img/login.svg";
import instructionsSvg from "../../assets/img/instructions.svg";
import logoSvg from "../../assets/img/logo.svg";

import PageLayout from "../../components/PageLayout/PageLayout";
import InitialPageButton from "./InitialPageButton/InitialPageButton";

export default function InitialPage() {
  return (
    <PageLayout
      header="Welcome to Vocabulary Builder!"
      subHeader="Here you can add new words, learn them and see your progress"
    >
      <img src={logoSvg} alt="Logo" className={Styles.logo} />

      <InitialPageButton
        imgSrc={signupSvg}
        imgAlt="Sign up"
        linkTo="/signup"
        buttonMessage="SIGN UP"
        buttonDescription="To create an account"
      />

      <InitialPageButton
        imgSrc={instructionsSvg}
        imgAlt="Instructions"
        linkTo="/"
        buttonMessage="INSTRUCTIONS"
        buttonDescription="To see how the app works"
      />

      <InitialPageButton
        imgSrc={loginSvg}
        imgAlt="Log in"
        linkTo="/login"
        buttonMessage="LOG IN"
        buttonDescription="To log into an existing account"
      />
    </PageLayout>
  );
}
