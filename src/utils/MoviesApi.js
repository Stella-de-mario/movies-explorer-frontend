// class MoviesApi {
//   constructor(options) {
//     this._options = options;
//   }

//   _getResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   getMovies() {
//     return fetch(`${this._options.baseUrl}`, {
//       headers: this._options.headers,
//     }).then(this._getResponse);
//   }
// }

// const moviesApi = new MoviesApi({
//   baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default moviesApi;
