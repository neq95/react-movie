import React from "react";

import "./SearchResult";

const SearchResult = ({result}) => {
  console.log(result)
  return (
    <section className="search-result">
      <div className="search-result__poster">
        <img src="" alt="poster"/>
      </div>
    </section>
  )
}

export default SearchResult;