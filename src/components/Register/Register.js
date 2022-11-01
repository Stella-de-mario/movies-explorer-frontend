import React from "react";
import AuthContainer from "../AuthContainer/AuthContainer";
import Auth from "../Auth/Auth";
import Form from "../Form/Form";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

function Register() {
  return (
    <Auth
      title="Добро пожаловать!"
      subtitle="Уже зарегистрированы?"
      link="Войти"
      route="/signin"
    >
      <Form>
        <AuthContainer
          label="Имя"
          name="register-name"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя"
          error=" "
        />
        <AuthContainer
          label="E-mail"
          type="email"
          name="email"
          required
          error=" "
          placeholder="Email"
        />
        <AuthContainer
          label="Пароль"
          type="password"
          name="password"
          minLength="6"
          required
          placeholder="Пароль"
          error="Что-то пошло не так..."
        />
      </Form>
      <ButtonSubmit text="Зарегистрироваться" />
    </Auth>
  );
}

export default Register;