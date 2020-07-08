import React from "react";
import { useHistory } from "react-router-dom";

import Styles from "./InstructionsPage.module.scss";
import arrowStyles from "../../components/Buttons/ArrowBack/ArrowBack.module.scss";
import arrowSvg from "../../assets/img/arrow_back.svg";

import InstructionsCard from "./InstructionsCard/InstructionsCard";

export default function InstructionsPage() {
  let history = useHistory();

  return (
    <div className={Styles.InstructionsPage}>
      <div className={arrowStyles.ArrowBack} onClick={() => history.goBack()}>
        <img src={arrowSvg} alt="Go Back" />
      </div>

      <div className={Styles.InstructionsVideoContainer}>
        <iframe
          title="instructionsVideo"
          src="https://www.youtube.com/embed/dgvk_511dGw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
          >
        </iframe>
      </div>
      <div className={Styles.InstructionCards}>
        <h1>Instructions</h1>
        <InstructionsCard
          instructionNumber={1}
          text="    First, create an account pressing the sing up button."
          textafterBreak=" Log into your
      account if you already have one."
        />
        <InstructionsCard
          instructionNumber={2}
          text="    First, create an account pressing the sing up button."
          textafterBreak=" Log into your
      account if you already have one."
        />
        <InstructionsCard
          instructionNumber={3}
          text="    First, create an account pressing the sing up button."
          textafterBreak=" Log into your
      account if you already have one."
        />
        <InstructionsCard
          instructionNumber={4}
          text="    First, create an account pressing the sing up button."
          textafterBreak=" Log into your
      account if you already have one."
        />
        <InstructionsCard
          instructionNumber={5}
          text="    First, create an account pressing the sing up button."
          textafterBreak=" Log into your
      account if you already have one."
        />
      </div>
    </div>
  );
}
