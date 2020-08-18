import React, { ReactElement } from "react";

import Styles from "./InputField.module.scss";

type Props = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  type?: string;
  autocompleteON?: boolean;
  refInput?: string;
  small?: boolean;
  autoFocus?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export default function InputField({
  placeholder,
  name,
  value,
  onChange,
  type,
  autocompleteON,
  small,
  autoFocus,
  inputRef
}: Props): ReactElement {
  return (
    <div className={Styles.InputFieldContainer}>
      <input
        autoFocus={autoFocus}
        className={small ? Styles.smallInputField : Styles.InputField}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autocompleteON ? "on" : "off"}
        ref={inputRef}
      />
    </div>
  );
}
