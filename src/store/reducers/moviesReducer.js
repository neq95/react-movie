import * as actionTypes from "../actions/actionTypes";

const initialState = {
  page: null,
  totalPages: null,
  movies: []
}

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...action.moviesData
      }

    default:
      return state;
  }
}

export default moviesReducer;