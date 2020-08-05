import React, { ReactElement } from "react";

import Styles from "./InputFieldSmall.module.scss";

type Props = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  type?: string;
  labelText: string;
};

export default function InputFieldSmall({
  placeholder,
  name,
  value,
  onChange,
  type,
  labelText
}: Props): ReactElement {
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
