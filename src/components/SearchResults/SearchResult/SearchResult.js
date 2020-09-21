import React from "react";

import "./SearchResult.css";

function transformDate(date) {
  let transformedDate = new Date(date);
  return {
    day: String(transformedDate.getDate()).padStart(2, "0"),
    month: String(transformedDate.getMonth() + 1).padStart(2, "0"),
    year: transformedDate.getFullYear()
  }
}

const SearchResult = ({result, width}) => {
  let releaseDate = transformDate(result.release);

  let posterImage = null;
  let posterStyle = null;

  if(result.poster !== null) {
    if(width === "medium" || width === "big") {
      posterImage = <img 
        className="search-result__poster-image"
        src={`https://image.tmdb.org/t/p/w92${result.poster}`}
        alt="poster"
      />;
  
      posterStyle = {
        background: "none"
      }
    } else {
      posterStyle = {
        background: `url("https://image.tmdb.org/t/p/w92${result.poster}") no-repeat center / contain`
      }
    }
  }

  return (
    <article className="search-result">
      <div className="search-result__wrapper">
        <section className="search-result__poster" style={posterStyle}>
          {posterImage}
        </section>
        <section className="search-result__description result-description">
          <div className="result-description__header">
            <h3 className="result-description__title">
              {result.title}
            </h3>
            <div className="result-description__rating result-rating">
              <i className="result-rating__icon fas fa-star"></i>
              <span className="result-rating__text">{result.rating}</span>
            </div>
          </div>
          <h4 className="result-description__release result-release">
            <span className="result-release__day">{releaseDate.day}.</span>
            <span className="result-release__month">{releaseDate.month}.</span>
            <span className="result-release__year">{releaseDate.year}</span>
          </h4>
          <div className="result-description__overview--desktop">
            <p className="result-description__overview-text">
              {result.description}
            </p>
          </div>
        </section>
      </div>
      <p className="result-description__overview--mobile">
        {result.description}
      </p>
    </article>
  )
}

export default SearchResult;