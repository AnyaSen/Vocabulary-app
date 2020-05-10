import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { WordsContextProvider } from "./contexts/WordsContext";
import { ErrorContextProvider } from "./contexts/ErrorContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WordsContextProvider>
        <ErrorContextProvider>
          <App />
        </ErrorContextProvider>
      </WordsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
