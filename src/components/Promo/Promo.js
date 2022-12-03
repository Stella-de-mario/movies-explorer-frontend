import React from "react";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";
import HeadingTitle from '../HeadingTitle/HeadingTitle';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
       <HeadingTitle position={'promo'} text="Учебный проект студента факультета Веб-разработки." />
      <NavTab />
      </div>
    </section>
  );
}

export default Promo;
