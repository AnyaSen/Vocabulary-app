import React, { ReactElement } from "react";

import Styles from "./InputFieldSmall.module.scss";

type Props = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  type?: string;
  labelText: string;
};

export default function InputFieldSmall({
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
        data-testid="small-input"
        className={Styles.InputFieldSmall}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
