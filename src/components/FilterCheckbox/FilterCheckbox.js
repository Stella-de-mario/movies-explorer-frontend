import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
      <input
        className="filter-checkbox__input"
        id="filter-checkbox"
        name="checkbox"
        type="checkbox"
      />
      <span className="filter-checkbox__style" />
      <span className="filter-checkbox__text">
        Короткометражки
        </span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
