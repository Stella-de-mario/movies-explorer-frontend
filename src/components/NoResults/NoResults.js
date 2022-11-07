import React from "react";
import "./NoResults.css";
import { useLocation } from "react-router-dom";
import iconSad from "../../images/icon_sad.svg";
import iconHappy from "../../images/icon_happy.svg";

const NoResults = () => {
  const location = useLocation();
  const nothingSaved = location.pathname === "/saved-movies";
  const nothingFound = location.pathname === "/movies";

  return (
    <section className="no-results">
      {nothingFound && (
        <>
          <img
            src={iconSad}
            alt="Грустное лицо"
            className="no-results__img"
          />
          <p>По этому запросу ничего не найдено</p>
        </>
      )}
      {nothingSaved && (
        <>
          <img
            src={iconHappy}
            alt="Улыбающееся лицо"
            className="no-results__img"
          />
          <p>Вы ещё ничего не сохранили! Попробуйте что-нибудь поискать</p>
        </>
      )}
    </section>
  );
};

export default NoResults;