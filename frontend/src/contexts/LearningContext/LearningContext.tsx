import React, {
  createContext,
  useState,
  ReactElement,
  ReactNode,
  Dispatch
} from "react";
import { useForm } from "../../hooks/useForm";

interface LearningContextType {
  wordCount: number;
  setWordCount: Dispatch<any>;
  currentWord: string;
  setCurrentWord: Dispatch<any>;
  isCorrectGuess: boolean;
  setIsCorrectGuess: Dispatch<any>;
  isIncorrectGuess: boolean;
  setIsIncorrectGuess: Dispatch<any>;
  doNotKnowGuess: boolean;
  setDoNotKnowGuess: Dispatch<any>;

  borderColor: string;
  setBorderColor: Dispatch<any>;
  reaction: string;
  setReaction: Dispatch<any>;

  showCongratilationPage: boolean;
  setShowCongratilationPage: Dispatch<any>;

  values: { translationInput: string };
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void | undefined;
  clearValues: () => void;

  croppedNewWordsLength: number;
  setCroppedNewWordsLength: Dispatch<any>;
  croppedLearningWordsLength: number;
  setCroppedLearningWordsLength: Dispatch<any>;
  croppedLearnedWordsLength: number;
  setCroppedLearnedWordsLength: Dispatch<any>;
}

interface Props {
  children: ReactNode;
}

export const LearningContext = createContext<LearningContextType>({
  wordCount: 0,
  setWordCount: () => {},
  currentWord: "",
  setCurrentWord: () => {},
  isCorrectGuess: false,
  setIsCorrectGuess: () => {},
  isIncorrectGuess: false,
  setIsIncorrectGuess: () => {},
  doNotKnowGuess: false,
  setDoNotKnowGuess: () => {},

  borderColor: "",
  setBorderColor: () => {},
  reaction: "",
  setReaction: () => {},

  showCongratilationPage: false,
  setShowCongratilationPage: () => {},

  values: {
    translationInput: ""
  },
  handleChange: () => {},
  clearValues: () => {},

  croppedNewWordsLength: 0,
  setCroppedNewWordsLength: () => {},
  croppedLearningWordsLength: 0,
  setCroppedLearningWordsLength: () => {},
  croppedLearnedWordsLength: 0,
  setCroppedLearnedWordsLength: () => {}
});

export const LearningContextProvider = ({ children }: Props): ReactElement => {
  const [wordCount, setWordCount] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  const [croppedNewWordsLength, setCroppedNewWordsLength] = useState(0);
  const [croppedLearningWordsLength, setCroppedLearningWordsLength] = useState(
    0
  );
  const [croppedLearnedWordsLength, setCroppedLearnedWordsLength] = useState(0);

  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [isIncorrectGuess, setIsIncorrectGuess] = useState(false);
  const [doNotKnowGuess, setDoNotKnowGuess] = useState(false);

  const [borderColor, setBorderColor] = useState("");
  const [reaction, setReaction] = useState("");

  const [showCongratilationPage, setShowCongratilationPage] = useState(false);

  const [values, handleChange, clearValues] = useForm({
    translationInput: ""
  });

  return (
    <LearningContext.Provider
      value={{
        wordCount,
        setWordCount,
        currentWord,

        setCurrentWord,
        isCorrectGuess,
        setIsCorrectGuess,
        isIncorrectGuess,
        setIsIncorrectGuess,
        doNotKnowGuess,
        setDoNotKnowGuess,

        borderColor,
        setBorderColor,
        reaction,
        setReaction,

        showCongratilationPage,
        setShowCongratilationPage,

        values,
        handleChange,
        clearValues,

        croppedNewWordsLength,
        setCroppedNewWordsLength,
        croppedLearningWordsLength,
        setCroppedLearningWordsLength,
        croppedLearnedWordsLength,
        setCroppedLearnedWordsLength
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};
