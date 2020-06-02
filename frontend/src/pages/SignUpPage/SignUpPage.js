import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { signup } from "../../services/signup";
import { ErrorContext } from "../../contexts/ErrorContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";
import LoadingPage from "../LoadingPage/LoadingPage";
import WarningMessage from "../../components/WarningMessage/WarningMessage";

export default function SignUpPage() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isEmptyInputError, setIsEmptyInputError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const { isSignupError, setIsSignupError } = useContext(ErrorContext);
  const { isProfileLoading, setIsProfileLoading } = useContext(LoadingContext);

  const history = useHistory();

  const handleNameInputChange = event => {
    setInputName(event.target.value);
  };

  const handleEmailInputChange = event => {
    setInputEmail(event.target.value);
  };

  const handlePasswordInputChange = event => {
    setInputPassword(event.target.value);
  };

  const sendProfile = async () => {
    try {
      setIsProfileLoading(true);

      await signup({
        name: inputName,
        email: inputEmail,
        password: inputPassword
      });

      history.push("/home");

      setInputName("");
      setInputEmail("");
      setInputPassword("");

      setIsProfileLoading(false);
    } catch (error) {
      console.log(error);

      setIsProfileLoading(false);
      setIsSignupError(true);
    }
  };

  const validateEmail = () => {
    // eslint-disable-next-line
    const regexp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return regexp.test(String(inputEmail).toLowerCase());
  };

  const isValidEmail = validateEmail();

  const handleSubmit = async event => {
    event.preventDefault();

    setIsSignupError(false);

    if (inputName === "" || inputEmail === "" || inputPassword === "") {
      setIsPasswordError(false);
      setIsEmailError(false);

      setIsEmptyInputError(true);
    } else if (!isValidEmail) {
      setIsEmptyInputError(false);
      setIsPasswordError(false);

      setIsEmailError(true);
    } else if (inputPassword.length < 6 && inputPassword.length > 0) {
      setIsEmptyInputError(false);

      setIsPasswordError(true);
    } else {
      setIsEmptyInputError(false);
      setIsPasswordError(false);
      setIsEmailError(false);

      sendProfile();
    }
  };

  if (isProfileLoading) return <LoadingPage />;

  return (
    <SignupLoginForm
      handleSubmit={handleSubmit}
      header="SIGN UP"
      buttonMessage="Create User"
      paragraphMessage="Already have an account?"
      route="/login"
      linkMessage="Log In"
    >
      {isSignupError ? (
        <WarningMessage warnMessage="Error" />
      ) : isEmptyInputError ? (
        <WarningMessage warnMessage="Please, fill in all the fields" />
      ) : isPasswordError ? (
        <WarningMessage warnMessage="Password should be 6 characters" />
      ) : isEmailError ? (
        <WarningMessage warnMessage="Invalid email" />
      ) : null}

      <InputField
        type="text"
        placeholder="Name"
        name="name"
        value={inputName}
        onChange={handleNameInputChange}
      />

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
        minlength={6}
      />
    </SignupLoginForm>
  );
}
