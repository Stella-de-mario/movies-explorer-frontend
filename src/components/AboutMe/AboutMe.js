import React from "react";
import "./AboutMe.css";
import Heading from "../Heading/Heading";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import photoMe from "../../images/photoMe.jpg";

function AboutMe() {
  return (
    <section className="about-me">
       <Heading heading={ "Студент" } />
      <div className="about-me__container">
        <div className="about-me__info">
        <HeadingTitle position={'about-me'} text="Ирина" />
          <h4 className="about-me__job">Фронтенд-разработчик</h4>
          <p className="about-me__description">
            Я из города Екатеринбург. Обожаю путешествовать, читать и готовить.
            Очень хочу освоить профессию, которая позволит работать из любой
            точки мира. Поэтому я здесь.
          </p>
          <ul className="about-me__social_link">
            <li>
          <a
            className="about-me__link"
            href="https://github.com/Stella-de-mario"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          </li>
          <li>
          <a
            className="about-me__link"
            href="https://www.linkedin.com/in/%F0%9F%9A%80irina-otroshchenkova-81bb471a3/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
          </li>
          </ul>
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
