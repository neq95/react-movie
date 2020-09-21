import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";

import "./App.css";
import Header from "../../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import FilmPage from "../pages/FilmPage/FilmPage";
import {WidthProvider} from "../../utils/Context/width-context";
import SearchPage from "../pages/SeacrhPage/SearchPage";

class App extends React.Component {
  state = {
    width: ""
  }

  //when size is changed, get new size and change state if breakpoint is passed
  componentDidMount() {
    window.addEventListener("resize", this._setWidth);
    this._setWidth();
  }

  _setWidth = () => {
    let oldwidth = this.state.width;
    let width = this._getWidth();

    if(width !== oldwidth) {
      this.setState({width});
    }
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
    console.log(this.props);
    return (
      <div className="app">
        <Header />
        {/* Use React Context to pass width to deep components */}
        <WidthProvider value={this.state.width}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/film" component={FilmPage} />
            <Route path="/search" component={SearchPage} />
          </Switch>
        </WidthProvider>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);