import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input
        className="filter__input"
        id="filter"
        name="filter"
        type="checkbox"
        placeholder="Фильм"
        required
      />
      <label className="filter__label" for="checkbox">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
