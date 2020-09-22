import React from "react";

import "./SearchResults.css";
import SearchResult from "./SearchResult/SearchResult";
import {WidthConsumer} from "../../utils/Context/width-context";

const SearchResults = ({searchData}) => {
  if(searchData.totalResults === 0) {
    return (
      <p className="search-results__nothing">There are no movies that matched your query</p>
    )
  }

  let results = searchData.results;
  let renderedResults = results.map(result => {
    return (
      <WidthConsumer key={result.id}>
        {(width) => <SearchResult width={width} result={result} />}
      </WidthConsumer>
    )
  })

  return (
    <div className="search-results">
      {renderedResults}
    </div>
  )
}

export default SearchResults;