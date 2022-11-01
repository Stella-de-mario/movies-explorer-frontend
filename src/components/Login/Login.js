import React from "react";
import AuthContainer from "../AuthContainer/AuthContainer";
import Auth from "../Auth/Auth";
import Form from "../Form/Form";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

function Login() {
  return (
    <Auth
      title="Рады видеть!"
      subtitle="Ещё не зарегистрированы?"
      link="Регистрация"
      route="/signup"
    >
      <Form>
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
          error=" "
        />
      </Form>
      <ButtonSubmit buttonText="Войти" />
    </Auth>
  );
}

export default Login;
