import React  from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({ movies, saveMovie, onSaveMovie, onDeleteMovie }) {
 
 const moviesElement = movies.map((card) => 
  <li className="movies-cards__list-item" key={card._id || card.id}>
    <MoviesCard
           card={card}
           onDeleteMovie={onDeleteMovie}
           onSaveMovie={onSaveMovie}
           saveMovie={saveMovie}
          />
        </li>
 );

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">{moviesElement}</ul>
    </section>
  );
}

export default MoviesCardList;
