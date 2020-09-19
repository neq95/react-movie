import React from "react";

import "./ItemsGrid.css"
import MovieCard from "../MovieCard/MovieCard";

const ItemsGrid = (props) => {
  let renderedMovies = props.movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie} />
  })
  return (
    <div className="items-grid">
      {renderedMovies}
    </div>
  )
}

export default ItemsGrid;