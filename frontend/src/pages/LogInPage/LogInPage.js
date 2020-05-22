import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { login } from "../../services/login";
import { ErrorContext } from "../../contexts/ErrorContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function HomePage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const { isLoginError, setIsLoginError } = useContext(ErrorContext);
  const { isProfileLoading, setIsProfileLoading } = useContext(LoadingContext);

  const history = useHistory();

  const handleEmailInputChange = event => {
    setInputEmail(event.target.value);
  };

  const handlePasswordInputChange = event => {
    setInputPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsProfileLoading(true);

    try {
      setIsLoginError(false);
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

      setIsLoginError(true);
    }
  };

  if (isProfileLoading) return <LoadingPage />;

  return (
    <SignupLoginForm
      handleSubmit={handleSubmit}
      header="LOG IN"
      buttonMessage="Continue"
      paragraphMessage="Don&#39;t have an account? "
      route="/signup"
      linkMessage="Sing up"
    >
      {isLoginError ? <p>User is not found :(</p> : null}

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
