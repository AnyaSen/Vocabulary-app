import React from "react";

import Styles from "./SideBar.module.scss";

import { NavLink } from "react-router-dom";
import ButtonMenuLink from "../../Buttons/ButtonMenuLink/ButtonMenuLink";
import UserLetter from "../UserLetter/UserLetter";

export default function SideBar() {
  return (
    <div className={Styles.SideBar}>
      <UserLetter inCircle />

      <div className={Styles.links}>
        <ButtonMenuLink linkTo="/home" buttonMessage="HOME" />
        <ButtonMenuLink linkTo="/vocabulary" buttonMessage="VOCABULARY" />
        <ButtonMenuLink linkTo="/learn" buttonMessage="LEARN" />
      </div>

      <div className={Styles.instructions}>
        <NavLink to="/instructions">
          <h2>?</h2>

          <button>HOW TO USE</button>
        </NavLink>
      </div>
    </div>
  );
}
