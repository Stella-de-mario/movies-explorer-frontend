import React from "react";
import { useForm } from "../../hooks/useForm.js";
import AuthContainer from "../AuthContainer/AuthContainer.js";

function Register({ handleRegister, isLoading, isRegisterError, setIsRegisterError }) {
  const  registerValues ={
    name: "",
    email: "",
    password: "",
  }
  const { values, handleChange, errors, isValid, resetForm } = useForm(registerValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister({ name: values.name, email: values.email, password: values.password });
  }

  function handleInputChange(evt) {
    handleChange(evt);
    setIsRegisterError("");
  }

  return (
    <AuthContainer
      header="Добро пожаловать!"
      name="register"
      submit="Зарегистрироваться"
      text="Уже зарегистрированы?"
      onSubmit={handleSubmit}
      isValid={isValid}
      link="Войти"
      path="/signin"
      isLoading={isLoading}
      error={isRegisterError}
      resetForm={resetForm}
    >
      <label className="auth-container__item">
        <p className="auth-container__text">Имя</p>
        <input
          className={`"auth-container__field" ${
            errors.name
              ? "auth-container__field_error"
              : "auth-container__field"
          }`}
          id="register-name"
          name="name"
          type="text"
          pattern="^[A-Za-zА-Яа-я-\s]+$"
          minLength="2"
          maxLength="30"
          required
          placeholder="Укажите ваше имя"
          value={values.name || ""}
          onChange={handleInputChange}
          disabled={isLoading}
          autoComplete={"off"}
        />
      <span className={`auth-container__error ${errors.name
        ? "auth-container__error_visible"
        : "auth-container__error"}`}>
          {errors.name}
        </span>
      </label>
      <label className="auth-container__item">
        <p className="auth-container__text">E-mail</p>
        <input
          className={`"auth-container__field" ${
            errors.email
              ? "auth-container__field_error"
              : "auth-container__field"
          }`}
          id="register-email"
          type="email"
          name="email"
          required
          pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
          value={values.email || ""}
          disabled={isLoading}
          onChange={handleInputChange}
          autoComplete={"off"}
          placeholder="Укажите ваш Email"
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
          className={`"auth-container__field" ${
            errors.password
              ? "auth-container__field_error"
              : "auth-container__field"
          }`}
          id="register-password"
          type="password"
          name="password"
          required
          disabled={isLoading}
          placeholder="Введите пароль"
          value={values.password || ""}
          onChange={handleInputChange}
          autoComplete={"off"}
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

export default Register;
