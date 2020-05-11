import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { signup } from "../../services/signup";
import { ErrorContext } from "../../contexts/ErrorContext";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";

export default function SignUpPage() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const { isSignupError, setIsSignupError } = useContext(ErrorContext);

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

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setIsSignupError(false);

      await signup({
        name: inputName,
        email: inputEmail,
        password: inputPassword
      });

      history.push("/vocabulary");

      setInputName("");
      setInputEmail("");
      setInputPassword("");
    } catch (error) {
      console.log(error);

      setIsSignupError(true);
    }
  };

  return (
    <SignupLoginForm
      handleSubmit={handleSubmit}
      header="Sign up"
      buttonMessage="Create User"
      paragraphMessage="Already have an account?"
      route="/login"
      linkMessage="Log In"
    >
      {isSignupError ? <p>Account already exists</p> : null}

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
