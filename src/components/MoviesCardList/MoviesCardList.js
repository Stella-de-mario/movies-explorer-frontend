import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">{movies.map((card) => (
        <li key={card._id}>
          <MoviesCard card={card} />
        </li>
      ))}</ul>
      <div className="movies-cards__button-container">
        <button className="movies-cards__button" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
