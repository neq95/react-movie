import React from "react";
import {Link} from "react-router-dom";

import "./MovieCard.css";

function limitString(string) {
  if(string.length > 30) {
    string = string.substring(0, 29) + "..."
  }

  return string;
}

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <Link to="/film">
          <img 
            src={movie.poster}
            alt="poster" 
            className="movie-card__poster-image"
          />
        </Link>
        <div className="movie-card__rating">{movie.rating || 6.0}</div>
      </div>
      <div className="movie-card__info">
        <Link to="/film">
          <h3 className="movie-card__title">{limitString(movie.title)}</h3>
        </Link>
        <div className="movie-card__genres">
          {movie.genres.map(genre => genre).join(", ")}
        </div>
      </div>
    </div>
  )
}

export default MovieCard;