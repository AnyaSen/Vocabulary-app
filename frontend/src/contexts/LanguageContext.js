import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
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
