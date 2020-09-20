import React from "react";

import "./ItemsGrid.css"
import MoviePreview from "../MoviePreview/MoviePreview";
import {WidthConsumer} from "../../utils/Context/width-context";

const ItemsGrid = (props) => {
  let renderedMovies = props.movies.map(movie => {
    return (
      <WidthConsumer key={movie.id}>
        {(width) => <MoviePreview width={width} movie={movie} />}
      </WidthConsumer>
    )
  })
  return (
    <div className="items-grid">
      {renderedMovies}
    </div>
  )
}

export default ItemsGrid;