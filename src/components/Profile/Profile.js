import React from "react";
import "./Profile.css";
import Header from '../Header/Header';

function Profile({ isLoggedIn }) {
  return (
    <>
    <Header isLoggedIn={isLoggedIn} />
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
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
            error="Что-то пошло не так..."
          ></input>
        </div>
        <div className="profile__field">
          <p className="profile__text">E-mail</p>
          <input
            className="profile__input"
            label="E-mail"
            type="email"
            name="email"
            required
            error="Что-то пошло не так..."
            placeholder="Email"
          ></input>
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
    </>
  );
}

export default Profile;
