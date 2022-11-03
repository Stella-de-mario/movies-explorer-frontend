import React from "react";
import "./Techs.css";
import Heading from "../Heading/Heading";
import HeadingTitle from "../HeadingTitle/HeadingTitle";

function Techs() {
  return (
    <section className="techs">
      <Heading heading={"Технологии"} />
      <div className="techs_container">
        <HeadingTitle position={'techs'} text="7 технологий" />
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list__item">HTML</li>
        <li className="techs__list__item">CSS</li>
        <li className="techs__list__item">JS</li>
        <li className="techs__list__item">React</li>
        <li className="techs__list__item">Git</li>
        <li className="techs__list__item">Express.js</li>
        <li className="techs__list__item">mongoDB</li>
      </ul>
      </div>
    </section>
  );
}

export default Techs;
