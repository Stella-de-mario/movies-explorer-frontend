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

function Movies({ isLoggedIn, saveMovies, handleAddMovies, handleDeleteMovies }) {
  const [movies, setMovies] = useState([]);
  const [isSearchMovies, setIsSearchMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isLimitedMovies, setIsLimitedMovies] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const isWidth = useWidthWindow();

  function handleSearchMovie(searchWord) {
    setIsLoading(true);
    setIsSearchActive(true);
    setIsError(false);
    if (movies.length === 0) {
      MoviesApi.getMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem("movies", JSON.stringify(res));
          const filterMoviesArray = filterByQuery(res, searchWord);
          setIsSearchMovies(filterMoviesArray);
          localStorage.setItem(
            "isSearchedMovies",
            JSON.stringify(filterMoviesArray)
          );
          setIsSearchMovies(false);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      const filterMoviesArray = filterByQuery(movies, searchWord);
      setIsSearchMovies(filterMoviesArray);
      localStorage.setItem(
        "isSearchedMovies",
        JSON.stringify(filterMoviesArray)
      );
      setIsLoading(false);
    }
    localStorage.setItem("searchWord", searchWord);
    isFilterActive
      ? localStorage.setItem("filterActive", true)
      : localStorage.removeItem("filterActive");
  }

  function handleFilterCheckbox() {
    isFilterActive
      ? localStorage.setItem("filterActive", true)
      : localStorage.removeItem("filterActive");
    setIsFilterActive((prevState) => !prevState);
  }

  function addMovies() {
    let added = isWidth > mediumWidthSize ? maxNumberCards : mediumNumberCards;
    setIsLimitedMovies((prevValue) => {
      return prevValue.concat(
        filterMovies.slice(prevValue.length, prevValue.length + added)
      );
    });
  }

  useEffect(() => {
    isFilterActive
      ? setFilterMovies(filterByDuration(isSearchMovies))
      : setFilterMovies(isSearchMovies);
  }, [isFilterActive, isSearchMovies]);

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
      setIsLimitedMovies(filterMovies.slice(0, limited));
    } else {
      setIsLimitedMovies(filterMovies);
    }
  }, [isWidth, filterMovies]);

  useEffect(() => {
    const allMovies = localStorage.getItem("movies");
    const searchMovies = localStorage.getItem("isSearchMovies");
    const isChecked = localStorage.getItem("isFilterActive");
    if (allMovies !== null ) {
      setMovies(JSON.parse(allMovies));
    }
    if (searchMovies !== null ) {
      setIsSearchMovies(JSON.parse(searchMovies));
    }
    if (isChecked !== null ) {
      setIsFilterActive(true);
    }
  }, []);

  return (
    <section className="movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        handleSearchMovie={handleSearchMovie}
        handleFilterCheckbox={handleFilterCheckbox}
        isChecked={isFilterActive}
        isLoading={isLoading}
      />
      {isLoading && <Preloader />}

      {isError ? (
        <div className="movies__error">{internalServerError}</div>
      ) : (
        ""
      )}
      {!isError &&
      !isLoading &&
      filterMovies.length === 0 &&
      isSearchActive ? (
        <div className="movies__error">{notFoundError}</div>
      ) : (
        ""
      )}

      {!isError && !isLoading && filterMovies.length > 0 && (
        <MoviesCardList
          movies={isLimitedMovies}
          handleAddMovies={handleAddMovies}
          handleDeleteMovies={handleDeleteMovies}
          saveMovies={saveMovies}
        />
      )}

      {isLimitedMovies.length < filterMovies.length ? (
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
