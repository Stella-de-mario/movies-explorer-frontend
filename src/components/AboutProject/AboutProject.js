import React from "react";
import "./AboutProject.css";
import Heading from "../Heading/Heading";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <Heading heading={"О проекте"} />
      <ul className="about-project__info-container">
        <li className="about-project__info">
          <h3 className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__info">
          <h3 className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__time">
        <div className="about-project__time-line">
          <p className="about-project__time-line__title">1 неделя</p>
          <p className="about-project__time-line__text">Back-end</p>
        </div>
        <div className="about-project__time-line">
          <p className="about-project__time-line__title about-project__time-line__title_frontend"> 4 недели</p>
          <p className="about-project__time-line__text about-project__time-line__text_frontend">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
