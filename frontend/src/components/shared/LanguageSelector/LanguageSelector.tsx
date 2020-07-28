import React, { ReactElement, useContext } from "react";

import Styles from "./LanguageSelector.module.scss";
import us_flagSvg from "../../../assets/img/us_flag.svg";
import rus_flagSvg from "../../../assets/img/rus_flag.svg";

import { LanguageContext } from "../../../contexts/LanguageContext";

interface Props {}

export default function LanguageSelector({}: Props): ReactElement {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <div className={Styles.LanguageSelector}>
      <img
        src={us_flagSvg}
        alt="English"
        onClick={() => {
          setLanguage("English");
          window.localStorage.setItem("language", "English");
        }}
      />

      <img
        src={rus_flagSvg}
        alt="Russian"
        onClick={() => {
          setLanguage("Russian");
          window.localStorage.setItem("language", "Russian");
        }}
      />
    </div>
  );
}
