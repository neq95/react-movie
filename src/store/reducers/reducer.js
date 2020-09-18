import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_MOVIES:
      return {
        movies: action.movies
      }
    default:
      return state;
  }
}

export default reducer;