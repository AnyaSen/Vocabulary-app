import React from "react";

import Styles from "./InstructionsPage.module.scss";
import screen from "../../assets/img/screen.png";

import ArrowBack from "../../components/Buttons/ArrowBack/ArrowBack";
import InstructionsCard from "./InstructionsCard/InstructionsCard";

export default function InstructionsPage() {
  return (
    <div className={Styles.InstructionsPage}>
      <ArrowBack linkTo="/" />
      <div className={Styles.InstructionsVideoContainer}>
        <iframe
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
      </div>
    </div>
  );
}
