import * as actionTypes from "./actionTypes";
import movieDB from "../../utils/ajax/movie-db";

const storeMovies = (moviesData) => {
  return {
    type: actionTypes.FETCH_MOVIES_REQUEST,
    moviesData
  }
}

const storeSelectedMovie = (movie, actors) => {
  return {
    type: actionTypes.FETCH_SELECTED_MOVIE_REQUEST,
    payload: { 
      movie, actors
    }
  }
}

const actorsRequest = (id, movie) => {
  return (dispatch) => {
    movieDB.getActors(id)
      .then(actors => dispatch(storeSelectedMovie(movie, actors)));
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

//Send 2 http requests with redux-thunk to update reducer only 1 time
export const selectedMovieRequest = (id) => {
  return (dispatch) => {
    movieDB.getMovie(id)
      .then(movie => dispatch(actorsRequest(id, movie)))
      //.then(movie => dispatch(storeSelectedMovie(movie)));
  }
}