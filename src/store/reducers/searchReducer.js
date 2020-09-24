import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchResults: {
    page: null,
    totalPages: null,
    totalResults: null,
    results: []
  },
  loading: false,
  searchValue: ""
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue
      }

    case actionTypes.FETCH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: { ...action.searchData },
        loading: false
      }

    case actionTypes.CLEAR_SEARCH_DATA:
      return {
        ...initialState
      }
      
    default:
      return state;
  }
}

export default searchReducer;