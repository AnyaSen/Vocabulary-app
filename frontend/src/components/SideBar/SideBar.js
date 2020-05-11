import React from "react";

import { logout } from "../../services/logout";

import Styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <div className={Styles.SideBar}>
      <div className={Styles.user}>A</div>

      <button onClick={logout}>LOG OUT</button>
    </div>
  );
}
