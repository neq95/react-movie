import {combineReducers} from "redux";
import moviesReducer from "./moviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";

const reducer = combineReducers({
  moviesData: moviesReducer,
  selectedMovie: selectedMovieReducer
});

export default reducer;