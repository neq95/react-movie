import React from "react";
import { Link } from "react-router-dom";

import "./MoviePreview.css";
import * as imageConfig from "../../utils/imageConfig";

const MoviePreview = ({ movie, width }) => {
  let posterSrc =
    imageConfig.imagePath + imageConfig.dimensions.poster[width] + movie.poster;
  return (
    <article className="movie-preview">
      <div className="movie-preview__poster">
        <Link to={`/film/${movie.id}`}>
          <img
            src={posterSrc}
            alt="poster"
            className="movie-preview__poster-image"
          />
        </Link>
        <div className="movie-preview__rating">{movie.rating || 6.0}</div>
      </div>
      <div className="movie-preview__info">
        <Link to={`/film/${movie.id}`}>
          <h3 className="movie-preview__title">{movie.title}</h3>
        </Link>
        <div className="movie-preview__genres">
          {movie.genres.map((genre) => genre).join(", ")}
        </div>
      </div>
    </article>
  );
};

export default MoviePreview;
