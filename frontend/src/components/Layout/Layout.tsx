import React, { useState, useEffect, useContext, ReactElement } from "react";

import Styles from "./Layout.module.scss";

import SideBar from "./SideBar";
import BurgerBar from "./BurgerBar";
import ConfirmationDeleteAccont from "../shared/ConfirmationDeleteAccont";

import { NavBarConext } from "../../contexts/NavBarConext";
import { ConfirmationCardContext } from "../../contexts/ConfirmationCardContext";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  const [burgerBar, setBurgerBar] = useState(false);
  const { isBurgerOpen } = useContext(NavBarConext);

  const {
    isDeleteAccountConfirmationOpen,
    areConfirmationInputsOpen
  } = useContext(ConfirmationCardContext);

  useEffect(() => {
    if (window.innerWidth < 719) {
      setBurgerBar(true);
    } else {
      setBurgerBar(false);
    }
  }, []);

  if (isBurgerOpen) return <BurgerBar />;

  return (
    <>
      <ConfirmationDeleteAccont />

      <div
        className={
          isDeleteAccountConfirmationOpen || areConfirmationInputsOpen
            ? Styles.DarkenedLayout
            : burgerBar
            ? Styles.LayoutBurger
            : Styles.Layout
        }
        data-testid="navbar"
      >
        {burgerBar ? <BurgerBar /> : <SideBar />}
        {children}
      </div>
    </>
  );
}
