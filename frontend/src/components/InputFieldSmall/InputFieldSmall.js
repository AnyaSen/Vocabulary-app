import React from "react";

import Styles from "./InputFieldSmall.module.scss";

export default function InputFieldSmall({
  placeholder,
  name,
  value,
  onChange,
  type,
  minlength,
  maxlength,
  labelText
}) {
  return (
    <div>
      <label className={Styles.label}>{labelText}</label>
      <input
        className={Styles.InputFieldSmall}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
        minLength={minlength}
        maxLength={maxlength}
      />
    </div>
  );
}
