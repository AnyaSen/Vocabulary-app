import React, {
  createContext,
  useState,
  Dispatch,
  ReactElement,
  ReactNode
} from "react";

interface ErrorContextType {
  isError: boolean;
  setIsError: Dispatch<any>;
  isVocabularyError: boolean;
  setIsVocabularyError: Dispatch<any>;
}

interface Props {
  children: ReactNode;
}

export const ErrorContext = createContext<ErrorContextType>({
  isError: false,
  isVocabularyError: false,
  setIsError: () => {},
  setIsVocabularyError: () => {}
});

export const ErrorContextProvider = ({ children }: Props): ReactElement => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isVocabularyError, setIsVocabularyError] = useState<boolean>(false);

  return (
    <ErrorContext.Provider
      value={{
        isError,
        setIsError,
        isVocabularyError,
        setIsVocabularyError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
