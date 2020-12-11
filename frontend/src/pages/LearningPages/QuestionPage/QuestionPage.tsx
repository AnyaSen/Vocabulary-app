import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  ReactElement
} from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";
import typography from "../../../typography/typography.json";

import Styles from "./QuestionPage.module.scss";
import arrowSvg from "../../../assets/img/arrow_back.svg";

import { filterWordsFromArrayByNumber } from "../../../services/filterVocabulary";
import { WordsContext } from "../../../contexts/WordsContext";
import { LearningContext } from "../../../contexts/LearningContext";
import { LanguageContext } from "../../../contexts/LanguageContext";

import QuestionCard from "../../../components/QuestionCard";
import ProgressCard from "../../../components/shared/ProgressCard";
import ConfirmationCard from "../../../components/shared/ConfirmationCard";

interface MatchParams {
  newNumber: string;
  learningNumber: string;
  learnedNumber: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export default function QuestionPage({ match }): ReactElement {
  const { language } = useContext(LanguageContext);

  const { enter_translation, confirmation_to_quit } = typography[
    language
  ].LearningPage;

  const { yes, no } = typography[language].shared;

  const { newWords, learningWords, learnedWords } = useContext(WordsContext);

  const {
    wordCount,
    setCurrentWord,
    croppedNewWordsLength,
    setCroppedNewWordsLength,
    croppedLearningWordsLength,
    setCroppedLearningWordsLength,
    croppedLearnedWordsLength,
    setCroppedLearnedWordsLength,
    showCongratilationPage
  } = useContext(LearningContext);

  const { newNumber, learningNumber, learnedNumber } = match.params;
  const numberOfNewParam = newNumber;
  const numberOfLearningParam = learningNumber;
  const numberOfLearnedParam = learnedNumber;

  const croppedNewWordsArray = filterWordsFromArrayByNumber(
    newWords,
    numberOfNewParam
  );

  const croppedLearningWordsArray = filterWordsFromArrayByNumber(
    learningWords,
    numberOfLearningParam
  );

  const croppedLearnedWordsArray = filterWordsFromArrayByNumber(
    learnedWords,
    numberOfLearnedParam
  );

  const [croppedNewWords] = useState(croppedNewWordsArray);
  const [croppedLearningWords] = useState(croppedLearningWordsArray);
  const [croppedLearnedWords] = useState(croppedLearnedWordsArray);

  const totalWordArr = croppedNewWords.concat(
    croppedLearningWords,
    croppedLearnedWords
  );

  const [totalWords] = useState(totalWordArr);

  useEffect(() => {
    const { foreignWord } = totalWords[wordCount];

    setCurrentWord(foreignWord);
  }, [wordCount]);

  useEffect(() => {
    setCroppedNewWordsLength(croppedNewWords.length);
    setCroppedLearningWordsLength(croppedLearningWords.length);
    setCroppedLearnedWordsLength(croppedLearnedWords.length);
  }, []);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const history = useHistory();

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const confitmationCard = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const handleClick = e => {
      if (!e.composedPath().includes(confitmationCard.current)) {
        setShowConfirmation(false);
        return;
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [confitmationCard]);

  return (
    <div>
      {!showCongratilationPage && (
        <div className={Styles.progressCardArrowContainer}>
          {showConfirmation ? (
            <div ref={confitmationCard} className={Styles.confitmationCard}>
              <ConfirmationCard
                confQuestion={confirmation_to_quit}
                confAnswerOne={yes}
                confAnswerTwo={no}
                answerOneOnClick={() => {
                  history.push("/learn");
                }}
                answerTwoOnClick={() => {
                  setShowConfirmation(false);
                }}
              />
            </div>
          ) : (
            <div className={Styles.arrow}>
              <img src={arrowSvg} alt="Go Back" onClick={handleConfirmation} />
            </div>
          )}
          <ProgressCard
            newWordsNum={croppedNewWordsLength}
            learningWordsNum={croppedLearningWordsLength}
            learnedWordsNum={croppedLearnedWordsLength}
          />
        </div>
      )}
      <div className={showConfirmation ? Styles.DarkenedQuestionCard : ""}>
        <QuestionCard task={enter_translation} totalWorsArray={totalWords} />
      </div>
    </div>
  );
}
