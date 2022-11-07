import React from "react";
import AuthContainer from "../AuthContainer/AuthContainer.js";
import '../AuthContainer/AuthContainer.css';

function Register() {

  return (
    <AuthContainer header="Добро пожаловать!"
    submit="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      route="/signin"
    >
      <label className="auth-container__item">
        <p className="auth-container__text">
          Имя
        </p>
        <input
        className="auth-container__field"
          name="register-name"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя"
        />
              <span className="auth-container__error">
          Что-то пошло не так...
        </span>
        </label>
        <label className="auth-container__item">
        <p className="auth-container__text">
          E-mail
        </p>
          <input 
          className="auth-container__field"
          type="email"
          name="email"
          required
          error=" "
          placeholder="Email"
        />
         <span className="auth-container__error">
          Что-то пошло не так...
        </span>
      </label>
      <label className="auth-container__item">
        <p className="auth-container__text">
          Пароль
        </p>
        <input
          className="auth-container__field auth-container__field_error"
          type="password"
          name="password"
          minLength="6"
          required
          placeholder="Пароль"
        />
     <span className="auth-container__error auth-container__error_visible">
          Что-то пошло не так...
        </span>
      </label>
    </AuthContainer>
  );
}

export default Register;