import React from "react";

import Styles from "./NotificationMessage.module.scss";

export default function NotificationMessage({ text }) {
  return <h2 className={Styles.NotificationMessage}>{text}</h2>;
}
