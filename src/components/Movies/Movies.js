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
import moviesApi from "../../utils/MoviesApi";
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

function Movies({ isLoggedIn, saveMovie, onSaveMovie, onDeleteMovie }) {
  const [movies, setMovies] = useState([]);
  const [isSearchMovies, setIsSearchMovies] = useState([]);
  const [isFilterMovies, setIsFilterMovies] = useState([]);
  const [isLimitedMovies, setIsLimitedMovies] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const isWidth = useWidthWindow();

  function onSearchMovie(searchWord) {
    setIsLoading(true);
    setIsSearchActive(true);
    setIsError(false);
    if (movies.length === 0) {
      moviesApi.getMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem("movies", JSON.stringify(res));
          const filterMoviesArray = filterByQuery(res, searchWord);
          setIsSearchMovies(filterMoviesArray);
          localStorage.setItem(
            "isSearchedMovies",
            JSON.stringify(filterMoviesArray)
          );
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

  function onFilterCheckbox() {
    isFilterActive
      ? localStorage.removeItem("filterActive")
      : localStorage.setItem("filterActive", true);
    setIsFilterActive((prevState) => !prevState);
  }

  function handleAddMovies() {
    let added = isWidth > mediumWidthSize ? maxNumberCards : mediumNumberCards;
    setIsLimitedMovies((prevValue) => {
      return prevValue.concat(
        isFilterMovies.slice(prevValue.length, prevValue.length + added)
      );
    });
  }

  useEffect(() => {
    isFilterActive
      ? setIsFilterMovies(filterByDuration(isSearchMovies))
      : setIsFilterMovies(isSearchMovies);
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
    if (isFilterMovies.length > limited) {
      setIsLimitedMovies(isFilterMovies.slice(0, limited));
    } else {
      setIsLimitedMovies(isFilterMovies);
    }
  }, [isWidth, isFilterMovies]);

  useEffect(() => {
    const allMovies = localStorage.getItem("movies");
    const searchMovies = localStorage.getItem("isSearchMovies");
    const checked = localStorage.getItem("filterActive");
    if (allMovies) {
      setMovies(JSON.parse(allMovies));
    }
    if (searchMovies) {
      setIsSearchMovies(JSON.parse(searchMovies));
    }
    if (checked) {
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

      {isError ? (
        <div className="movies__error">{internalServerError}</div>
      ) : (
        ""
      )}
      {!isError &&
      !isLoading &&
      isFilterMovies.length === 0 &&
      isSearchActive ? (
        <div className="movies__error">{notFoundError}</div>
      ) : (
        ""
      )}

      {!isError && !isLoading && isFilterMovies.length > 0 && (
        <MoviesCardList
          movies={isLimitedMovies}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          saveMovies={saveMovie}
        />
      )}

      {isLimitedMovies.length < isFilterMovies.length ? (
        <button
          className="movies-cards__button"
          type="button"
          onClick={handleAddMovies}
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
