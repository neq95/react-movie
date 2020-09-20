import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movie: null,
  actors: []
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

    case actionTypes.FETCH_ACTORS_REQUEST:
      return {
        ...state,
        actors: action.actors
      }

    default:
      return state;
  }
}

export default selectedMovieReducer;