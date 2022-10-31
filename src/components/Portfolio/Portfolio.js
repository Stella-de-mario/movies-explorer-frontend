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
            <p className="portfolio__link-title">
              Статичный сайт
              <span>↗</span>
            </p>
          </a>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-item"
            href="https://github.com/Stella-de-mario/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-title">
              Адаптивный сайт
              <span>↗</span>
            </p>
          </a>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-item"
            href="https://github.com/Stella-de-mario/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-title">
              Одностраничное приложение
              <span>↗</span>
            </p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
