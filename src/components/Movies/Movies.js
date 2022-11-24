import React, { useEffect, useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import {
  notFoundError,
  internalServerError
} from "../../utils/constants";
import { filterByDuration, filterByQuery } from "../../utils/filterMovies";
import MoviesApi from "../../utils/MoviesApi";
import useWidthWindow from "../../hooks/useWidthWindow";
import {
  mediumWidthSize,
  minWidthSize,
  maxQuantityCards,
  mediumQuantityCards,
  minQuantityCards,
  maxNumberCards,
  mediumNumberCards,
} from "../../utils/constants";

function Movies({ isLoggedIn, savedMovies, handleAddMovies, handleDeleteMovies }) {

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [limitMovies, setLimitMovies] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);

  const isWidth = useWidthWindow();

  function onSearchMovie(searchQuery) {
    setIsSearchActive(true);
    setIsLoading(true);
      if (movies.length === 0) {
      MoviesApi.getMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem("movies", JSON.stringify(res));
          const filterMoviesArray = filterByQuery(res, searchQuery);
          setSearchMovies(filterMoviesArray);
          localStorage.setItem(
            "searchMovies",
            JSON.stringify(filterMoviesArray)
          );
          setIsSearchActive(false);
        })
        .catch((err) => {
          console.log(err);
          setIsSearchError(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      const filterSearchMoviesArray = filterByQuery(movies, searchQuery);
      setSearchMovies(filterSearchMoviesArray);
      localStorage.setItem(
        "searchMovies",
        JSON.stringify(filterSearchMoviesArray)
      );
      setIsLoading(false);
    }
    localStorage.setItem("searchQuery", searchQuery);
    isFilterActive
      ? localStorage.setItem("filterActive", true)
      : localStorage.removeItem("filterActive");
  }

  function onFilterCheckbox() {
    isFilterActive
      ? localStorage.setItem("filterActive", true)
      : localStorage.removeItem("filterActive");
    setIsFilterActive((prevState) => !prevState);
  }

  useEffect(() => {
    isFilterActive
      ? setFilterMovies(filterByDuration(searchMovies))
      : setFilterMovies(searchMovies);
  }, [isFilterActive, searchMovies]);

  function addMovies() {
    let added = isWidth > mediumWidthSize ? maxNumberCards : mediumNumberCards;
    setLimitMovies((prevValue) => {
      return prevValue.concat(
        filterMovies.slice(prevValue.length, prevValue.length + added)
      );
    });
  }

  useEffect(() => {
    let limited;
    if (isWidth > mediumWidthSize) {
      limited = maxQuantityCards;
    } else if (isWidth > minWidthSize) {
      limited = mediumQuantityCards;
    } else {
      limited = minQuantityCards;
    }
    if (filterMovies.length > limited) {
      setLimitMovies(filterMovies.slice(0, limited));
    } else {
      setLimitMovies(filterMovies);
    }
  }, [isWidth, filterMovies]);

  useEffect(() => {
    const allMovies = localStorage.getItem("movies");
    const searchMovies = localStorage.getItem("searchMovies");
    const isChecked = localStorage.getItem("filterActive");
    if (allMovies !== null ) {
      setMovies(JSON.parse(allMovies));
    }
    if (searchMovies !== null ) {
      setSearchMovies(JSON.parse(searchMovies));
    }
    if (isChecked !== null ) {
      setIsFilterActive(true);
    }
  }, []);

  return (
    <section className="movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        onSearchMovie={onSearchMovie}
        onFilterCheckbox={onFilterCheckbox}
        isChecked={isFilterActive}
        isLoading={isLoading}
      />
      {isLoading && <Preloader />}

      {isSearchError ? (
        <div className="movies__error">{internalServerError}</div>
      ) : (
        ""
      )}
      {!isSearchError &&
      !isLoading &&
      filterMovies.length === 0 &&
      isSearchActive ? (
        <div className="movies__error">{notFoundError}</div>
      ) : (
        ""
      )}

      {!isSearchError && !isLoading && filterMovies.length > 0 && (
        <MoviesCardList
          movies={limitMovies}
          handleAddMovies={handleAddMovies}
          handleDeleteMovies={handleDeleteMovies}
          savedMovies={savedMovies}
        />
      )}

      {limitMovies.length < filterMovies.length ? (
        <button
          className="movies-cards__button"
          type="button"
          onClick={addMovies}
        >
          Ещё
        </button>
      ) : (
        ""
      )}
      <Footer />
    </section>
  );
}

export default Movies;
