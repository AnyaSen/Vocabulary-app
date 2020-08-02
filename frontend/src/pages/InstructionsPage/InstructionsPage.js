import React from "react";
import { useHistory } from "react-router-dom";

import Styles from "./InstructionsPage.module.scss";
import arrowSvg from "../../assets/img/arrow_back.svg";

import InstructionsCard from "../../components/InstructionsCard";

export default function InstructionsPage() {
  let history = useHistory();

  return (
    <div className={Styles.InstructionsPage}>
      <div className={Styles.ArrowBack} onClick={() => history.goBack()}>
        <img src={arrowSvg} alt="Go Back" />
      </div>

      <div className={Styles.InstructionsVideoContainer}>
        <iframe
          title="instructionsVideo"
          src="https://www.youtube.com/embed/qRo3O2N7uqg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={Styles.InstructionCards}>
        <h1>Instructions</h1>
        <InstructionsCard
          instructionNumber={1}
          text="First, create an account pressing SING UP."
          textafterBreak=" Log into your
      account if you already have one pressing LOG IN."
        />
        <InstructionsCard
          instructionNumber={2}
          text="On the home page, press the button VOCABULARY. "
          textafterBreak="On the vocabulary page, you can add words by typing a word and its translation, pressing ADD afterwords. You will see the word showing in the list below. Click on a word pair to see its information."
        />
        <InstructionsCard
          instructionNumber={3}
          text="Also, you can browse your words in your list using the input field in the upper right corner, just start entering the  word you’d like to find."
          textafterBreak="On the left, you can see the side bar, you can also navigate using it. Press “HOME” to go back to the home page."
        />
        <InstructionsCard
          instructionNumber={4}
          text="Press “Progress” on the home page. Here you can see a chart that’s showing the words. If you haven’t leaned any words yet, you will see that 100% of the words are NEW."
          textafterBreak="Press the arrow in the upper left corner to go back to the home page (to leave any other page, check for this arrow)."
        />
        <InstructionsCard
          instructionNumber={5}
          text="Now, press “LEARN” on the home page (or on the sidebar). You will see the preferences page. On the preferences page, you can see how many words you have. Press “Show ward types” if you want to see the definition of each type."
          textafterBreak="As for now, all the words are new. For example, you added 4 words, but you want to review only 3 of them. In this case, enter “3” in the preferences form and press “START”."
        />
        <InstructionsCard
          instructionNumber={6}
          text="You will see two cards: the first one with the foreign word, the second one with an empty input. If you don’t remember the translation, press “I DON’T REMEMBER” button above the cards."
          textafterBreak="You will see the translation appear in the second card, try to remember it, and press “CONTINUE”. "
        />
        <InstructionsCard
          instructionNumber={7}
          text="If you remember the translation enter the translation in the second card."
          textafterBreak="If your translation was correct, you will see a happy face, and the card’s border will become green."
        />
        <InstructionsCard
          instructionNumber={8}
          text="However, if the translation was not correct you will see a sad face, the card’s border will become red."
          textafterBreak="You will see your incorrect translation above the cards and the correct translation-inside the second card."
        />
        <InstructionsCard
          instructionNumber={9}
          text="In the upper right corner, you can see the progress card."
          textafterBreak="When the entered translation is correct the word transitions to the LEARNED type; when either you don’t remember the translation or the entered translation is incorrect, the word goes into the LEARNING category. A word never becomes NEW again after its review."
        />
        <InstructionsCard
          instructionNumber={10}
          text="After you have reviewed all the words, you will see the congratulations page."
          textafterBreak="Press “HOME”"
        />
        <InstructionsCard
          instructionNumber={11}
          text="On the home page, press “PROGRESS”."
          textafterBreak="Now you can see how many words of each type you have."
        />
        <InstructionsCard
          instructionNumber={12}
          text="If you want to see instructions, press the question mark at the bottom of the sidebar and you will see this page again. "
        />
        <InstructionsCard
          instructionNumber={13}
          text="To log out, press “LOGOUT” at the top of the sidebar."
        />
        <InstructionsCard
          instructionNumber={14}
          text="In case if you would like to delete the account press a cross sign in the upper left corner of a user circle with a letter at the top of the sidebar, then press “OK” and “Continue”."
          textafterBreak="Enter your user name in the input field and press “Submit”. Your account will be deleted and you will be redirected to the initial page."
        />
      </div>
    </div>
  );
}
