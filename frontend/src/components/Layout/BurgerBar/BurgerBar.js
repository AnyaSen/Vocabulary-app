import React, { useContext } from "react";

import Styles from "./BurgerBar.module.scss";

import { NavLink } from "react-router-dom";

import burgerDotsSvg from "../../../assets/img/burgerDots.svg";
import closeSvg from "../../../assets/img/close.svg";

import { NavBarConext } from "../../../contexts/NavBarConext";
import { LanguageContext } from "../../../contexts/LanguageContext";
import typography from "../../../typography/typography.json";

import ButtonMenuLink from "../../Buttons/ButtonMenuLink";
import UserLetter from "../UserLetter";

export default function BurgerBar() {
  const { isBurgerOpen, setIsBurgerOpen } = useContext(NavBarConext);

  const { language } = useContext(LanguageContext);

  const { home, vocabulary, learn, how_to_use } = typography[language].SideBar;

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
                buttonMessage={home}
                onClick={toggleBurgerOpening}
              />
              <ButtonMenuLink
                linkTo="/vocabulary"
                buttonMessage={vocabulary}
                onClick={toggleBurgerOpening}
              />
              <ButtonMenuLink
                linkTo="/learn"
                buttonMessage={learn}
                onClick={toggleBurgerOpening}
              />
            </div>

            <div className={Styles.instructions}>
              <NavLink to="/instructions">
                <h2>?</h2>

                <button>{how_to_use}</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
