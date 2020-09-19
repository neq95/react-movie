import React from "react";
import {Switch, Route} from "react-router-dom";

import "./App.css";
import Header from "../../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import FilmPage from "../pages/FilmPage/FilmPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/film" component={FilmPage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;