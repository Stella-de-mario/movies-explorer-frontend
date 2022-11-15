import React from "react";
import AuthContainer from "../AuthContainer/AuthContainer";
import "../AuthContainer/AuthContainer.css";
import { useForm } from "../../hooks/useForm.js";

function Login({ handleLogin, isLoading, isLoginError, setIsLoginError }) {
  const loginValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, isValid, errors, resetForm } =
    useForm(loginValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin({ email: values.email, password: values.password });
  }

  function handleInputChange(evt) {
    handleChange(evt);
    setIsLoginError("");
  }

  return (
    <AuthContainer
      header="Рады видеть!"
      submit="Войти"
      isValid={isValid}
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={isLoginError}
      resetForm={resetForm}
      path="/signup"
    >
      <label className="auth-container__item">
        <p className="auth-container__text">E-mail</p>
        <input
          value={values.email || ""}
          className={`"auth-container__field" ${
            errors.email
              ? "auth-container__field_error"
              : "auth-container__field"
          }`}
          id="login-input-email"
          name="email"
          type="email"
          minLength="2"
          maxLength="40"
          placeholder="E-mail"
          pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
          autoFocus
          autoComplete={"off"}
          disabled={isLoading}
          onChange={handleInputChange}
          required
        />
        <span className={`auth-container__error ${errors.email
        ? "auth-container__error_visible"
        : "auth-container__error"}`}>
          {errors.email}
        </span>
      </label>
      <label className="auth-container__item">
        <p className="auth-container__text">Пароль</p>
        <input
          value={values.password || ""}
          className={`"auth-container__field" ${
            errors.password
              ? "auth-container__field_error"
              : "auth-container__field"
          }`}
          id="login-input-password"
          name="password"
          type="password"
          minLength="2"
          maxLength="40"
          placeholder="Пароль"
          onChange={handleInputChange}
          autoComplete={"off"}
          disabled={isLoading}
          required
        />
        <span className={`auth-container__error ${errors.password
        ? "auth-container__error_visible"
        : "auth-container__error"}`}>
          {errors.password}
        </span>
      </label>
    </AuthContainer>
  );
}

export default Login;
