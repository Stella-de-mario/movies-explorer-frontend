import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a
            className="portfolio__link-item"
            href="https://github.com/Stella-de-mario/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-item"
            href="https://github.com/Stella-de-mario/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-item"
            href="https://github.com/Stella-de-mario/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
