import React from "react";

import "./Watchlist.css";
import Container from "../../../components/UI/Container/Container";
import SavedMovies from "../../../components/SavedMovies/SavedMovies";

class Watchlist extends React.Component {
  render() {
    return (
      <div className="watchlist">
        <Container>
          <h2 className="watchlist__title">Your Watchlist</h2>
          <SavedMovies />
        </Container>
      </div>
    );
  }
}

export default Watchlist;
