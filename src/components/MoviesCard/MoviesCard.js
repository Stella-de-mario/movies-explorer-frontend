import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import initialMovies from '../../utils/initialMovies';

function MoviesCard(initialMovies) {
  const { pathname } = useLocation();

  const [favorite, setFavorite] = React.useState(false);

  function handleFavoriteBtnClick() {
    setFavorite(!favorite);
  }

  return (
    <div className="movie-card">
      <div className="movie-card__container">
        <div className="movie-card__info">
          <h2 className="movie-card__name">
            {initialMovies.nameRU}
          </h2>
          <p className="movie-card__duration">
            {initialMovies.duration}
          </p>
        </div>

        {pathname === '/saved-movies'

        ? <button 
            className="movie-card__btn movie-card__btn_delete"
            type="button"
          />

        : <button
            className={`movie-card__btn ${
              favorite ? "movie-card__btn_favorites-active" : "movie-card__btn"}`}
            type="button"
            onClick={handleFavoriteBtnClick}
          />}
          
      </div>
      <img 
        src={initialMovies.image}
        alt={initialMovies.nameRU} 
        className="movie-card__image"
      >
      </img>
    </div>
  )
}

export default MoviesCard;
