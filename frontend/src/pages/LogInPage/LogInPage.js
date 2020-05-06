import React, { useState } from "react";
import { Link } from "react-router-dom";

import { postData } from "../../services/postData";

import InputField from "../../components/InputField/InputField";

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
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>

      <InputField
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
      <button type="submit" value="submit">
        Continue
      </button>
      <p>
        Don't have an account? <Link to="/">Sing up</Link>
      </p>
    </form>
  );
}
