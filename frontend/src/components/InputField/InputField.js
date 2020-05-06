import React from "react";

import Styles from "./InputField.module.scss";

export default function InputField({ placeholder, name, value, onChange }) {
  return (
    <input
      className={Styles.InputField}
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
