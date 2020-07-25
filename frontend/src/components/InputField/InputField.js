import React from "react";

import Styles from "./InputField.module.scss";

export default function InputField({
  placeholder,
  name,
  value,
  onChange,
  type,
  autocompleteON,
  refInput,
  small
}) {
  return (
    <div className={Styles.InputFieldContainer}>
      <input
        ref={refInput}
        className={small ? Styles.smallInputField : Styles.InputField}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autocompleteON ? "on" : "off"}
      />
    </div>
  );
}
