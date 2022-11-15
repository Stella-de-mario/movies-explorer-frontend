import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { regexUrl } from "../../utils/constants";
import { formatDuration } from '../../utils/formatDuration';

function MoviesCard({ movie, isSavedMovie, onSaveMovie, onDeleteMovie }) {

  const { pathname } = useLocation();

  const [saveMovie, setSaveMovie] = useState(null);

  const trailerLink = regexUrl.test(movie.trailerLink) 
  ? movie.trailerLink
  : 'https://www.youtube.com';

  useEffect (() => {
    if(!pathname !== '/saved-movies') {
      setSaveMovie(isSavedMovie.find(item => item.movieId === movie.id));
    }    
  }, [movie.id, isSavedMovie, pathname]);

  function handleChangeSave(evt) {
    evt.preventDefault();
    saveMovie ? 
    onDeleteMovie(saveMovie._id ) :
    onSaveMovie( {
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
    onDeleteMovie(movie._id);
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
              saveMovie ? "movie-card__button_save-active" : "movie-card__button"
            }`}
            type="button"
            aria-label="Добавить в сохраненное"
            onClick={handleChangeSave}
          />
        }
      </div>
    </div>
  );
}

export default MoviesCard;
