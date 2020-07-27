import React from "react";
import { Link } from "react-router-dom";

import Styles from "./NotificationMessage.module.scss";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";

export default function NotificationMessage({ text, linkMessage, linkRoute }) {
  return (
    <div className={Styles.NotificationContainer}>
      <h2 className={Styles.NotificationMessage}>{text}</h2>

      <Link to={linkRoute}>
        <PrimaryButton buttonColor="white" buttonMessage={linkMessage} />
      </Link>
    </div>
  );
}
