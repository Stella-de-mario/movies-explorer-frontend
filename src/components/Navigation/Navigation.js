import React, { useState } from "react";
import "./Navigation.css";
import iconAccount from '../../images/icon_account.svg'
import { NavLink, Link } from "react-router-dom";

function Navigation() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleMenuButtonClick() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <nav className="navigation">
      <button
        className="navigation__menu"
        type="button"
        aria-label="Открыть меню"
        onClick={handleMenuButtonClick}
      />
      <div
        className={`navigation__container ${
          isOpenMenu 
            ? "navigation__container_opened" 
            : "navigation__container"
        }`}>
        <div className="navigation__menu-bar">
          <div className="navigation__list-container">
            <button
              className="navigation__menu-close"
              type="button"
              aria-label="Закрыть меню"
              onClick={handleMenuButtonClick}
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