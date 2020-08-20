import React, { useContext } from "react";
import "./App.scss";

import { Route, Switch, Redirect } from "react-router-dom";

import { LoadingContext } from "./contexts/LoadingContext";
import { ErrorContext } from "./contexts/ErrorContext";
import ScrollToTop from "./services/ScrollToTop";

import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import VocabularyPage from "./pages/VocabularyPage";
import HomePage from "./pages/HomePage";
import InitialPage from "./pages/InitialPage";
import ProgressPage from "./pages/ProgressPage";
import PreferencesPage from "./pages/LearningPages/PreferencesPage";
import QuestionPage from "./pages/LearningPages/QuestionPage";
import CongratsPage from "./pages/CongratsPage";
import LoadingPage from "./pages/LoadingPage";
import ErrorCard from "./components/ErrorCard";
import InstructionsPage from "./pages/InstructionsPage/";

function App() {
  const { isLoading } = useContext(LoadingContext);
  const { isError } = useContext(ErrorContext);

  return isLoading ? (
    <LoadingPage />
  ) : isError ? (
    <ErrorCard />
  ) : (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/instructions" component={InstructionsPage} />

        <Route exact path="/home" component={HomePage} />
        <Route exact path="/progress" component={ProgressPage} />
        <Route exact path="/vocabulary" component={VocabularyPage} />
        <Route exact path="/learn" component={PreferencesPage} />
        <Route
          exact
          path="/question/:newNumber/:learningNumber/:learnedNumber"
          component={QuestionPage}
        />
        <Route exact path="/congrats" component={CongratsPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
