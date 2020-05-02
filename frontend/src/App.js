import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AddWordsForm from "./pages/AddWordsForm/AddWordsForm";
import WordsListReview from "./pages/WordsListReview/WordsListReview";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add" component={AddWordsForm} />
        <Route exact path="/review" component={WordsListReview} />
      </Switch>
    </div>
  );
}

export default App;
