import React from "react";

import "./SearchResults.css";
import SearchResult from "./SearchResult/SearchResult";
import {WidthConsumer} from "../../utils/Context/width-context";

let result = {
  "popularity": 128.348,
  "vote_count": 18138,
  "video": false,
  "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
  "id": 671,
  "adult": false,
  "backdrop_path": "/4GlSMUpzSd3cliYGFJVziSDX53S.jpg",
  "original_language": "en",
  "original_title": "Harry Potter and the Philosopher's Stone",
  "genre_ids": [
    12,
    14,
    10751
  ],
  "title": "Harry Potter and the Philosopher's Stone",
  "vote_average": 7.9,
  "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
  "release_date": "2001-11-16"
}

const SearchResults = () => {
  return (
    <div className="search-results">
      <WidthConsumer>
        {(width) => <SearchResult width={width} result={result} />}
      </WidthConsumer>
    </div>
  )
}

export default SearchResults;