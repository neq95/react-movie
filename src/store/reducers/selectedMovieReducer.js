import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movie: null
}

const selectedMovieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SELECTED_MOVIE_REQUEST:
      return {
        ...state,
        movie: action.movie
      }

    case actionTypes.REMOVE_SELECTED_MOVIE:
      return {
        ...state,
        movie: null
      }

    default:
      return state;
  }
}

export default selectedMovieReducer;