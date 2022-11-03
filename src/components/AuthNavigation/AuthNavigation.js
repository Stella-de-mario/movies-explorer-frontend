import React from "react";
import "./AuthNavigation.css";
import { Link } from "react-router-dom";

function AuthNavigation() {
  return (
    <nav className="auth-nav">
      <ul className="auth-nav__list">
        <li className="auth-nav__item">
          <Link className="auth-nav__link" to="/signup">
            Регистрация
          </Link>
        </li>
        <li className="auth-nav__item">
          <Link className="auth-nav__link auth-nav__link_signin" to="/signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNavigation;