import React from "react";
import AuthContainer from "../AuthContainer/AuthContainer";
import "../AuthContainer/AuthContainer.css";


function Login() {
  return (
    <AuthContainer header="Рады видеть!"
      submit="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      route="/signup"
    >
      <label className="auth-container__item">
        <p className="auth-container__text">
          E-mail
        </p>
        <input
          className="auth-container__field"
          name="email"
          type="email"
          required
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
          className="auth-container__field"
          name="password"
          type="password"
          required
        />
        <span className="auth-container__error">
          Что-то пошло не так...
        </span>
      </label>
    </AuthContainer>
  )
}

export default Login;
