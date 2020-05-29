import React from "react";

import Styles from "./InputFieldSmall.module.scss";

export default function InputFieldSmall({
  placeholder,
  name,
  value,
  onChange,
  type,
  labelText
}) {
  return (
    <div className={Styles.InputLabelContainer}>
      <label>{labelText}</label>
      <input
        className={Styles.InputFieldSmall}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
