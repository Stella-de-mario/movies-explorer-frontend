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
  saveMovies,
  handleDeleteMovies,
  isMoviesError,
}) {
  const [isSearchMovies, setIsSearchMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  function handleSearchMovie(searchWord) {
    setIsSearchMovies(filterByQuery(saveMovies, searchWord));
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
    setIsSearchMovies(saveMovies);
  }, [saveMovies]);

  return (
    <main className="saved-movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        handleSearchMovie={handleSearchMovie}
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
