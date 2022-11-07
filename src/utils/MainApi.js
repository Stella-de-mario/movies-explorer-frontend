class MainApi {
  constructor(options) {
    this._options = options;
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

  register(data) {
    return fetch(`${this._options.baseUrl}/signup`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.name,
        password: data.password,
        email: data.email,
      }),
    }).then(this._getResponse);
  }

  login(data) {
    return fetch(`${this._options.baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._options.headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then(this._getResponse);
  }

  loginOut() {
    return fetch(`${this._options.baseUrl}/signout`, {
      method: "POST",
      credentials: "include",
      headers: this._options.headers,
    }).then(this._getResponse);
  }

  editUser(data) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResponse);
  }

  addMovies(movie) {
    return fetch(`${this._options.baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._options.headers,
      body: JSON.stringify({
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      }),
    }).then(this._getResponse);
  }

  getMovies() {
    return fetch(`${this._options.baseUrl}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._options.headers,
    }).then(this._getResponse);
  }

  toggleMoviesStatus(movie, isSave, movieId) {
    if (!isSave) {
      return this.deleteMovies(movieId);
    } else {
      return this.addMovies(movie);
    }
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
