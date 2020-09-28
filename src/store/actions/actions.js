import * as actionTypes from "./actionTypes";
import movieDB from "../../utils/ajax/movie-db";
import firebase from "../../utils/ajax/firebase";

const storeMovies = (moviesData) => {
  return {
    type: actionTypes.FETCH_MOVIES_REQUEST,
    moviesData
  };
};

const storeSelectedMovie = (movie, actors) => {
  return {
    type: actionTypes.FETCH_SELECTED_MOVIE_REQUEST,
    payload: {
      movie,
      actors
    }
  };
};

const searchLoading = () => {
  return {
    type: actionTypes.FETCH_SEARCH_REQUEST
  };
};

const searchSuccess = (searchData) => {
  return {
    type: actionTypes.FETCH_SEARCH_SUCCESS,
    searchData
  };
};

const actorsRequest = (id, movie) => {
  return (dispatch) => {
    movieDB
      .getActors(id)
      .then((actors) => dispatch(storeSelectedMovie(movie, actors)));
  };
};

export const moviesRequest = () => {
  return (dispatch) => {
    movieDB.getMovies().then((data) => dispatch(storeMovies(data)));
  };
};

//Send 2 http requests with redux-thunk to update reducer only 1 time
export const selectedMovieRequest = (id) => {
  return (dispatch) => {
    movieDB.getMovie(id).then((movie) => dispatch(actorsRequest(id, movie)));
  };
};

export const removeSelectedMovie = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_MOVIE
  };
};

export const searchRequest = (query) => {
  return (dispatch) => {
    dispatch(searchLoading());
    movieDB
      .search(query)
      .then((searchData) => dispatch(searchSuccess(searchData)));
  };
};

export const clearSearchData = () => {
  return {
    type: actionTypes.CLEAR_SEARCH_DATA
  };
};

export const setSearchValue = (searchValue) => {
  return {
    type: actionTypes.SET_SEARCH_VALUE,
    searchValue
  };
};

const storeWatchlistMovie = (movie) => {
  return {
    type: actionTypes.ADD_WATCHLIST_MOVIE,
    movie
  };
};

export const addWatchlistMovie = (movie) => {
  return async (dispatch) => {
    let id = await firebase.postMovie(movie);
    dispatch(storeWatchlistMovie({ [id.name]: movie }));
  };
};

export const getWatchlistMovies = () => {
  return async (dispatch) => {
    let movies = await firebase.getMovies();
    dispatch(storeWatchlistMovie(movies));
  };
};

const removeWatchlistMovie = (id) => {
  return {
    type: actionTypes.REMOVE_WATCHLIST_MOVIE,
    id
  };
};

export const deleteWatchlistMovie = (id) => {
  return async (dispatch) => {
    await firebase.deleteMovie(id);
    dispatch(removeWatchlistMovie(id));
  };
};
