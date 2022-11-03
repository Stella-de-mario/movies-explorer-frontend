import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { initialMovies } from "../../utils/initialMovies.js";

function MoviesCard() {
  const { pathname } = useLocation();

  const [isSave, setIsSave] = React.useState(false);

  function handleSaveBtnClick() {
    setIsSave(!isSave);
  }

  return (
    <div className="movie-card">
      <img
        src={initialMovies.image}
        alt={initialMovies.nameRU}
        className="movie-card__image"
      />

      <div className="movie-card__container">
        <div className="movie-card__info">
          <h2 className="movie-card__name">
            {initialMovies.nameRU}
          </h2>
          <p className="movie-card__duration">{initialMovies.duration}</p>
        </div>

        {pathname === "/saved-movies" ? 
          <button
            className="movie-card__button movie-card__button_delete"
            type="button"
          />
         : 
          <button
            className={`movie-card__button ${
              isSave ? "movie-card__button_save-active" : "movie-card__button"
            }`}
            type="button"
            onClick={handleSaveBtnClick}
          />
        }
      </div>
    </div>
  );
}

export default MoviesCard;
