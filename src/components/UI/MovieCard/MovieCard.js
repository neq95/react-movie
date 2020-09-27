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

const MovieCard = ({ movie }) => {
  let releaseDate = transformDate(movie.release);

  return (
    <article className="movie-card">
      <div className="movie-card__wrapper">
        <Link to={`film/${movie.id}`} className="movie-card__poster">
          <img
            className="movie-card__poster-image"
            src={`https://image.tmdb.org/t/p/w92${movie.poster}`}
            alt="poster"
          />
        </Link>
        <section className="movie-card__description card-description">
          <div className="movie-description__header">
            <Link to={`film/${movie.id}`}>
              <h3 className="card-description__title">{movie.title}</h3>
            </Link>
            <div className="card-description__rating card-rating">
              <i className="card-rating__icon fas fa-star"></i>
              <span className="card-rating__text">{movie.rating}</span>
            </div>
          </div>
          <h4 className="card-description__release">
            <span>{releaseDate.day}.</span>
            <span>{releaseDate.month}.</span>
            <span>{releaseDate.year}</span>
          </h4>
          <div className="card-description__overview--desktop">
            <p className="card-description__overview-text">
              {movie.description}
            </p>
          </div>
        </section>
      </div>
      <p className="card-description__overview--mobile">{movie.description}</p>
    </article>
  );
};

export default MovieCard;
