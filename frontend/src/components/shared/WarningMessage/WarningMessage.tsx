import React, { ReactElement } from "react";

import Styles from "./WarningMessage.module.scss";

interface Props {
  warnMessage: string;
}

export default function WarningMessage({ warnMessage }: Props): ReactElement {
  return <p className={Styles.WarningMessage}>{warnMessage}</p>;
}
