import React from "react";
import {Switch, Route} from "react-router-dom";

import "./App.css";
import Header from "../../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default App;