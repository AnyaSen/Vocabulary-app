import React from "react";
import { NavLink } from "react-router-dom";

import Styles from "./ButtonMenuLink.module.scss";

export default function ButtonMenuLink({ buttonMessage, linkTo }) {
  return (
    <NavLink
      exact
      activeClassName={Styles.active}
      to={linkTo}
      className={Styles.ButtonMenuLink}
    >
      <button>{buttonMessage}</button>
    </NavLink>
  );
}
