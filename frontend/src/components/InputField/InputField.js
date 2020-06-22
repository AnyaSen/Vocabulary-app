import React from "react";

import Styles from "./InputField.module.scss";

export default function InputField({
  placeholder,
  name,
  value,
  onChange,
  type,
  autocomplete
}) {
  return (
    <div className={Styles.InputFieldContainer}>
      <input
        className={Styles.InputField}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autocomplete}
      />
    </div>
  );
}
