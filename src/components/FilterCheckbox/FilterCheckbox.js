import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        id="filter"
        name="filter"
        type="checkbox"
        placeholder="Фильм"
        required
      />
      <label className="filter-checkbox__label" htmlFor="checkbox">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
