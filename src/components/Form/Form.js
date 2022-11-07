import React from "react";
import "./Form.css";

function Form() {
  return (
    <div
      className="form"
    >
      <div className="form__content">
        <button
          className="form__close"
          type="button"
        />
        <p className="form__text">Oшибка авторизации</p>
      </div>
    </div>
  )
}

export default Form;
