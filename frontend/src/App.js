import React from "react";
import "./App.scss";

import { Route, Switch, Redirect } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import HomePage from "./pages/HomePage/HomePage";
import InitialPage from "./pages/InitialPage/InitialPage";
import ProgressPage from "./pages/ProgressPage/ProgressPage";
import PreferencesPage from "./pages/LearningPage/PreferencesPage/PreferencesPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/progress" component={ProgressPage} />
        <Route exact path="/vocabulary" component={VocabularyPage} />
        <Route exact path="/learn" component={PreferencesPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
