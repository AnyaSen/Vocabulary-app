import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import typography from "../../typography/typography.json";

import { signup } from "../../services/signup";
import { useForm } from "../../hooks/useForm";

import { LoadingContext } from "../../contexts/LoadingContext";
import { LanguageContext } from "../../contexts/LanguageContext";

import InputField from "../../components/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";
import LoadingPage from "../LoadingPage/LoadingPage";
import WarningMessage from "../../components/shared/WarningMessage";

export default function SignUpPage() {
  const { language } = useContext(LanguageContext);

  const {
    sign_up,
    name_,
    email_,
    password_,
    create_user,
    already_have_an_aссount,
    log_in,
    empty_fields_err,
    account_exists_err,
    email_invalid_err,
    password_invalid_err
  } = typography[language];

  const [values, handleChange, clearValues] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { isProfileLoading, setIsProfileLoading } = useContext(LoadingContext);

  const history = useHistory();

  const { name, email, password } = values;

  const sendProfile = async () => {
    try {
      setIsProfileLoading(true);

      await signup({
        name: name,
        email: email,
        password: password
      });

      clearValues();

      setIsProfileLoading(false);

      history.push("/home");
    } catch (error) {
      console.log(error);

      setIsProfileLoading(false);

      setErrorMessage(account_exists_err);
    }
  };

  const validateEmail = () => {
    // eslint-disable-next-line
    const regexp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return regexp.test(String(email).toLowerCase());
  };

  const validateAndSendProfile = () => {
    const areValuesEmpty = name === "" || email === "" || password === "";
    const isValidEmail = validateEmail();
    const isNOTPasswordValid = password.length > 0 && password.length < 6;

    if (areValuesEmpty) {
      setErrorMessage(empty_fields_err);
    } else if (!isValidEmail) {
      setErrorMessage(email_invalid_err);
    } else if (isNOTPasswordValid) {
      setErrorMessage(password_invalid_err);
    } else {
      sendProfile();
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    setErrorMessage("");

    validateAndSendProfile();
  };

  if (isProfileLoading) return <LoadingPage />;

  return (
    <SignupLoginForm
      handleSubmit={handleSubmit}
      header={sign_up}
      buttonMessage={create_user}
      paragraphMessage={already_have_an_aссount}
      route="/login"
      linkMessage={log_in}
    >
      <WarningMessage warnMessage={errorMessage} />

      <InputField
        type="text"
        placeholder={name_}
        name="name"
        value={name}
        onChange={handleChange}
      />

      <InputField
        type="email"
        placeholder={email_}
        name="email"
        value={email}
        onChange={handleChange}
        autocompleteON
      />

      <InputField
        type="password"
        placeholder={password_}
        name="password"
        value={password}
        onChange={handleChange}
        minlength={6}
      />
    </SignupLoginForm>
  );
}
