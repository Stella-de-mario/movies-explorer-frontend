import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, onFilterCheckbox  }) {

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
      <input
        className={`filter-checkbox__input ${isChecked ? "filter-checkbox__input_checked" : ""}`}
        id="filter-checkbox"
        name="checkbox"
        type="checkbox"
        checked={isChecked || false}
        onChange={onFilterCheckbox}
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
