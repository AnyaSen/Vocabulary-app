import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import Styles from "./ButtonMenuLink.module.scss";

interface Props {
  buttonMessage: string;
  linkTo: string;
  onClick: () => void;
}

export default function ButtonMenuLink({
  buttonMessage,
  linkTo,
  onClick
}: Props): ReactElement {
  return (
    <NavLink
      exact
      activeClassName={Styles.active}
      className={Styles.ButtonMenuLink}
      to={linkTo}
      onClick={onClick}
    >
      <button>{buttonMessage}</button>
    </NavLink>
  );
}
