import React from "react";

import Styles from "./ArrowUp.module.scss";
import arrow_up from "../../../assets/img/arrow_up.svg";

export default function ArrowUp({ onClick }) {
  return (
    <div onClick={onClick} className={Styles.ArrowUp}>
      <img src={arrow_up} />
    </div>
  );
}
