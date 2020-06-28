import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { login } from "../../services/login";
import { useForm } from "../../hooks/useForm";

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

      setErrorMessage("Wrong credentials");

      setIsProfileLoading(false);
    }
  };

  const validateAndSendProfile = () => {
    const areValuesEmpty = email === "" || password === "";

    if (areValuesEmpty) {
      setErrorMessage("All fields should be filled");
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
      header="Log in"
      buttonMessage="Continue"
      paragraphMessage="Don&#39;t have an account? "
      route="/signup"
      linkMessage="Sing up"
    >
      <WarningMessage warnMessage={errorMessage} />

      <InputField
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        autocompleteON
      />

      <InputField
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </SignupLoginForm>
  );
}
