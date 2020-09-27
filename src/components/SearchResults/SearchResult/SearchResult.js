import React from "react";
import { Link } from "react-router-dom";

import "./SearchResult.css";
import MovieCard from "../../UI/MovieCard/MovieCard";

function transformDate(date) {
  let transformedDate = new Date(date);
  return {
    day: String(transformedDate.getDate()).padStart(2, "0"),
    month: String(transformedDate.getMonth() + 1).padStart(2, "0"),
    year: transformedDate.getFullYear()
  };
}

const SearchResult = ({ result }) => {
  let releaseDate = transformDate(result.release);

  let image = (
    <Link to={`film/${result.id}`} className="search-result__poster">
      <img
        className="search-result__poster-image"
        src={`https://image.tmdb.org/t/p/w92${result.poster}`}
        alt="poster"
      />
    </Link>
  );

  let overview = (
    <div className="result-description">
      <div className="result-description__header">
        <Link to={`film/${result.id}`}>
          <h3 className="result-description__title">{result.title}</h3>
        </Link>
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
    </div>
  );

  let overview_m = <p>{result.description}</p>;

  return (
    <div className="search-result">
      <MovieCard image={image} overview={overview} overview_m={overview_m} />
    </div>
  );

  // return (
  //   <article className="search-result">
  //     <div className="search-result__wrapper">
  //       <Link to={`film/${result.id}`}>
  //         <section className="search-result__poster" style={posterStyle}>
  //           {posterImage}
  //         </section>
  //       </Link>
  //       <section className="search-result__description result-description">
  //         <div className="result-description__header">
  //           <Link to={`film/${result.id}`}>
  //             <h3 className="result-description__title">{result.title}</h3>
  //           </Link>
  //           <div className="result-description__rating result-rating">
  //             <i className="result-rating__icon fas fa-star"></i>
  //             <span className="result-rating__text">{result.rating}</span>
  //           </div>
  //         </div>
  //         <h4 className="result-description__release result-release">
  //           <span className="result-release__day">{releaseDate.day}.</span>
  //           <span className="result-release__month">{releaseDate.month}.</span>
  //           <span className="result-release__year">{releaseDate.year}</span>
  //         </h4>
  //         <div className="result-description__overview--desktop">
  //           <p className="result-description__overview-text">
  //             {result.description}
  //           </p>
  //         </div>
  //       </section>
  //     </div>
  //     <p className="result-description__overview--mobile">
  //       {result.description}
  //     </p>
  //   </article>
  // );
};

export default SearchResult;
