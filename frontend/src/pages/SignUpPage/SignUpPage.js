import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { postData } from "../../services/postData";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";

export default function SignUpPage() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleNameInputChange = event => {
    setInputName(event.target.value);
  };

  const handleEmailInputChange = event => {
    setInputEmail(event.target.value);
  };

  const handlePasswordInputChange = event => {
    setInputPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const usersURL = "/users";

    postData(usersURL, {
      name: inputName,
      email: inputEmail,
      password: inputPassword
    });

    setInputName("");
    setInputEmail("");
    setInputPassword("");
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
