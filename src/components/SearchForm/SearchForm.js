import React from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
    return (
      <section className='search-form'>
         <form className='search-form__form'>
         <div className="search-form__container">
               <div className='search-form__icon_find_inactive'></div>
            <input
               className='search-form__input'
               id='movie'
               name='movie'
               type='text'
               placeholder='Фильм'
               required
            />
            <button className='search-form__button_find' type='submit' />
            </div>
        <div className="search-form__checkbox">
            <FilterCheckbox />
            </div>
         </form>
      </section>
   )
};

export default SearchForm;