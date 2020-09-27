import React from "react";
import { Link } from "react-router-dom";

import "./SavedMovies.css";
import MovieCard from "../UI/MovieCard/MovieCard";

const SavedMovies = () => {
  let image = (
    <Link>
      <img
        src="https://image.tmdb.org/t/p/w92/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
        alt="poster"
      />
    </Link>
  );

  let overview = (
    <div className="saved-description">
      <h3 className="saved-description__title">Title</h3>
      <div className="saved-description__overview">
        <div className="saved-description__overview-desktop">
          <p className="saved-description__overview-text">
            Harry Potter has lived under the stairs at his aunt and uncle's
            house his whole life. But on his 11th birthday, he learns he's a
            powerful wizard -- with a place waiting for him at the Hogwarts
            School of Witchcraft and Wizardry. As he learns to harness his
            newfound powers with the help of the school's kindly headmaster,
            Harry uncovers the truth about his parents' deaths -- and about the
            villain who's to blame.
          </p>
        </div>
      </div>
    </div>
  );

  let overview_m = (
    <p>
      Harry Potter has lived under the stairs at his aunt and uncle's house his
      whole life. But on his 11th birthday, he learns he's a powerful wizard --
      with a place waiting for him at the Hogwarts School of Witchcraft and
      Wizardry. As he learns to harness his newfound powers with the help of the
      school's kindly headmaster, Harry uncovers the truth about his parents'
      deaths -- and about the villain who's to blame.
    </p>
  );

  return (
    <section className="saved-movies">
      <h3 className="saved-movies__title">Saved to watch</h3>
      <MovieCard image={image} overview={overview} overview_m={overview_m} />
    </section>
  );
};

export default SavedMovies;
