import * as actionTypes from "./actionTypes";
import movieDB from "../../utils/ajax/movie-db";

const storeMovies = (moviesData) => {
  return {
    type: actionTypes.FETCH_MOVIES_REQUEST,
    moviesData
  }
}

export const moviesRequest = (config) => {
  return (dispatch) => {
    movieDB.getMovies(config)
      .then(data => dispatch(storeMovies(data)));
  }
}