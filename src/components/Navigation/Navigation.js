import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  function handleMenuButtonClick() {
    setIsOpenedMenu(!isOpenedMenu);
  }

  return (
    <nav className="navigation">
      <button
        className="navigation__menu"
        type="button"
        aria-label="Меню"
        onClick={handleMenuButtonClick}
      />
      <div
        className={`navigation__container ${
          isOpenedMenu
            ? "navigation__container_opened"
            : "navigation__container"
        }`}
      >
        <div className="navigation__list">
          <div className="navigation__list-container">
            <button
              className="navigation__menu-close"
              type="button"
              aria-label="Закрыть"
              onClick={handleMenuButtonClick}
            />
            <ul className="navigation__links">
              <li className="navigation__item">
                <Link className="navigation__link navigation__link_main" to="/">
                  Главная
                </Link>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/movies"
                  className="navigation__link"
                  activeClassName="navigation__link-active"
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/saved-movies"
                  className="navigation__link"
                  activeClassName="navigation__link-active"
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            className="navigation__link navigation__link_profile"
            to="/profile"
          >
            Аккаунт
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
