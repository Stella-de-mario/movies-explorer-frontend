import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { initialMovies } from '../../utils/initialMovies';

function Movies({ movies }) {
  return (
    <>
      <main className="movies">
        <SearchForm />
        <MoviesCardList initialMovies={initialMovies} />
      </main>
    </>
  );
}

export default Movies;
