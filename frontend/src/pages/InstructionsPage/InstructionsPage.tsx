import React, { useContext, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import typography from "../../typography/typography.json";
import { LanguageContext } from "../../contexts/LanguageContext";

import Styles from "./InstructionsPage.module.scss";
import arrowSvg from "../../assets/img/arrow_back.svg";

import InstructionsCard from "../../components/InstructionsCard";

export default function InstructionsPage(): ReactElement {
  const { language } = useContext(LanguageContext);

  const {
    instructions,
    text_one,
    text_after_break_one,
    text_two,
    text_after_break_two,
    text_three,
    text_after_break_three,
    text_four,
    text_after_break_four,
    text_five,
    text_after_break_five,
    text_six,
    text_after_break_six,
    text_seven,
    text_after_break_seven,
    text_eight,
    text_after_break_eight,
    text_nine,
    text_after_break_nine,
    text_ten,
    text_after_break_ten,
    text_eleven,
    text_after_break_eleven,
    text_twelve,
    text_thirteen,
    text_fourteen,
    text_after_break_fourteen
  } = typography[language].InstructionsPage;

  const history = useHistory();

  return (
    <div
      className={Styles.InstructionsPage}
      data-testid="instructions-page-container"
    >
      <div className={Styles.ArrowBack} onClick={() => history.goBack()}>
        <img src={arrowSvg} alt="Go Back" />
      </div>

      <div className={Styles.InstructionsVideoContainer}>
        <iframe
          title="instructionsVideo"
          src="https://www.youtube.com/embed/wkZnL-1QmGQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        className={Styles.InstructionCards}
        data-testid="instruction-cards-container"
      >
        <h1>{instructions}</h1>
        <InstructionsCard
          instructionNumber={1}
          text={text_one}
          textafterBreak={text_after_break_one}
        />
        <InstructionsCard
          instructionNumber={2}
          text={text_two}
          textafterBreak={text_after_break_two}
        />
        <InstructionsCard
          instructionNumber={3}
          text={text_three}
          textafterBreak={text_after_break_three}
        />
        <InstructionsCard
          instructionNumber={4}
          text={text_four}
          textafterBreak={text_after_break_four}
        />
        <InstructionsCard
          instructionNumber={5}
          text={text_five}
          textafterBreak={text_after_break_five}
        />
        <InstructionsCard
          instructionNumber={6}
          text={text_six}
          textafterBreak={text_after_break_six}
        />
        <InstructionsCard
          instructionNumber={7}
          text={text_seven}
          textafterBreak={text_after_break_seven}
        />
        <InstructionsCard
          instructionNumber={8}
          text={text_eight}
          textafterBreak={text_after_break_eight}
        />
        <InstructionsCard
          instructionNumber={9}
          text={text_nine}
          textafterBreak={text_after_break_nine}
        />
        <InstructionsCard
          instructionNumber={10}
          text={text_ten}
          textafterBreak={text_after_break_ten}
        />
        <InstructionsCard
          instructionNumber={11}
          text={text_eleven}
          textafterBreak={text_after_break_eleven}
        />
        <InstructionsCard instructionNumber={12} text={text_twelve} />
        <InstructionsCard instructionNumber={13} text={text_thirteen} />
        <InstructionsCard
          instructionNumber={14}
          text={text_fourteen}
          textafterBreak={text_after_break_fourteen}
        />
      </div>
    </div>
  );
}
