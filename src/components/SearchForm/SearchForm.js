import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { useLocation } from "react-router-dom";

function SearchForm({ isChecked, onFilterCheckbox, onSearchMovie, isLoading }) {

   const { pathname } = useLocation();

   const [isSearchWord, setIsSearchWord] = useState("");
   const [isSearchError, setIsSearchError] = useState("");

   function handleInputChange(evt) {
      const target = evt.target;
      const value = target.value;
      setIsSearchWord(value);
    }

   function handleSubmit(evt) {
      evt.preventDefault();
     isSearchWord === ""
     ? setIsSearchError('Введите ключевое слово')
     : onSearchMovie(isSearchWord) 
  }

  useEffect(() => {
   if (pathname === '/movies') {
     const search = localStorage.getItem('searchWord');
     if (search) {
       setIsSearchWord(search)
     }
   }
 }, [pathname]);

  useEffect(() => {
   setIsSearchError("");
  }, [isSearchWord]);

    return (
      <section className='search-form'>
         <form className='search-form__form'
         onSubmit={handleSubmit}
         noValidate>
         <div className="search-form__container">
               <div className='search-form__icon_find_inactive'></div>
            <input
               className={`search-form__input ${isSearchError
               ? 'search-form__input_error'
               : "search-form__input"}`}
               name='search-form'
               type='text'
               placeholder='Фильм'
               value={isSearchWord}
            onChange={ handleInputChange}
            disabled={isLoading}
            autoComplete={"off"}
            required
            />
             <span className={`search-form__error ${
            isSearchError
              ? "search-form__error_visible"
              : "search-form__error"
            }`}>{isSearchError}</span>
            <button className='search-form__button_find' type='submit' onClick={handleSubmit} disabled={isLoading} />
            </div>
        <div className="search-form__checkbox">
            <FilterCheckbox onFilterCheckbox={onFilterCheckbox} isChecked={isChecked}/>
            </div>
         </form>
      </section>
   )
};

export default SearchForm;