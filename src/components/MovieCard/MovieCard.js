import React from "react";

import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <img 
          src="https://image.tmdb.org/t/p/w154/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" 
          alt="poster" 
          className="movie-card__poster-image"
        />
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">Money Plane</h3>
        <div className="movie-card__genres">
          Mystery, Thriller
        </div>
      </div>
      <div className="movie-card__rating">6.3</div>
    </div>
  )
}

export default MovieCard;