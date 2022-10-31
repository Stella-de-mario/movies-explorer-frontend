import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <div className="about-project__info-container">
          <h3 className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info-container">
          <h3 className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time">
        <div className="about-project__time-line">
          <p className="about-project__time-line__first-title">1 неделя</p>
          <p className="about-project__time-line__second-title"> 4 недели</p>
        </div>
        <div className="about-project__time-text">
          <p className="about-project__time__first-text">Back-end</p>
          <p className="about-project__time__second-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
