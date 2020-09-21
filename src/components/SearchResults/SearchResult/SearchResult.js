import React from "react";

import "./SearchResult.css";

function transformDate(date) {
  let transformedDate = new Date(date);
  return {
    day: transformedDate.getDate(),
    month: transformedDate.getMonth(),
    year: transformedDate.getFullYear()
  }
}

const SearchResult = ({result, width}) => {
  let releaseDate = transformDate(result.release_date);
  console.log(result);
  let posterImage = null;

  if(width === "medium" || width === "big") {
    posterImage = <img 
      className="search-result__poster-image"
      src={`https://image.tmdb.org/t/p/w92${result.poster_path}`} 
      alt="poster"
    />
  }

  return (
    <article className="search-result">
      <div className="search-result__wrapper">
        <section className="search-result__poster">
          {posterImage}
        </section>
        <section className="search-result__description result-description">
          <div className="result-description__header">
            <h3 className="result-description__title">
              {result.title}
            </h3>
            <div className="result-description__rating result-rating">
              <i className="result-rating__icon fas fa-star"></i>
              <span className="result-rating__text">{result.vote_average}</span>
            </div>
          </div>
          <h4 className="result-description__release result-release">
            <span className="result-release__day">{releaseDate.day}.</span>
            <span className="result-release__month">{releaseDate.month}.</span>
            <span className="result-release__year">{releaseDate.year}</span>
          </h4>
          <div className="result-description__overview--desktop">
            <p className="result-description__overview-text">
              {result.overview}
            </p>
          </div>
        </section>
      </div>
      <p className="result-description__overview--mobile">
        {result.overview}
      </p>
    </article>
  )
}

export default SearchResult;