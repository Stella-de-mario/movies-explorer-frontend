import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, onFilterCheckbox  }) {

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
      <input
        className="filter-checkbox__input"
        id="filter-checkbox"
        name="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onFilterCheckbox}
      />
      <span className="filter-checkbox__style" />
      <span className={`filter-checkbox__text ${
          isChecked
            ? "filter-checkbox__text"
            : "filter-checkbox__text_disabled"}`}>
        Короткометражки
        </span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
