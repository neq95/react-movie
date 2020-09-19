import * as actionTypes from "../actions/actionTypes";

const initialState = {
  moviesData: {
    movies: []
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      return {
        moviesData: action.moviesData
      }
    default:
      return state;
  }
}

export default reducer;