import React, { ReactElement } from "react";

import Styles from "./ArrowUp.module.scss";
import arrow_up from "../../../assets/img/arrow_up.svg";

interface Props {
  onClick: () => void;
}

export default function ArrowUp({ onClick }: Props): ReactElement {
  return (
    <div onClick={onClick} className={Styles.ArrowUp}>
      <img src={arrow_up} alt="Go up" />
    </div>
  );
}
