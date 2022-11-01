import React from "react";
import "./ButtonSubmit.css";

function ButtonSubmit({ text, isDisabled }) {
  return (
    <button
      className="button"
      type="submit"
      disabled={isDisabled}
      text={text}
    >
      {text}
    </button>
  );
}

export default ButtonSubmit;
