import React from "react";

import Styles from "./WarningMessage.module.scss";

export default function WarningMessage({ warnMessage }) {
  return <p className={Styles.WarningMessage}>{warnMessage}</p>;
}
