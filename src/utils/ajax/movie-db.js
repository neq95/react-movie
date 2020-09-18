class MovieDB {
  #baseURL = "https://api.themoviedb.org/";
  #imagesBaseURL = "https://image.tmdb.org/t/p/";
  #apiKey = "04c35731a5ee918f014970082a0088b1";

  getMovies = async() => {
    let url = "3/movie/popular"
    let resultURL = new URL(url, this.#baseURL);

    let params = {
      api_key: this.#apiKey,
      language: "en-US",
      page: 1
    }

    Object.keys(params).forEach(key => resultURL.searchParams.set(key, params[key]));
    
    console.log(resultURL);

    let movies = await fetch(resultURL)
      .then(response => {
        if(!response.ok) {
          throw new Error("Can't get data from api");
        }
        return response.json();
      });
    
    return movies;
  }
}

const movieDB = new MovieDB();

export default movieDB;