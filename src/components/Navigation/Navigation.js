import React from "react";
import "./Navigation.css";
import iconAccount from '../../images/icon_account.svg'
import { NavLink, Link } from "react-router-dom";

function Navigation() {

  const [burgerMenuIsOpened, setBurgerMenuIsOpened] = React.useState(false);

  function handleBurgerButtonClick() {
    setBurgerMenuIsOpened(!burgerMenuIsOpened);
  }

  return (
    <nav className="navigation">
      <button
        className="navigation__menu-burger"
        type="button"
        aria-label="Открыть меню"
        onClick={handleBurgerButtonClick}
      />
      <div
        className={`navigation__container ${
          burgerMenuIsOpened 
            ? "navigation__container_opened" 
            : "navigation__container"
        }`}>
        <div className="navigation__menubar">
          <div className="navigation__list-container">
            <button
              className="navigation__menu-close"
              type="button"
              aria-label="Закрыть меню"
              onClick={handleBurgerButtonClick}
            />
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link className="navigation__link navigation__link_main" to="/">
                  Главная
                </Link>
              </li>
              <li className="navigation__item">
                <NavLink to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "navigation__link_active"
                    : "navigation__link"
                } >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink to="/saved-movies"
                className={({ isActive }) =>
                isActive
                  ? "navigation__link_active"
                  : "navigation__link navigation__link_font-weight"
              }
                 >
                  Сохраненные фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="navigation__link navigation__link_profile"to="/profile">
          <p className="navigation__link_profile_account">Аккаунт</p>
          <img
            src={iconAccount}
            alt="Иконка"
            className="navigation__link_profile_icon"
          />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;