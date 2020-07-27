import React from "react";

import Styles from "./InitialPage.module.scss";

import signupSvg from "../../assets/img/signup.svg";
import loginSvg from "../../assets/img/login.svg";
import instructionsSvg from "../../assets/img/instructions.svg";

import PageLayout from "../../components/PageLayout/PageLayout";
import InitialPageButton from "../../components/Buttons/InitialPageButton/InitialPageButton";

export default function InitialPage() {
  return (
    <PageLayout
      showLogo
      header="Welcome to Vocabulary Builder!"
      subHeader="Here you can add new words, learn them and see your progress"
    >
      <div className={Styles.buttons}>
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
          linkTo="/instructions"
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
      </div>
    </PageLayout>
  );
}
