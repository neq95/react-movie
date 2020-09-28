import React from "react";
import { connect } from "react-redux";

import "./Watchlist.css";
import Container from "../../../components/UI/Container/Container";
import WatchlistMovie from "../../../components/WatchlistMovies/WatchlistMovie";
import * as actions from "../../../store/actions/actions";

class Watchlist extends React.Component {
  componentDidMount() {
    if (Object.keys(this.props.watchlist).length === 0) {
      this.props.getWatchlistMovies();
    }
  }

  onMovieDelete = (id) => {
    this.props.deleteWatchlistMovie(id);
  };

  render() {
    let movies = this.props.watchlist;

    let renderedMovies = Object.keys(movies).map((key) => {
      return (
        <WatchlistMovie
          key={key}
          movie={movies[key]}
          onMovieDelete={() => this.onMovieDelete(key)}
        />
      );
    });

    return (
      <div className="watchlist">
        <Container>
          <h2 className="watchlist__title">Your Watchlist</h2>
          {renderedMovies.length === 0 ? (
            <div>You haven't added any movies to your watchlist.</div>
          ) : (
            <section className="saved-movies">{renderedMovies}</section>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.watchlist);
  return {
    watchlist: state.watchlist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWatchlistMovie: (id) => dispatch(actions.deleteWatchlistMovie(id)),
    getWatchlistMovies: () => dispatch(actions.getWatchlistMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
