import * as actionTypes from "../actions/actionTypes";

const initialState = {
  page: null,
  totalPages: null,
  results: []
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SEARCH_REQUEST:
      return {
        ...action.searchData
      }
      
    default:
      return state;
  }
}

export default searchReducer;