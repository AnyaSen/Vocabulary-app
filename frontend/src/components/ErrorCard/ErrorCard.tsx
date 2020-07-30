import React, { ReactElement } from "react";

import Styles from "./ErrorCard.module.scss";

import error from "../../assets/img/error.svg";

export default function ErrorCard(): ReactElement {
  return (
    <div className={Styles.ErrorCard}>
      <img src={error} alt="Error" />
      <p>Sorry, an error has occured.</p>
    </div>
  );
}
