import React from "react";

export default function InputField({ placeholder, name, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
