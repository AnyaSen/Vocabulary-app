import React, { useState } from "react";

import { postData } from "../../services/postData";

import InputField from "../../components/InputField/InputField";
import SignupLoginForm from "../../components/SignupLoginForm/SignupLoginForm";

export default function HomePage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleEmailInputChange = event => {
    setInputEmail(event.target.value);
  };

  const handlePasswordInputChange = event => {
    setInputPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const usersURL = "/users/login";

    postData(usersURL, {
      email: inputEmail,
      password: inputPassword
    });

    setInputEmail("");
    setInputPassword("");
  };

  return (
    <SignupLoginForm
      handleSubmit={handleSubmit}
      header="Log in"
      buttonMessage="Continue"
      paragraphMessage="Don&#39;t have an account? "
      route="/"
      linkMessage="Sing up"
    >
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
