import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Styles from "../../components/SignupLoginForm/SignupLoginForm.module.scss";

import { login } from "../../services/login";
import { ErrorContext } from "../../contexts/ErrorContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function HomePage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isEmptyInputError, setIsEmptyInputError] = useState(false);

  const { isLoginError, setIsLoginError } = useContext(ErrorContext);
  const { isProfileLoading, setIsProfileLoading } = useContext(LoadingContext);

  const history = useHistory();

  const handleEmailInputChange = event => {
    setInputEmail(event.target.value);
  };

  const handlePasswordInputChange = event => {
    setInputPassword(event.target.value);
  };

  const sendProfile = async () => {
    try {
      setIsProfileLoading(true);

      await login({
        email: inputEmail,
        password: inputPassword
      });

      history.push("/vocabulary");

      setIsLoginError(false);

      setInputEmail("");
      setInputPassword("");

      setIsProfileLoading(false);
    } catch (error) {
      console.log(error);

      setIsProfileLoading(false);
      setIsLoginError(true);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoginError(false);

    if (inputEmail === "" || inputPassword === "") {
      setIsEmptyInputError(true);
    } else {
      setIsEmptyInputError(false);
      sendProfile();
    }
  };

  if (isProfileLoading) return <LoadingPage />;

  return (
    <SignupLoginForm
      handleSubmit={handleSubmit}
      header="Log in"
      buttonMessage="Continue"
      paragraphMessage="Don&#39;t have an account? "
      route="/"
      linkMessage="Sing up"
    >
      {isLoginError ? (
        <p className={Styles.error}>Wrong credentials</p>
      ) : isEmptyInputError ? (
        <p className={Styles.error}> Please, fill in all the fields</p>
      ) : null}

      <InputField
        type="email"
        placeholder="Email"
        name="email"
        value={inputEmail}
        onChange={handleEmailInputChange}
      />

      <InputField
        placeholder="Password"
        name="password"
        value={inputPassword}
        onChange={handlePasswordInputChange}
      />
    </SignupLoginForm>
  );
}
