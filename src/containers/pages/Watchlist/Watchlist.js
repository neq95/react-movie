import React from "react";

import "./Watchlist.css";
import Container from "../../../components/UI/Container/Container";
import SavedMovies from "../../../components/SavedMovies/SavedMovies";

class Watchlist extends React.Component {
  render() {
    return (
      <div className="watchlist">
        <Container>
          <div className="watchlist__wrapper">
            <nav className="watchlist__navigation watchlist-navigation">
              <h2 className="watchlist-navigation__title">Your Watchlist</h2>
              <ul className="watchlist-navigation__items">
                <li className="watchlist-navigation__item">
                  <i className="watchlist-navigation__item-icon fas fa-bookmark"></i>
                  <p className="watchlist-navigation__item-text">
                    Saved to watch
                  </p>
                </li>
              </ul>
            </nav>
            <SavedMovies />
          </div>
        </Container>
      </div>
    );
  }
}

export default Watchlist;
