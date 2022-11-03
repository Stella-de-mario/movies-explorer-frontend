import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__fields">
        <div className="profile__field">
          <p className="profile__text">Имя</p>
          <input
            className="profile__input"
            abel="Имя"
            name="name"
            type="text"
            required
            placeholder="Имя"
          ></input>
          <span className="profile__error">
              Что-то пошло не так...
            </span>
        </div>
        <div className="profile__field">
          <p className="profile__text">E-mail</p>
          <input
            className="profile__input"
            label="E-mail"
            type="email"
            name="email"
            required
            placeholder="Email"
          ></input>
          <span className="profile__error">
              Что-то пошло не так...
            </span>
        </div>
        </div>
        <div className="profile__button-container">
          <button
            type="submit"
            className="profile__button profile__button_edit"
          >
            Редактировать
          </button>
          <button
            type="button"
            className="profile__button profile__button_signout"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
