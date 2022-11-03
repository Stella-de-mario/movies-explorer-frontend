import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <nav className="footer__navigation">      
        <ul className="footer__links">
          <li className="footer__links_item">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              target={"_blank"}
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links_item">
            <a
              className="footer__link"
              href="https://github.com/Stella-de-mario"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
