import React from "react";
import { Link } from "react-router-dom";

import Styles from "./SignupLoginForm.module.scss";

import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import ArrowBack from "../Buttons/ArrowBack/ArrowBack";

export default function SignupLoginForm({
  handleSubmit,
  children,
  header,
  buttonMessage,
  paragraphMessage,
  route,
  linkMessage
}) {
  return (
    <div className={Styles.SignupLoginFormContainer}>
      <form onSubmit={handleSubmit} className={Styles.SignupLoginForm}>
        <ArrowBack linkTo="/" />

        <h1>{header}</h1>

        <div className={Styles.inputsFieldsContainer}>{children}</div>

        <PrimaryButton
          type="submit"
          value="submit"
          buttonMessage={buttonMessage}
        />

        <p>
          {paragraphMessage} <Link to={route}>{linkMessage}</Link>
        </p>
      </form>
    </div>
  );
}
