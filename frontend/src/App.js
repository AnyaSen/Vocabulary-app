import React from "react";
import "./App.scss";

import { Route, Switch, Redirect } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import LearningPage from "./pages/LearningPage/LearningPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/vocabulary" component={VocabularyPage} />
        <Route exact path="/learn" component={LearningPage} />

        <Redirect to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
