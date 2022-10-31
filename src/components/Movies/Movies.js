import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import Footer from "../Footer/Footer";

function Movies({ movies }) {
  return (
    <>
      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
