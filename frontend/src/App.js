import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AddBrowsePage from "./pages/AddBrowsePage/AddBrowsePage";
import LearningPage from "./pages/LearningPage/LearningPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addbrowse" component={AddBrowsePage} />
        <Route exact path="/learn" component={LearningPage} />
      </Switch>
    </div>
  );
}

export default App;
