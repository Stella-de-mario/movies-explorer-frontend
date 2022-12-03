import React  from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, savedMovies, handleAddMovies, handleDeleteMovies }) {
  const location = useLocation();
 
 const cardsElement = movies.map((item) => 
  <li className="movies-cards__list-item" key={item._id || item.id}>
    <MoviesCard
           card={item}
           handleDeleteMovies={handleDeleteMovies}
           handleAddMovies={handleAddMovies}
           savedMovies={savedMovies}
          />
        </li>
 );

  return (
    <section className="movies-cards">
      <ul className={`movies-cards__list ${(location.pathname !== "/saved-movies")
      ? "movies-cards__list"
    :"movies-cards__list_save"}`}>{cardsElement}</ul>
    </section>
  );
}

export default MoviesCardList;
