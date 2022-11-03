import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import "./AuthContainer.css";

const AuthContainer = ({ header, children, submit, text, route, link }) => {
  return (
    <section className="auth-container">
      <div className="auth-container__content">
        <Logo />
        <h2 className="auth-container__title">
          {header}
        </h2>
        <form className="auth-container__form">
          <div className="auth-container__item">
            {children}
          </div>
          <button
            type="submit"
            className="auth-container__button"
          >
            {submit}
          </button>
        </form>
        <div className="auth-container__specify">
          <p className="auth-container__specify-text">
            {text}
          </p>
          <Link to={route} className="auth-container__link">
            {link}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AuthContainer;
