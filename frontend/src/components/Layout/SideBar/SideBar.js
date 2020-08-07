import React, { useContext } from "react";

import Styles from "./SideBar.module.scss";

import { NavLink } from "react-router-dom";
import ButtonMenuLink from "../../Buttons/ButtonMenuLink";
import UserLetter from "../UserLetter/UserLetter";

import { LanguageContext } from "../../../contexts/LanguageContext";
import typography from "../../../typography/typography.json";

export default function SideBar() {
  const { language } = useContext(LanguageContext);

  const { home, vocabulary, learn, how_to_use } = typography[language].SideBar;

  return (
    <div className={Styles.SideBar}>
      <UserLetter inCircle />

      <div className={Styles.links}>
        <ButtonMenuLink linkTo="/home" buttonMessage={home} />
        <ButtonMenuLink linkTo="/vocabulary" buttonMessage={vocabulary} />
        <ButtonMenuLink linkTo="/learn" buttonMessage={learn} />
      </div>

      <div className={Styles.instructions}>
        <NavLink to="/instructions">
          <h2>?</h2>

          <button>{how_to_use}</button>
        </NavLink>
      </div>
    </div>
  );
}
