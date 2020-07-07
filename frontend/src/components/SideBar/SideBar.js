import React from "react";

import { logout } from "../../services/logout";

import Styles from "./SideBar.module.scss";

import { NavLink } from "react-router-dom";
import ButtonMenuLink from "../Buttons/ButtonMenuLink/ButtonMenuLink";

export default function SideBar() {
  const name = JSON.parse(localStorage.getItem("userName"));
  const firstLetter = name.toUpperCase().charAt(0);

  return (
    <div className={Styles.SideBar}>
      <div>
        <div className={Styles.user}>{firstLetter}</div>

        <button onClick={logout}>LOG OUT</button>
      </div>

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
