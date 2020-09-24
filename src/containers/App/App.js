import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";

import "./App.css";
import Header from "../../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import FilmPage from "../pages/FilmPage/FilmPage";
import {WidthProvider} from "../../utils/Context/width-context";
import SearchPage from "../pages/SeacrhPage/SearchPage";
import Error404 from "../../components/Error404/Error404";
import NotMade from "../../components/NotMade/NotMade";
import Popup from "../../components/UI/Popup/Popup";

class App extends React.Component {
  state = {
    width: "",
    showPopup: true
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

  onPopupClose = () => {
    this.setState({showPopup: false})
  }

  render() {
    return (
      <div className="app">
        <Header onSearchSubmit={this.onSearchSubmit} searchValue={this.props.searchValue} />
        {/* Use React Context to pass width to deep components */}
        <WidthProvider value={this.state.width}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/film" component={FilmPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/movies" render={() => <NotMade width={this.state.width} />} />
            <Route path="/tv-shows" render={() => <NotMade width={this.state.width} />} />
            <Route path="/watchlist" render={() => <NotMade width={this.state.width} />} />
            <Route component={Error404} />
          </Switch>
        </WidthProvider>
        <Footer />
        <Popup show={this.state.showPopup} onPopupClose={this.onPopupClose}>
          <p>
            I didn't implement all conceived functionality yet. <br />
            But this demo shows basic mastery of core technologies, such as React, Redux, etc.
          </p>
        </Popup>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     searchValue: state.searchData.searchValue
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSearchValue: (searchValue) => dispatch(actions.setSearchValue(searchValue))
//   }
// }

export default withRouter(App);