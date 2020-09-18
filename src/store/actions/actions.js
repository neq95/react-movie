import actionTypes from "./actionTypes";

export const addMovies = (movies) => {
  return {
    type: actionTypes.ADD_MOVIES,
    movies
  }
}