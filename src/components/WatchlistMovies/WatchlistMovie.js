import React from "react";

import "./WatchlistMovie.css";

const WatchlistMovie = ({ movie, onMovieDelete }) => {
  let posterImage = "https://image.tmdb.org/t/p/w300" + movie.backdrop;
  return (
    <article className="watchlist-movie">
      <section className="wathclist-movie__poster">
        <img
          className="watchlist-movie__poster-image"
          src={posterImage}
          alt=""
        />
      </section>
      <section className="watchlist-movie__overview">
        <h3 className="watchlist-movie__title">{movie.title}</h3>
        <span className="watchlist-movie__duration">
          {Math.floor(movie.duration / 60)}h {movie.duration % 60}min
        </span>
        <p className="watchlist-movie__description">{movie.description}</p>
        <div className="saved-movie__controls">
          <button
            onClick={onMovieDelete}
            className="controls-item controls-item--delete"
          >
            <i className="controls-item__icon far fa-times-circle"></i>
            <span className="controls-item__text">Delete</span>
          </button>
        </div>
      </section>
    </article>
  );
};

export default WatchlistMovie;
