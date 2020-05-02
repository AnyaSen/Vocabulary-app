import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { WordsContextProvider } from "./contexts/WordsContext";

ReactDOM.render(
  <React.StrictMode>
    <WordsContextProvider>
      <App />
    </WordsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
