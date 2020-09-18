import * as actionTypes from "./actionTypes";
import movieDB from "../../utils/ajax/movie-db";

const storeMovies = (movies) => {
  return {
    type: actionTypes.ADD_MOVIES,
    movies
  }
}

export const addMovies = async() => {
  let movies = await movieDB.getMovies()
  console.log(movies);
}