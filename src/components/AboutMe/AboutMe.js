import React from "react";
import "./AboutMe.css";
import photoMe from "../../images/photoMe.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <h3 className="about-me__name">Ирина</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, ** лет</h4>
          <p className="about-me__description">
            Я из города Екатеринбург. Обожаю путешествовать, читать и готовить.
            Очень хочу освоить профессию, которая позволит работать из любой
            точки мира. Поэтому я здесь.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Stella-de-mario"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__image"
          alt="Фотография автора"
          src={photoMe}
        />
      </div>
    </section>
  );
}

export default AboutMe;
