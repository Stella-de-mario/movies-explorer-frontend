import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  const goToBack = () => navigate(-1);

  return (
    <div className="page-not-found">
      <div className="page-not-found__error">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
      </div>
      <button className="page-not-found__button"
       type="button"
       onClick={goToBack}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
