import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { filterByDuration, filterByQuery } from "../../utils/filterMovies";
import { internalServerError, notFoundError } from "../../utils/constants";

function SavedMovies({
  isLoggedIn,
  onSaveMovie,
  onDeleteMovie,
  isMoviesError,
}) {
  const [isSearchMovies, setIsSearchMovies] = useState([]);
  const [isFilterMovies, setIsFilterMovies] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  function onSearchMovie(searchWord) {
    setIsSearchMovies(filterByQuery(onSaveMovie, searchWord));
  }

  function onFilterCheckbox() {
    setIsFilterActive((prevState) => !prevState);
  }

  useEffect(() => {
    isFilterActive
      ? setIsFilterMovies(filterByDuration(isSearchMovies))
      : setIsFilterMovies(isSearchMovies);
  }, [isFilterActive, isSearchMovies]);

  useEffect(() => {
    setIsSearchMovies(onSaveMovie);
  }, [onSaveMovie]);

  return (
    <main className="saved-movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        onSearchMovie={onSearchMovie}
        onFilterCheckbox={onFilterCheckbox}
        isChecked={isFilterActive}
      />
      {isMoviesError ? (
        <div className="movies__error">{internalServerError}</div>
      ) : (
        ""
      )}

      {!isMoviesError && isFilterMovies.length === 0 && (
        <div className="movies__error">{notFoundError}</div>
      )}

      {!isMoviesError && isFilterMovies.length > 0 && (
        <MoviesCardList movies={isFilterMovies} onDeleteMovie={onDeleteMovie} />
      )}
      <Footer />
    </main>
  );
}

export default SavedMovies;
