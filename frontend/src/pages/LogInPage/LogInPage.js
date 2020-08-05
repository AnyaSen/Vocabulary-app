import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import typography from "../../typography/typography.json";

import { login } from "../../services/login";
import { useForm } from "../../hooks/useForm";

import { LoadingContext } from "../../contexts/LoadingContext";
import { LanguageContext } from "../../contexts/LanguageContext";

import InputField from "../../components/InputField";
import SignupLoginForm from "../../components/SignupLoginForm";
import LoadingPage from "../LoadingPage/LoadingPage";
import WarningMessage from "../../components/shared/WarningMessage";

export default function HomePage() {
  const { language } = useContext(LanguageContext);

  const {
    log_in,
    email_,
    password_,
    sign_up,
    dont_have_an_aссount,
    continue_,
    empty_fields_err,
    wrong_credentials_err
  } = typography[language];

  const [values, handleChange, clearValues] = useForm({
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { isProfileLoading, setIsProfileLoading } = useContext(LoadingContext);

  const history = useHistory();

  const { email, password } = values;

  const sendProfile = async () => {
    try {
      setIsProfileLoading(true);

      await login({
        email,
        password
      });

      setIsProfileLoading(false);

      clearValues();

      history.push("/home");
    } catch (error) {
      console.log(error);

      setErrorMessage(wrong_credentials_err);

      setIsProfileLoading(false);
    }
  };

  const validateAndSendProfile = () => {
    const areValuesEmpty = email === "" || password === "";

    if (areValuesEmpty) {
      setErrorMessage(empty_fields_err);
    } else {
      sendProfile();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    setErrorMessage("");

    validateAndSendProfile();
  };

  if (isProfileLoading) return <LoadingPage />;

  return (
    <SignupLoginForm
      handleSubmit={handleSubmit}
      header={log_in}
      buttonMessage={continue_}
      paragraphMessage={dont_have_an_aссount}
      route="/signup"
      linkMessage={sign_up}
    >
      <WarningMessage warnMessage={errorMessage} />

      <InputField
        placeholder={email_}
        name="email"
        value={values.email}
        onChange={handleChange}
        autocompleteON
      />

      <InputField
        type="password"
        placeholder={password_}
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </SignupLoginForm>
  );
}
