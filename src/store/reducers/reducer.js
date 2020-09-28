import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import searchReducer from "./searchReducer";
import watchlistReducer from "./watchlistReducer";

const reducer = combineReducers({
  moviesData: moviesReducer,
  selectedMovie: selectedMovieReducer,
  searchData: searchReducer,
  watchlist: watchlistReducer
});

export default reducer;
