import React from "react";

import "./ItemsGrid.css"
import MoviePreview from "../MoviePreview/MoviePreview";

const ItemsGrid = (props) => {
  let renderedMovies = props.movies.map(movie => {
    return <MoviePreview key={movie.id} movie={movie} />
  })
  return (
    <div className="items-grid">
      {renderedMovies}
    </div>
  )
}

export default ItemsGrid;