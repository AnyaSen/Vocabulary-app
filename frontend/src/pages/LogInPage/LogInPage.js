import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { login } from "../../services/login";
import { useForm } from "../../hooks/useForm";

import { ErrorContext } from "../../contexts/ErrorContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";
import LoadingPage from "../LoadingPage/LoadingPage";
import WarningMessage from "../../components/WarningMessage/WarningMessage";

export default function HomePage() {
  const [values, handleChange, clearValues] = useForm({
    email: "",
    password: ""
  });

  const [isEmptyInputError, setIsEmptyInputError] = useState(false);
  const { isLoginError, setIsLoginError } = useContext(ErrorContext);

  const { isProfileLoading, setIsProfileLoading } = useContext(LoadingContext);

  const history = useHistory();

  const sendProfile = async () => {
    try {
      setIsProfileLoading(true);

      await login({
        email: values.email,
        password: values.password
      });

      setIsProfileLoading(false);

      clearValues();

      history.push("/home");
    } catch (error) {
      console.log(error);

      setIsProfileLoading(false);
      setIsLoginError(true);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoginError(false);

    if (values.email === "" || values.password === "") {
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
      route="/signup"
      linkMessage="Sing up"
    >
      {isLoginError ? (
        <WarningMessage warnMessage="Wrong credentials" />
      ) : isEmptyInputError ? (
        <WarningMessage warnMessage="Please, fill in all the fields" />
      ) : null}

      <InputField
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />

      <InputField
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </SignupLoginForm>
  );
}
