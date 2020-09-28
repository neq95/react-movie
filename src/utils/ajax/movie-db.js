class MovieDB {
  #baseURL = "https://api.themoviedb.org/3/";
  #apiKey = "04c35731a5ee918f014970082a0088b1";
  #genres = {};

  async _checkGenres() {
    if (Object.keys(this.#genres).length === 0) {
      await this._getGenres();
    }
  }

  //Make and return required url with parametres, api key is included
  _makeURL(path, params) {
    let url = this.#baseURL + encodeURI(path);
    let resultURL = new URL(url);

    params = Object.assign({ api_key: this.#apiKey }, params);
    Object.keys(params).forEach((key) =>
      resultURL.searchParams.set(key, params[key])
    );

    return resultURL;
  }

  //Get genres from api and store them in convenient form
  async _getGenres() {
    let url = this._makeURL("genre/movie/list");

    let data = await fetch(url).then((response) => {
      if (!response.ok) throw new Error("Can't get data from api");
      return response.json();
    });

    data.genres.map((genre) => (this.#genres[genre.id] = genre.name));
  }

  _transformMovie(data) {
    //transfrom recieved data to keep only relevant information
    return {
      id: data.id,
      poster: data.poster_path,
      title: data.title || data.original_title,
      rating: data.vote_average,
      description: data.overview
    };
  }

  getMovies = async () => {
    //Fetch 1 time and then just check, if it exist
    await this._checkGenres();

    const params = {
      language: "en-US",
      page: 1
    };

    let url = this._makeURL("movie/popular", params);

    let data = await fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error("Can't get data from api");
      }
      return response.json();
    });

    let movies = data.results.map((movie) => {
      let genres = movie.genre_ids.map((genreId) => this.#genres[genreId]);
      let transformedMovie = this._transformMovie(movie);
      transformedMovie.genres = genres;

      return transformedMovie;
    });

    return {
      page: data.page,
      totalPages: data.total_pages,
      movies
    };
  };

  getMovie = async (id) => {
    const params = {
      language: "en-US"
    };

    let url = this._makeURL(`movie/${id}`, params);
    let data = await fetch(url).then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    });

    let genres = data.genres.map((genre) => genre.name);
    let duration = data.runtime;
    let release = data.release_date;
    let backdrop = data.backdrop_path;

    return {
      ...this._transformMovie(data),
      genres,
      duration,
      release,
      backdrop
    };
  };

  getActors = async (id) => {
    let url = this._makeURL(`movie/${id}/credits`);

    let data = await fetch(url).then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    });

    let actorsArray = data.cast;

    //Limit actors count
    if (actorsArray.length > 12) {
      actorsArray.splice(12, actorsArray.length - 12);
    }

    let transformedActors = data.cast
      .map((actor) => {
        return {
          name: actor.name,
          character: actor.character,
          profileImage: actor.profile_path,
          id: actor.id
        };
      })
      .filter((actor) => actor.profileImage);

    return transformedActors;
  };

  search = async (query) => {
    const params = {
      language: "en-US",
      page: 1,
      query,
      include_adult: false
    };

    const url = this._makeURL("search/movie", params);

    let data = await fetch(url).then((response) => {
      if (!response.ok) throw new Error("can't get data from api");
      return response.json();
    });

    let results = data.results.map((result) => {
      let transformedResult = this._transformMovie(result);
      transformedResult.release = result.release_date;

      return transformedResult;
    });

    return {
      page: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
      results
    };
  };
}

const movieDB = new MovieDB();

export default movieDB;
