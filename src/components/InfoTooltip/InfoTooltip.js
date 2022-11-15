import React from "react";
import registrationEr from "../../images/registrationEr.svg";
import registrationOk from "../../images/registrationOk.svg";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, textError }) {
  return (
    <div className={`popup ${isOpen
    ? "popup_opened" : "popup"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        {textError ? (
          <>
            <img
              className="popup__registration-image"
              src={registrationEr}
              alt={"Ошибка"}
            />
            <h2 className="popup__text popup__text_info-error">{textError}</h2>
          </>
        ) : (
          <>
            <img
              className="popup__registration-image"
              src={registrationOk}
              alt={"Успешно"}
            />
            <h2 className="popup__text popup__text_info">
              Вы успешно зарегистрировались!
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoTooltip;
