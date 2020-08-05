import React from "react";
import { Link } from "react-router-dom";

import Styles from "./SignupLoginForm.module.scss";

import PrimaryButton from "../Buttons/PrimaryButton";
import ArrowBack from "../Buttons/ArrowBack";

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void | undefined;
  children: React.ReactNode;
  header: string;
  buttonMessage: string;
  paragraphMessage: string;
  route: string;
  linkMessage: string;
}

export default function SignupLoginForm({
  handleSubmit,
  children,
  header,
  buttonMessage,
  paragraphMessage,
  route,
  linkMessage
}: Props) {
  return (
    <div className={Styles.SignupLoginFormContainer}>
      <form
        onSubmit={handleSubmit}
        className={Styles.SignupLoginForm}
        data-testid="form"
      >
        <ArrowBack linkTo="/" />

        <h1>{header.toUpperCase()}</h1>

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
