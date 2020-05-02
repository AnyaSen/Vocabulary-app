import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { WordsContextProvider } from "./contexts/WordsContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WordsContextProvider>
        <App />
      </WordsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
