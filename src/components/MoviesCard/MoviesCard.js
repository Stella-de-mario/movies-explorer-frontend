import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { regexUrl } from "../../utils/constants";
import { formatDuration } from '../../utils/formatDuration';

function MoviesCard({ movie, saveMovie, handleAddMovies, handleDeleteMovies }) {

  const { pathname } = useLocation();

  const [saveLikeMovie, setSaveLikeMovie] = useState(null);

  const trailerLink = regexUrl.test(movie.trailerLink) 
  ? movie.trailerLink
  : 'https://www.youtube.com';

  useEffect (() => {
    if(!pathname !== '/saved-movies') {
      setSaveLikeMovie(saveMovie.find(item => (Number(item.movieId)) === movie.id));
    }    
  }, [movie.id, saveMovie, pathname]);

  function toggleSaveClick(evt) {
    evt.preventDefault();
    saveLikeMovie ? 
    handleDeleteMovies(saveLikeMovie._id ) :
    handleAddMovies( {
      movieId: movie.id,  
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      country: movie.country,
      director: movie.director,
      duration: movie.formatedDuration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co/' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co/' + movie.thumbnail,
    })
  }
  function deleteMovies(evt) {
    evt.preventDefault();
    handleDeleteMovies(movie._id);
  }

  return (
    <div className="movie-card">
       <a className='movie-card__link' href={trailerLink} target='_blank' rel='noreferrer'>
      <img
       className="movie-card__image"
        src={pathname !== '/saved-movies'
        ? ('https://api.nomoreparties.co/' + movie.image.url)
        : movie.image}
        alt={movie.nameRU} 
      />
</a>
      <div className="movie-card__container">
        <div className="movie-card__info">
          <h2 className="movie-card__name">
            {movie.nameRU}
          </h2>
          <p className="movie-card__duration">{formatDuration(movie.duration)}</p>
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
            onClick={toggleSaveClick}
          />
        }
      </div>
    </div>
  );
}

export default MoviesCard;
