import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { initialMovies } from '../../utils/initialMovies';

function Movies() {
  return (
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={initialMovies} />
      </section>
  );
}

export default Movies;
