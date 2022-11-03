import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavigationMain.css";

function NavigationMain({ isOpen, onClose }) {
  const isPopupOpened = isOpen ? "popup_opened" : "";

  return (
    <div className={`popup ${isPopupOpened}`}>
      <div className="popup__overlay">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            onClick={onClose}
          />
          <ul className="popup__list">
            <li className="popup__list-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                isActive
                ? "popup__link_active"
                  : "popup__link"
              }
              >
                Главная
              </NavLink>
            </li>
            <li className="popup__list-item">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                isActive
                ? "popup__link_active"
                  : "popup__link"
              }>
                Фильмы
              </NavLink>
            </li>
            <li className="popup__list-item">
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                isActive
                ? "popup__link_active"
                  : "popup__link"
              }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link to="/profile">
            <button className="popup__button" type="button">
              Аккаунт
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationMain;
