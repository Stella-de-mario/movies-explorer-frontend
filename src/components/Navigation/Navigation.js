import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import NavigationMain from "../NavigationMain/NavigationMain";

function Navigation({ isLoggedIn }) {
  const [isPopupNavigation, setIsPopupNavigation] = useState(false);

  const openedPopup = () => {
    setIsPopupNavigation(true);
  };

  const closePopup = () => {
    setIsPopupNavigation(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="navigation">
            <nav className="navigation__list">
              <NavLink
                to="/movies"
                className="navigation__link"
                activeClassName="navigation__link-active"
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="navigation__link"
                activeClassName="navigation__link-active"
              >
                Сохранённые фильмы
              </NavLink>
            </nav>
          </div>
          <nav className="navigation">
            <Link to="/profile">
              <button className="navigation__button" type="button">
                Аккаунт
              </button>
            </Link>
          </nav>
          <button
            className="navigation__button-open"
            type="button"
            onClick={openedPopup}
          />
        </>
      ) : (
        <nav className="navigation">
          <Link
            to="/signup"
            className="navigation__link navigation__link_registr"
          >
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="navigation__button-signin" type="button">
              Войти
            </button>
          </Link>
        </nav>
      )}
      <NavigationMain isOpen={isPopupNavigation} onClose={closePopup} />
    </>
  );
}

export default Navigation;
