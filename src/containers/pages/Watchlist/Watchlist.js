import React from "react";

import "./Watchlist.css";
import Container from "../../../components/UI/Container/Container";
import WatchlistMovie from "../../../components/WatchlistMovies/WatchlistMovie";
import firebase from "../../../utils/ajax/firebase";

class Watchlist extends React.Component {
  state = {
    movies: {}
  };

  componentDidMount() {
    firebase.getMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    let movies = this.state.movies;
    if (!Object.keys(movies).length === 0) return <div>No</div>;

    let renderedMovies = Object.keys(movies).map((key) => {
      return <WatchlistMovie key={key} movie={movies[key]} />;
    });

    return (
      <div className="watchlist">
        <Container>
          <h2 className="watchlist__title">Your Watchlist</h2>
          <section className="saved-movies">{renderedMovies}</section>
        </Container>
      </div>
    );
  }
}

export default Watchlist;
