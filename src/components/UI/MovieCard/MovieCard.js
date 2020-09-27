import React from "react";

import "./MovieCard.css";

const MovieCard = ({ image, overview, overview_m }) => {
  return (
    <article className="movie-card">
      <div className="movie-card__wrapper">
        <section className="movie-card__image">{image}</section>
        <section className="movie-card__overview">{overview}</section>
      </div>
      <section className="movie-card__overview-mobile">{overview_m}</section>
    </article>
  );
};

export default MovieCard;
