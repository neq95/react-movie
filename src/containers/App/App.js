import React from "react";
import {Switch, Route} from "react-router-dom";

import "./App.css";
import Header from "../../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import FilmPage from "../pages/FilmPage/FilmPage";

class App extends React.Component {
  state = {
    width: null
  }

  componentDidMount() {
    window.addEventListener("resize", this._setWidth);
    this._setWidth();
  }

  _setWidth = () => {
    let width = this._getWidth();
    this.setState({width});
  }

  _getWidth() {
    let viewportWidth = document.documentElement.clientWidth;
    
    if(viewportWidth < 600) {
      return "small";
    } else if(viewportWidth <1200) {
      return "medium";
    } else {
      return "big";
    }
  }

  render() {
    console.log("render");
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} width={this.state.width} />} />
          <Route path="/film" component={FilmPage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;