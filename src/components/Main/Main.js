import React from "react";
import Header from '../Header/Header';
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Portfolio from "../Portfolio/Portfolio";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";

function Main({isLoggedIn}) {
  return (
     <main className="main">
      <Header isLoggedIn={isLoggedIn} />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
  );
}

export default Main;
