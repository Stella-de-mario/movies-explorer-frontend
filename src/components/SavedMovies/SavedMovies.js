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
  savedMovies,
  handleDeleteMovies,
  isMoviesError,
}) {
  const [isSearchMovies, setIsSearchMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  function onSearchMovie(searchWord) {
    setIsSearchMovies(filterByQuery(savedMovies, searchWord));
  }

  function onFilterCheckbox() {
    setIsFilterActive((prevState) => !prevState);
  }

  useEffect(() => {
    if(isFilterActive) {
      setFilterMovies(filterByDuration(isSearchMovies))
    } else {
      setFilterMovies(isSearchMovies);
    }    
  }, [isFilterActive, isSearchMovies])

  useEffect(() => {
    setIsSearchMovies(savedMovies);
  }, [savedMovies]);

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

      {!isMoviesError && filterMovies.length === 0 && (
        <div className="movies__error">{notFoundError}</div>
      )}

      {!isMoviesError && filterMovies.length > 0 && (
        <MoviesCardList movies={filterMovies} handleDeleteMovies={handleDeleteMovies} />
      )}
      <Footer />
    </main>
  );
}

export default SavedMovies;
