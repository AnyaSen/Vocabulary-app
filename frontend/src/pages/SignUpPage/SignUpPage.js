import React, { useState } from "react";
import { Link } from "react-router-dom";

import { postData } from "../../services/postData";

import InputField from "../../components/InputField/InputField";

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
    <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <InputField
        placeholder="Name"
        name="name"
        value={inputName}
        onChange={handleNameInputChange}
      />

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
        Create user
      </button>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </form>
  );
}
