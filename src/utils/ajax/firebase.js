class Firebase {
  #baseURL = "https://react-movies-f30e4.firebaseio.com/";

  postMovie = async (movie) => {
    let url = new URL("watchlist.json", this.#baseURL);

    let postBody = {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    };

    return await fetch(url, postBody).then((response) => response.json());
  };

  getMovies = async () => {
    let url = new URL("watchlist.json", this.#baseURL);

    return await fetch(url).then((response) => response.json());
  };

  deleteMovie = async (id) => {
    let url = new URL(`watchlist/${id}.json`, this.#baseURL);

    return await fetch(url, {
      method: "DELETE"
    }).then((response) => response.json());
  };
}

const firebase = new Firebase();

export default firebase;
