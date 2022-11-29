import React, { useState, useContext, useEffect } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Header from "../Header/Header";

function Profile({
  isLoading,
  isLoggedIn,
  onSignOut,
  onUpdateUser,
  isOpen,
  onClose,
  messageText,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const profileValues = {
    name: currentUser.name,
    email: currentUser.email,
  };
  const { values, handleChange, errors, isValid } = useForm(profileValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name: values.name, email: values.email });
  }

  useEffect(() => {
    setIsButtonDisabled(
      !isValid || (values.name === currentUser.name &&
          values.email === currentUser.email) || isLoading);
  }, [values, currentUser, isValid, isLoading]);

  return (
    <>
    <Header page={'profile'} isLoggedIn={isLoggedIn} />
      <section className="profile">
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__fields">
            <div className="profile__field">
              <p className="profile__text">Имя</p>
              <input
                className={`profile__input ${
                  errors.name ? "profile__input_error" : "profile__input"
                }`}
                id="profile-name"
                label="Имя"
                name="name"
                type="text"
                value={values.name || ""}
                pattern="^[A-Za-zА-Яа-я-\s]+$"
                disabled={isLoading}
                autoComplete={"off"}
                onChange={handleChange}
                required
                placeholder="Укажите ваше имя"
              ></input>
              <span
                className={`profile__error ${
                  errors.name ? "profile__error_visible" : "profile__error"
                }`}
              >
                {errors.name}
              </span>
            </div>
            <div className="profile__field">
              <p className="profile__text">E-mail</p>
              <input
                className={`profile__input ${
                  errors.email ? "profile__input_error" : "profile__input"
                }`}
                id="profile-email"
                label="E-mail"
                type="email"
                name="email"
                pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                value={values.email || ""}
                disabled={isLoading}
                autoComplete={"off"}
                onChange={handleChange}
                required
                placeholder="Email"
              ></input>
              <span
                className={`profile__error ${
                  errors.email ? "profile__error_visible" : "profile__error"
                }`}
              >
                {errors.email}
              </span>
            </div>
          </div>
          <div className="profile__button-container">
            <button
              type="submit"
              disabled={isButtonDisabled || isLoading}
              className={`profile__button ${
                isButtonDisabled
                  ? "profile__button_disabled"
                  : "profile__button"
              }`}
            >
              {isLoading ? "Сохраняем..." : "Редактировать"}
            </button>
            <button
              type="button"
              className="profile__button profile__button_signout"
              onClick={onSignOut}
              disabled={isLoading}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
      <InfoTooltip isOpen={isOpen} onClose={onClose} messageText={messageText} />
    </>
  );
}

export default Profile;
