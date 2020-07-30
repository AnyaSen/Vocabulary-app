import React, { ReactElement } from "react";
import Styles from "./ErrorSmall.module.scss";

interface Props {
  onClick: () => void;
}

export default function ErrorSmall({ onClick }: Props): ReactElement {
  return (
    <div className={Styles.ErrorSmall}>
      <p>Error</p>

      <div onClick={onClick}>x</div>
    </div>
  );
}
