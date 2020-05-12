import React from "react";

import { logout } from "../../services/logout";

import Styles from "./SideBar.module.scss";

export default function SideBar() {
  const name = localStorage.getItem("userName");
  const firstLetter = name.charAt(1);

  console.log(name);

  return (
    <div className={Styles.SideBar}>
      <div className={Styles.user}>{firstLetter}</div>

      <button onClick={logout}>LOG OUT</button>
    </div>
  );
}
