import React from "react";

import Styles from "./Layout.module.scss";

import SideBar from "../SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <div className={Styles.Layout}>
      <SideBar />
      {children}
    </div>
  );
}
