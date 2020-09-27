import React from "react";

import "./SavedMovies.css";
import MovieCard from "../UI/MovieCard/MovieCard";

let movie = {
  description:
    "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
  id: 671,
  poster: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
  rating: 7.9,
  release: "2001-11-16",
  title: "Harry Potter and the Philosopher's Stone"
};

const SavedMovies = () => {
  return (
    <section className="saved-movies">
      <h3 className="saved-movies__title">Saved to watch</h3>
      <div className="saved-movies__movie">
        <MovieCard movie={movie} />
      </div>
    </section>
  );
};

export default SavedMovies;
