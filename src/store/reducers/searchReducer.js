import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchResults: {
    page: null,
    totalPages: null,
    totalResults: null,
    results: []
  },
  loading: false
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        searchResults: { ...action.searchData },
        loading: false
      }

    case actionTypes.CLEAR_SEARCH_DATA:
      return {
        ...state,
        searchResults: { ...initialState }
      }
      
    default:
      return state;
  }
}

export default searchReducer;