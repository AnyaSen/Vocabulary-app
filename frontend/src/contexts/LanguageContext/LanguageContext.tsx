import React, { createContext, useState, Dispatch, ReactElement } from "react";

import { Props } from "../../types/types";

interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<any>;
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
