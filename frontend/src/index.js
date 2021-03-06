import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import { WordsContextProvider } from "./contexts/WordsContext";
import { ErrorContextProvider } from "./contexts/ErrorContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { BrowseContextProvider } from "./contexts/BrowseContext";
import { LearningContextProvider } from "./contexts/LearningContext";
import { NavBarConextProvider } from "./contexts/NavBarConext";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { ConfirmationCardContextProvider } from "./contexts/ConfirmationCardContext";

axios.interceptors.response.use(
  function(config) {
    return config;
  },
  function(error) {
    if (401 === error.response.status) {
      localStorage.removeItem("token");
      window.location = "/";
    } else {
      return Promise.reject(error);
    }
  }
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfirmationCardContextProvider>
        <LanguageContextProvider>
          <ErrorContextProvider>
            <LoadingContextProvider>
              <NavBarConextProvider>
                <WordsContextProvider>
                  <LearningContextProvider>
                    <BrowseContextProvider>
                      <App />
                    </BrowseContextProvider>
                  </LearningContextProvider>
                </WordsContextProvider>
              </NavBarConextProvider>
            </LoadingContextProvider>
          </ErrorContextProvider>
        </LanguageContextProvider>
      </ConfirmationCardContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
