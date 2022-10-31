import React from "react";
import "./AuthContainer.css";

const AuthContainer = ({ label, error, name, type, ...rest }) => {
  return (
    <div className="auth-container">
      <label className="auth-container__label">{label}</label>
      <input
        className="auth-container__input"
        name={name}
        type={type}
        {...rest}
      />
      <span className="auth-container__error">{error}</span>
    </div>
  );
};

export default AuthContainer;
