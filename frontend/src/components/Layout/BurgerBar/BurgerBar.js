import React, { useContext } from "react";

import Styles from "./BurgerBar.module.scss";

import { NavLink } from "react-router-dom";

import burgerDotsSvg from "../../../assets/img/burgerDots.svg";
import closeSvg from "../../../assets/img/close.svg";

import { NavBarConext } from "../../../contexts/NavBarConext";

import ButtonMenuLink from "../../Buttons/ButtonMenuLink";
import UserLetter from "../UserLetter/UserLetter";

export default function BurgerBar() {
  const { isBurgerOpen, setIsBurgerOpen } = useContext(NavBarConext);

  const toggleBurgerOpening = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <div className={Styles.BurgerBar}>
      <img
        alt={isBurgerOpen ? "close" : "menu"}
        src={isBurgerOpen ? closeSvg : burgerDotsSvg}
        onClick={toggleBurgerOpening}
        className={isBurgerOpen ? Styles.close : Styles.dots}
      />

      {isBurgerOpen && (
        <div className={Styles.BurgerOpen}>
          <div className={Styles.BurgerCard}>
            <UserLetter />

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
