import React from "react";

import "./MovieDetails.css";
import Spinner from "../UI/Spinner/Spinner";
import * as imageConfig from "../../utils/imageConfig";

const MovieDetails = ({ movie, width, actors }) => {
  if (!movie) {
    return <Spinner />;
  }

  let poster = <div className="poster__skeleton"></div>;

  if (width) {
    let posterSrc =
      imageConfig.imagePath +
      imageConfig.dimensions.poster[width] +
      movie.poster;
    poster = <img src={posterSrc} alt="poster" />;
  }

  let renderedActors;

  if (Object.keys(actors).length === 0) {
    renderedActors = [];
    for (let i = 0; i < 4; i++) {
      renderedActors.push(
        <div key={i + 1} className="cast__actor actor">
          <div className="actor-skeleton__profile"></div>
          <p className="actor-skeleton__name"></p>
          <p className="actor-skeleton__character"></p>
        </div>
      );
    }
  } else {
    renderedActors = actors.map((actor) => {
      let imagePath =
        imageConfig.imagePath +
        imageConfig.dimensions.profile[width] +
        actor.profileImage;

      let profileStyle = {
        background: `url(${imagePath}) no-repeat center / cover`
      };

      return (
        <div key={actor.id} className="cast__actor actor">
          <div className="actor__profile" style={profileStyle}></div>
          <p className="actor__name">{actor.name}</p>
          <p className="actor__character-name">{actor.character}</p>
        </div>
      );
    });
  }

  return (
    <div className="movie-card">
      <article className="movie-card__card card">
        <div className="card__wrapper">
          <section className="card__info">
            <div className="card__poster">{poster}</div>
            <div className="card__header">
              <div className="card__extra">
                <div className="card__rating">{movie.rating || 6}</div>
                <div className="card__add--mobile card-add">
                  <i className="card-add__icon fas fa-plus"></i>
                  <span className="card-add__text">Want</span>
                </div>
              </div>
              <h1 className="card__title">{movie.title}</h1>
              <div className="card__duration">
                {Math.floor(movie.duration / 60)}h {movie.duration % 60}min
              </div>
              <p className="card__description--desktop">{movie.description}</p>
            </div>
            <button className="card__add--desktop">Add to Watchlist</button>
          </section>
          <p className="card__description">{movie.description}</p>
          <h3 className="card__cast-title">CAST</h3>
        </div>
        <section className="card__cast cast">
          <div className="cast__actors">{renderedActors}</div>
        </section>
      </article>
    </div>
  );
};

export default MovieDetails;
