import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { REGEX_URL } from "../../utils/constants";
import { formatDuration } from '../../utils/formatDuration';

function MoviesCard({ card, savedMovies, handleAddMovies, handleDeleteMovies }) {

  const { pathname } = useLocation();

  const [saveLikeMovie, setSaveLikeMovie] = useState(null);

  const trailerLink = REGEX_URL.test(card.trailerLink) 
  ? card.trailerLink
  : 'https://www.youtube.com';

  useEffect (() => {
    if(pathname !== '/saved-movies') {
      setSaveLikeMovie(savedMovies.find(item => (Number(item.movieId)) === card.id));
    }    
  }, [card.id, savedMovies, pathname]);

  function toggleClick() {
    saveLikeMovie ? 
    handleDeleteMovies(saveLikeMovie._id ) :
    handleAddMovies( {
      movieId: card.id,  
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: 'https://api.nomoreparties.co/' + card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: 'https://api.nomoreparties.co/' + card.thumbnail,
    })
  }
  function deleteMovies() {
    handleDeleteMovies(card._id);
  }

  return (
    <div className="movie-card">
       <a className='movie-card__link' href={trailerLink} target='_blank' rel='noreferrer'>
      <img
       className="movie-card__image"
        src={pathname !== '/saved-movies'
        ? ('https://api.nomoreparties.co/' + card.image.url)
        : card.image}
        alt={card.nameRU} 
      />
</a>
      <div className="movie-card__container">
        <div className="movie-card__info">
          <h2 className="movie-card__name">
            {card.nameRU}
          </h2>
          <p className="movie-card__duration">{formatDuration(card.duration)}</p>
        </div>

        {pathname === "/saved-movies" ? 
          <button
            className="movie-card__button movie-card__button_delete"
            type="button"
            aria-label="Удалить из сохраненного"
            onClick={deleteMovies}
          />
         : 
          <button
            className={`movie-card__button ${
              saveLikeMovie ? "movie-card__button_save-active" : "movie-card__button"
            }`}
            type="button"
            aria-label="Добавить в сохраненное"
            onClick={toggleClick}
          />
        }
      </div>
    </div>
  );
}

export default MoviesCard;
