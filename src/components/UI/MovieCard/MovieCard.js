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

const MovieCard = ({ movie, controls }) => {
  let releaseDate = transformDate(movie.release);

  let poster = (
    <Link to={`film/${movie.id}`} className="movie-card__poster">
      <img
        className="movie-card__poster-image"
        src={`https://image.tmdb.org/t/p/w92${movie.poster}`}
        alt="poster"
      />
    </Link>
  );

  if (controls) {
    poster = (
      <Link to={`film/${movie.id}`} className="saved-movie__poster">
        <img
          className="saved-movie__poster-image"
          src={`https://image.tmdb.org/t/p/w154${movie.poster}`}
          alt="poster"
        />
      </Link>
    );
  }

  return (
    <article className="movie-card">
      <div className="movie-card__wrapper">
        {poster}
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
          <div className="controls-desktop">{controls}</div>
        </section>
      </div>
      <p className="card-description__overview--mobile">{movie.description}</p>
      <div className="controls-mobile">{controls}</div>
    </article>
  );
};

export default MovieCard;
