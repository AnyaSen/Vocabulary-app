import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { signup } from "../../services/signup";
import { useForm } from "../../hooks/useForm";

import { LoadingContext } from "../../contexts/LoadingContext";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";
import LoadingPage from "../LoadingPage/LoadingPage";
import WarningMessage from "../../components/WarningMessage/WarningMessage";

export default function SignUpPage() {
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

      history.push("/home");

      clearValues();

      setIsProfileLoading(false);
    } catch (error) {
      console.log(error);

      setIsProfileLoading(false);

      setErrorMessage("Account already exists");
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
      setErrorMessage("All fields should be filled");
    } else if (!isValidEmail) {
      setErrorMessage("Email is invalid");
    } else if (isNOTPasswordValid) {
      setErrorMessage("Password should be 6 charecters minimun");
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
      header="SIGN UP"
      buttonMessage="Create User"
      paragraphMessage="Already have an account?"
      route="/login"
      linkMessage="Log In"
    >
      <WarningMessage warnMessage={errorMessage} />

      <InputField
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <InputField
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <InputField
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
        minlength={6}
      />
    </SignupLoginForm>
  );
}
