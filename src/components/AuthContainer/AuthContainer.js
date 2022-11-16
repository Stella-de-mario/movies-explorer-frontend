import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import "./AuthContainer.css";

const AuthContainer = ({ header, children, submit, text, path, link, isValid, onSubmit, isLoading, error }) => {
  return (
    <section className="auth-container">
      <div className="auth-container__content">
        <Logo />
        <h2 className="auth-container__title">
          {header}
        </h2>
        <form className="auth-container__form"
          onSubmit={onSubmit}>
          <div className="auth-container__item">
            {children}
          </div>
          <div className="auth-container__error">
            {error}
          </div>
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`auth-container__button ${
              isValid 
              ? 'auth-container__button'
              : 'auth-container__button_disabled'
            }`}
          >
            {submit}
          </button>

        <div className="auth-container__specify">
          <p className="auth-container__specify-text">
            {text}
          </p>
          <Link to={path} className="auth-container__link">
            {link}
          </Link>
        
        </div>
        </form>
      </div>

    </section>
  )
}

export default AuthContainer;
