import * as actionTypes from "../actions/actionTypes";

const watchlistReducer = (state = {}, action) => {
  console.log(action.movie);
  switch (action.type) {
    case actionTypes.ADD_WATCHLIST_MOVIE:
      return {
        ...state,
        ...action.movie
      };

    case actionTypes.REMOVE_WATCHLIST_MOVIE:
      const result = {};
      Object.keys(state).forEach((key) => {
        if (key !== action.id) result[key] = state[key];
      });

      return {
        ...result
      };

    default:
      return state;
  }
};

export default watchlistReducer;
