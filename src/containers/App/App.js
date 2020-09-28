import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import FilmPage from "../pages/FilmPage/FilmPage";
import { WidthProvider } from "../../utils/Context/width-context";
import SearchPage from "../pages/SeacrhPage/SearchPage";
import Error404 from "../../components/Error404/Error404";
import Watchlist from "../pages/Watchlist/Watchlist";

class App extends React.Component {
  state = {
    width: "",
    showPopup: true
  };

  //when size is changed, get new size and change state if breakpoint is passed
  componentDidMount() {
    window.addEventListener("resize", this._setWidth);
    this._setWidth();
  }

  _setWidth = () => {
    let oldwidth = this.state.width;
    let width = this._getWidth();

    if (width !== oldwidth) {
      this.setState({ width });
    }
  };

  _getWidth() {
    let viewportWidth = document.documentElement.clientWidth;

    if (viewportWidth < 600) {
      return "small";
    } else if (viewportWidth < 1200) {
      return "medium";
    } else {
      return "big";
    }
  }

  onPopupClose = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <div className="app">
        <Header
          onSearchSubmit={this.onSearchSubmit}
          searchValue={this.props.searchValue}
        />
        {/* Use React Context to pass width to deep components */}
        <WidthProvider value={this.state.width}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <HomePage width={this.state.width} />}
            />
            <Route path="/film" component={FilmPage} />
            <Route path="/search" component={SearchPage} />
            {/* <Route
              path="/movies"
              render={() => <NotMade width={this.state.width} />}
            /> */}
            {/* <Route path="/tv-shows" render={() => <NotMade width={this.state.width} />} /> */}
            <Route
              path="/watchlist"
              render={() => <Watchlist width={this.state.width} />}
            />
            <Route component={Error404} />
          </Switch>
        </WidthProvider>
        <Footer />
      </div>
    );
  }
}

export default App;
