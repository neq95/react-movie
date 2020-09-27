import React from "react";

import "./SearchResults.css";
import MovieCard from "../UI/MovieCard/MovieCard";

const SearchResults = ({ searchData }) => {
  if (searchData.totalResults === 0) {
    return (
      <p className="search-results__nothing">
        There are no movies that matched your query
      </p>
    );
  }

  let results = searchData.results;
  let renderedResults = results.map((result) => {
    return (
      <div className="search-result" key={result.id}>
        <MovieCard movie={result} />
      </div>
    );
  });

  return <div className="search-results">{renderedResults}</div>;
};

export default SearchResults;
