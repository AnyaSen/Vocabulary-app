import React from "react";

import Styles from "./InputField.module.scss";

export default function InputField({
  placeholder,
  name,
  value,
  onChange,
  type,
  minlength
}) {
  return (
    <input
      className={Styles.InputField}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
