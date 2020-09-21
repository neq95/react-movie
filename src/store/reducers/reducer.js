import {combineReducers} from "redux";
import moviesReducer from "./moviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import searchReducer from "./searchReducer";

const reducer = combineReducers({
  moviesData: moviesReducer,
  selectedMovie: selectedMovieReducer,
  searchData: searchReducer
});

export default reducer;