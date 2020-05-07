import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import LearningPage from "./pages/LearningPage/LearningPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/addbrowse" component={VocabularyPage} />
        <Route exact path="/learn" component={LearningPage} />
      </Switch>
    </div>
  );
}

export default App;
