import React, { useContext } from "react";

import { logout } from "../../services/logout";

import Styles from "./BurgerBar.module.scss";

import burgerDotsSvg from "../../assets/img/burgerDots.svg";
import closeSvg from "../../assets/img/close.svg";

import { NavBarConext } from "../../contexts/NavBarConext";

import ButtonMenuLink from "../Buttons/ButtonMenuLink/ButtonMenuLink";
import { NavLink } from "react-router-dom";

export default function BurgerBar() {
  const { isBurgerOpen, setIsBurgerOpen } = useContext(NavBarConext);

  const name = JSON.parse(localStorage.getItem("userName"));
  const firstLetter = name.toUpperCase().charAt(0);

  const toggleBurgerOpening = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <div className={Styles.BurgerBar}>
      <img
        alt="menu"
        src={isBurgerOpen ? closeSvg : burgerDotsSvg}
        onClick={toggleBurgerOpening}
        className={isBurgerOpen ? Styles.close : Styles.dots}
      />

      {isBurgerOpen && (
        <div className={Styles.BurgerOpen}>
          <div className={Styles.BurgerCard}>
            <div className={Styles.user}>
              <div className={Styles.userLetter}>{firstLetter}</div>

              <button onClick={logout}>LOG OUT</button>
            </div>

            <div className={Styles.links}>
              <ButtonMenuLink
                linkTo="/home"
                buttonMessage="HOME"
                onClick={toggleBurgerOpening}
              />
              <ButtonMenuLink
                linkTo="/vocabulary"
                buttonMessage="VOCABULARY"
                onClick={toggleBurgerOpening}
              />
              <ButtonMenuLink
                linkTo="/learn"
                buttonMessage="LEARN"
                onClick={toggleBurgerOpening}
              />
            </div>

            <div className={Styles.instructions}>
              <NavLink to="/instructions">
                <h2>?</h2>

                <button>HOW TO USE</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
