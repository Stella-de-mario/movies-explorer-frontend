class MainApi {
  constructor(options) {
    this._options = options;;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "GET",
      headers: this._options.headers,
      credentials: "include",
    }).then(this._getResponse);
  }

  register({ name, email, password }) {
    return fetch(`${this._options.baseUrl}/signup`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
       name, email, password
      }),
    }).then(this._getResponse);
  }

  login({ email, password}) {
    return fetch(`${this._options.baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._options.headers,
      body: JSON.stringify({
        email, password
      }),
    }).then(this._getResponse);
  }

  signOut(res) {
    return fetch(`${this._options.baseUrl}/signout`, {
      method: "DELETE",
      credentials: "include",
      headers: this._options.headers,
    })
    .then(res)
    .catch((err) => console.log(err))   
  }

  editUser({ name, email}) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._options.headers,
      body: JSON.stringify({
        name, email
      }),
    }).then(this._getResponse);
  }

  addMovies(movie) {
    return fetch(`${this._options.baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._options.headers,
      body: JSON.stringify({
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
      }),
    }).then(this._getResponse);
  }

  getSaveMovies() {
    return fetch(`${this._options.baseUrl}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._options.headers,
    }).then(this._getResponse);
  }

  deleteMovies(movieId) {
    return fetch(`${this._options.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._options.headers,
    }).then(this._getResponse);
  }

}
const mainApi = new MainApi({
  baseUrl: "https://api.diploma.irinavladi.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;