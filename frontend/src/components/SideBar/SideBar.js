import React from "react";

import Styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <div className={Styles.SideBar}>
      <div className={Styles.user}>A</div>

      <button>LOG OUT</button>
    </div>
  );
}
