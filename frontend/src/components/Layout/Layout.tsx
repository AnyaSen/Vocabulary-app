import React, { useState, useEffect, useContext, ReactElement } from "react";

import Styles from "./Layout.module.scss";

import SideBar from "./SideBar";
import BurgerBar from "./BurgerBar";

import { NavBarConext } from "../../contexts/NavBarConext";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  const [burgerBar, setBurgerBar] = useState(false);
  const { isBurgerOpen } = useContext(NavBarConext);

  useEffect(() => {
    if (window.innerWidth < 719) {
      setBurgerBar(true);
    } else {
      setBurgerBar(false);
    }
  }, []);

  if (isBurgerOpen) return <BurgerBar />;

  return (
    <div
      className={burgerBar ? Styles.LayoutBurger : Styles.Layout}
      data-testid="navbar"
    >
      {burgerBar ? <BurgerBar /> : <SideBar />}
      {children}
    </div>
  );
}
