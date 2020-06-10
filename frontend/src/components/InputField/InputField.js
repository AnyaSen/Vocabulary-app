import React from "react";

import Styles from "./InputField.module.scss";

export default function InputField({
  placeholder,
  name,
  value,
  onChange,
  type
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
      />
    </div>
  );
}
