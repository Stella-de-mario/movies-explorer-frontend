import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { useLocation } from "react-router-dom";

function SearchForm({
  isChecked,
  onFilterCheckbox,
  onSearchMovie,
  isLoading,
}) {
  const { pathname } = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  function handleInputChange(evt) {
    const target = evt.target;
    const value = target.value;
    setSearchQuery(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    searchQuery === ""
      ? setSearchError("Введите ключевое слово")
      : onSearchMovie(searchQuery);
  }

  useEffect(() => {
    if (pathname === "/movies") {
      const search = localStorage.getItem("searchQuery");
      if (search) {
        setSearchQuery(search);
      }
    }
  }, [pathname]);

  useEffect(() => {
    setSearchError("");
  }, [searchQuery]);

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__container">
          <div className="search-form__icon_find_inactive"></div>
          <input
            className={`search-form__input ${
              searchError ? "search-form__input_error" : "search-form__input"
            }`}
            name="search-form"
            type="text"
            placeholder="Фильм"
            value={searchQuery}
            onChange={handleInputChange}
            disabled={isLoading}
            autoComplete={"off"}
            required
          />
          <span
            className={`search-form__error ${
              searchError ? "search-form__error_visible" : "search-form__error"
            }`}
          >
            {searchError}
          </span>
          <button
            className="search-form__button_find"
            type="submit"
            disabled={isLoading}
          />
        </div>
        <div className="search-form__checkbox">
          <FilterCheckbox
            onFilterCheckbox={onFilterCheckbox}
            isChecked={isChecked}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
