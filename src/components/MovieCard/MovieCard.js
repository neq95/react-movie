import React from "react";

import "./MovieCard.css";

const MovieCard = (props) => {
  console.log(props.movie);
  return (
    <div className="movie-card">
      <article className="movie-card__card card">
        <div className="card__wrapper">
          <section className="card__info">
            <div className="card__poster">
              <img src="https://image.tmdb.org/t/p/w92/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" alt="poster"/>
            </div>
            <div className="card__header">
              <div className="card__extra">
                <div className="card__rating">7.2</div>
                <div className="card__add--mobile card-add">
                  <i className="card-add__icon fas fa-plus"></i>
                  <span className="card-add__text">Want</span>
                </div>
              </div>
              <h1 className="card__title">{props.movie.title}</h1>
              <div className="card__duration">
                {Math.floor(props.movie.runtime / 60)}h {props.movie.runtime % 60}min
              </div>
              <p className="card__description--desktop">{props.movie.overview}</p>
            </div>
            <button className="card__add--desktop">Add to Watchlist</button>
          </section>
          <p className="card__description">{props.movie.overview}</p>
          <h3 className="card__cast-title">CAST</h3>
        </div>
        <section className="card__cast cast">
          <div className="cast__actors">
            <div className="cast__actor actor">
              <div className="actor__profile">
                {/* <img 
                  className="actor__profile-image"
                  src="https://image.tmdb.org/t/p/w45/aEmyadfRXTmmR7UW7OXsm5a6smS.jpg" 
                  alt="dasdf"
                /> */}
              </div>
              <p className="actor__name">Rosie Perez</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default MovieCard;