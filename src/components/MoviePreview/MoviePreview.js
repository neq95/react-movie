import React from "react";
import {Link} from "react-router-dom";

import "./MoviePreview.css";

function limitString(string) {
  if(string.length > 30) {
    string = string.substring(0, 29) + "..."
  }

  return string;
}

const MoviePreview = ({movie}) => {
  return (
    <div className="movie-preview">
      <div className="movie-preview__poster">
        <Link to={`/film/${movie.id}`}>
          <img 
            src={movie.poster}
            alt="poster" 
            className="movie-preview__poster-image"
          />
        </Link>
        <div className="movie-preview__rating">{movie.rating || 6.0}</div>
      </div>
      <div className="movie-preview__info">
        <Link to="/film">
          <h3 className="movie-preview__title">{limitString(movie.title)}</h3>
        </Link>
        <div className="movie-preview__genres">
          {movie.genres.map(genre => genre).join(", ")}
        </div>
      </div>
    </div>
  )
}

export default MoviePreview;