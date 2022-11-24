import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, messageText }) {
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
             <h2 className="popup__text">{messageText}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
