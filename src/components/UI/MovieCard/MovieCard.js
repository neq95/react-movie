import React from "react";
import { Link } from "react-router-dom";

import "./MovieCard.css";

function transformDate(date) {
  let transformedDate = new Date(date);

  return {
    day: String(transformedDate.getDate()).padStart(2, "0"),
    month: String(transformedDate.getMonth() + 1).padStart(2, "0"),
    year: transformedDate.getFullYear()
  };
}

const MovieCard = ({ result }) => {
  // return (
  //   <article className="movie-card">
  //     <div className="movie-card__wrapper">
  //       <section className="movie-card__image">{image}</section>
  //       <section className="movie-card__overview">{overview}</section>
  //     </div>
  //     <section className="movie-card__overview-mobile">{overview_m}</section>
  //   </article>
  // );
  let releaseDate = transformDate(result.release);

  return (
    <article className="movie-card">
      <div className="movie-card__wrapper">
        <Link to={`film/${result.id}`} className="movie-card__poster">
          <img
            className="movie-card__poster-image"
            src={`https://image.tmdb.org/t/p/w92${result.poster}`}
            alt="poster"
          />
        </Link>
        <section className="movie-card__description card-description">
          <div className="movie-description__header">
            <Link to={`film/${result.id}`}>
              <h3 className="card-description__title">{result.title}</h3>
            </Link>
            <div className="card-description__rating card-rating">
              <i className="card-rating__icon fas fa-star"></i>
              <span className="card-rating__text">{result.rating}</span>
            </div>
          </div>
          <h4 className="card-description__release">
            <span>{releaseDate.day}.</span>
            <span>{releaseDate.month}.</span>
            <span>{releaseDate.year}</span>
          </h4>
          <div className="card-description__overview--desktop">
            <p className="card-description__overview-text">
              {result.description}
            </p>
          </div>
        </section>
      </div>
      <p className="card-description__overview--mobile">{result.description}</p>
    </article>
  );
};

export default MovieCard;
