import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards }) {
  const cardsElement = cards.map((card) => (
    <MoviesCard key={card.id} movieCard={card} />
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
