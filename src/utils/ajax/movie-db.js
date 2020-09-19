class MovieDB {
  #baseURL = "https://api.themoviedb.org/3/";
  #imagesPosterURL = "https://image.tmdb.org/t/p/";
  #imagesBackdropURL = "https://image.tmdb.org/t/p/w1280";
  #apiKey = "04c35731a5ee918f014970082a0088b1";
  #genres = {};
  #imageConfiguration = {
    poster: {
      small: "w92",
      medium: "w154",
      big: "w185"
    },
    backdrop: {
      medium: "w780",
      big: "w1280"
    }
  };

  async _checkGenres() {
    if(Object.keys(this.#genres).length === 0) {
      await this._getGenres();
    }
  }

  //Make and return required url with parametres, api key is included
  _makeURL(path, params) {
    let url = this.#baseURL + encodeURI(path);
    let resultURL = new URL(url);

    params = Object.assign({api_key: this.#apiKey}, params);
    Object.keys(params).forEach(key => resultURL.searchParams.set(key, params[key]));

    return resultURL;
  }

  //Get genres from api and store them in convenient form
  async _getGenres() {
    let url = this._makeURL("genre/movie/list");
    let data = await fetch(url)
      .then(response => {
        if(!response.ok) throw new Error("Can't get data from api");
        return response.json();
      })

    data.genres.map(genre => this.#genres[genre.id] = genre.name);
  }

  getMovies = async(config) => {
    let {type, width} = config.image;
    let imageSize = this.#imageConfiguration[type][width];

    //Fetch 1 time and then just check, if it exist
    await this._checkGenres();

    let params = {
      api_key: this.#apiKey,
      language: "en-US",
      page: 1
    }

    let url = this._makeURL("movie/popular/", params);

    let data = await fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error("Can't get data from api");
        }
        return response.json();
      });
    
    //transfrom recieved data to keep only relevant information
    let movies = data.results.map(movie => {
      let genres = movie.genre_ids.map(genreId => this.#genres[genreId]);
      return {
        id: movie.id,
        backdrop: this.#imagesBackdropURL + movie.backdrop_path,
        poster: this.#imagesPosterURL + imageSize + movie.poster_path,
        genres,
        title: movie.title || movie.original_title,
        rating: movie.vote_average
      }
    });

    return {
      page: data.page,
      totalPages: data.total_pages,
      movies
    }
  }
}

const movieDB = new MovieDB();

export default movieDB;