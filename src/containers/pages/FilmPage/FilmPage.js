import React from "react";
import { connect } from "react-redux";

import "./FilmPage.css";
import Container from "../../../components/UI/Container/Container";
import MovieDetails from "../../../components/MovieDetails/MovieDetails";
import * as actions from "../../../store/actions/actions";
import { WidthConsumer } from "../../../utils/Context/width-context";

class FilmPage extends React.Component {
  componentDidMount() {
    let id = this.props.location.pathname.match(/\d+?$/)[0];
    this.props.selectedMovieRequest(id);

    if (Object.keys(this.props.watchlist).length === 0) {
      this.props.getWatchlistMovies();
    }
  }

  componentWillUnmount() {
    this.props.removeSelectedMovie();
  }

  onMovieAdd = (movie) => {
    this.props.addWatchlistMovie(movie);
  };

  render() {
    const selectedMovie = this.props.selectedMovie;
    let addedToWatchlist = false;

    if (selectedMovie) {
      for (let movie in this.props.watchlist) {
        if (this.props.watchlist[movie].id === this.props.selectedMovie.id)
          addedToWatchlist = true;
      }
    }

    return (
      <main className="film-page">
        <Container className="film-page__container">
          <WidthConsumer>
            {(width) => {
              return (
                <MovieDetails
                  width={width}
                  actors={this.props.actors}
                  movie={this.props.selectedMovie}
                  onMovieAdd={this.onMovieAdd}
                  addedToWatchlist={addedToWatchlist}
                />
              );
            }}
          </WidthConsumer>
        </Container>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie.movie,
    actors: state.selectedMovie.actors,
    watchlist: state.watchlist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedMovieRequest: (id) => dispatch(actions.selectedMovieRequest(id)),
    removeSelectedMovie: () => dispatch(actions.removeSelectedMovie()),
    addWatchlistMovie: (movie) => dispatch(actions.addWatchlistMovie(movie)),
    getWatchlistMovies: () => dispatch(actions.getWatchlistMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
