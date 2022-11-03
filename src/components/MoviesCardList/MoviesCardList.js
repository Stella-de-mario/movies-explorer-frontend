import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ initialMovies }) {
  const cardsElement = initialMovies.map((movie) => (
    <MoviesCard key={movie.id} movieCard={movie} />
  ));
  
  return (
    <section className="movies-cards">
      <ul className="movies-cards__container">{cardsElement}</ul>
      <div className="movies-cards__button-container">
        <button className="movies-cards__button" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
