import React, {
  createContext,
  useState,
  Dispatch,
  ReactElement,
  ReactNode
} from "react";

interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<any>;
}

interface Props {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "English",
  setLanguage: () => {}
});

export const LanguageContextProvider = ({ children }: Props): ReactElement => {
  const languageLocalStorage = window.localStorage.getItem("language");

  const [language, setLanguage] = useState(languageLocalStorage || "English");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
