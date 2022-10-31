import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({ card }) => {
  const { pathname } = useLocation();
  const [saved, setSaved] = React.useState(false);

  function handleSaveMovies() {
    setSaved(!saved);
    console.log("Фильм сохранён");
  }

  function handleDeleteSaveMovies() {
    setSaved(false);
    console.log("Фильм удалён");
  }

  function getDurationMovies(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{card.title}</h2>
        <p className="movies-card__duration">
          {getDurationMovies(card.duration)}
        </p>
      </div>
      <img src={card.image} alt={card.title} className="movies-card__image" />
      {pathname === "/saved-movies" ? (
        <button
          type="button"
          className="movies-card__button movies-card_button_delete"
          onClick={handleDeleteSaveMovies}
        />
      ) : (
        <button
          type="button"
          className={
            saved ? "movies-card__button_active" : "movies-card__button"
          }
          onClick={handleSaveMovies}
        />
      )}
    </li>
  );
};

export default MoviesCard;
