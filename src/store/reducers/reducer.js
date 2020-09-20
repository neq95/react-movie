import * as actionTypes from "../actions/actionTypes";

const initialState = {
  moviesData: {
    movies: []
  },
  selectedMovie: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        moviesData: action.moviesData
      }

    case actionTypes.FETCH_SELECTED_MOVIE_REQUEST:
      return {
        ...state,
        selectedMovie: action.movie
      }

    case actionTypes.REMOVE_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: null
      }

    default:
      return state;
  }
}

export default reducer;