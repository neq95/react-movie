import React from "react";

import "./MovieCard.css";

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <img 
          src={movie.poster}
          alt="poster" 
          className="movie-card__poster-image"
        />
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <div className="movie-card__genres">
          {movie.genres.map(genre => genre).join(", ")}
        </div>
      </div>
      <div className="movie-card__rating">{movie.rating || 6.0}</div>
    </div>
  )
}

export default MovieCard;