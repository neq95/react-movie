import * as actionTypes from "./actionTypes";
import movieDB from "../../utils/ajax/movie-db";

const storeMovies = (moviesData) => {
  return {
    type: actionTypes.FETCH_MOVIES_REQUEST,
    moviesData
  }
}

export const moviesRequest = () => {
  return (dispatch) => {
    movieDB.getMovies()
      .then(data => dispatch(storeMovies(data)));
  }
}