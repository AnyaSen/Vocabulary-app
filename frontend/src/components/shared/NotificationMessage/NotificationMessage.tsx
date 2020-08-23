import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import Styles from "./NotificationMessage.module.scss";
import PrimaryButton from "../../Buttons/PrimaryButton";

interface Props {
  text: string;
  linkMessage: string;
  linkRoute: string;
}

export default function NotificationMessage({
  text,
  linkMessage,
  linkRoute
}: Props): ReactElement {
  return (
    <div
      className={Styles.NotificationContainer}
      data-testid="notification-message"
    >
      <h2 className={Styles.NotificationMessage}>{text}</h2>

      <Link to={linkRoute} data-testid="notification-link">
        <PrimaryButton buttonMessage={linkMessage} />
      </Link>
    </div>
  );
}
