import React from "react";
import Styles from "./ErrorSmall.module.scss";

export default function ErrorSmall({ onClick }) {
  return (
    <div className={Styles.ErrorSmall}>
      <p>Error</p>

      <div onClick={onClick}>x</div>
    </div>
  );
}
