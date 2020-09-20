import React from "react";

import "./FilmPage.css";
import Container from "../../../components/UI/Container/Container";
import MovieCard from "../../../components/MovieCard/MovieCard";

const movie = {
  "adult": false,
  "backdrop_path": "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
  "belongs_to_collection": null,
  "budget": 75000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 35,
      "name": "Comedy"
    }
  ],
  "homepage": "http://www.birdsofpreymovie.net/",
  "id": 495764,
  "imdb_id": "tt7713068",
  "original_language": "en",
  "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
  "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
  "popularity": 248.155,
  "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
  "production_companies": [
    {
      "id": 9993,
      "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Entertainment",
      "origin_country": "US"
    },
    {
      "id": 82968,
      "logo_path": null,
      "name": "LuckyChap Entertainment",
      "origin_country": "GB"
    },
    {
      "id": 103462,
      "logo_path": null,
      "name": "Kroll & Co Entertainment",
      "origin_country": "US"
    },
    {
      "id": 174,
      "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      "name": "Warner Bros. Pictures",
      "origin_country": "US"
    },
    {
      "id": 429,
      "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Comics",
      "origin_country": "US"
    },
    {
      "id": 128064,
      "logo_path": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
      "name": "DC Films",
      "origin_country": "US"
    },
    {
      "id": 101831,
      "logo_path": "/l6x0SkRVp9ksGgRhboZbkI9w7PM.png",
      "name": "Clubhouse Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2020-02-05",
  "revenue": 201858461,
  "runtime": 109,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Mind Over Mayhem",
  "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
  "video": false,
  "vote_average": 7.2,
  "vote_count": 5798
}

class FilmPage extends React.Component {
  componentDidMount() {
   let id = this.props.location.pathname.match(/\d+?$/)[0];
   console.log(id);
  }

  render() {
    return (
      <main className="film-page">
        <Container className="film-page__container">
          <MovieCard movie={movie} />
        </Container>
      </main>
    )
  }
}

export default FilmPage;