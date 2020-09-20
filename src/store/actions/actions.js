import * as actionTypes from "./actionTypes";
import movieDB from "../../utils/ajax/movie-db";

const storeMovies = (moviesData) => {
  return {
    type: actionTypes.FETCH_MOVIES_REQUEST,
    moviesData
  }
}

const storeSelectedMovie = (movie) => {
  return {
    type: actionTypes.FETCH_SELECTED_MOVIE_REQUEST,
    movie
  }
}

const storeActors = (actors) => {
  return {
    type: actionTypes.FETCH_ACTORS_REQUEST,
    actors
  }
}

export const removeSelectedMovie = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_MOVIE
  }
}

export const moviesRequest = () => {
  return (dispatch) => {
    movieDB.getMovies()
      .then(data => dispatch(storeMovies(data)));
  }
}

export const selectedMovieRequest = (id) => {
  return (dispatch) => {
    movieDB.getMovie(id)
      .then(movie => dispatch(storeSelectedMovie(movie)));
  }
}

export const actorsRequest = (id) => {
  return (dispatch) => {
    movieDB.getActors(id)
      .then(actors => dispatch(storeActors(actors)));
  }
}