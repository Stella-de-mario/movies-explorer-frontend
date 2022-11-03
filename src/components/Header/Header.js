import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Logo from "../Logo/Logo";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
        <Logo />
      {isLoggedIn
      ? <Navigation />
    : <AuthNavigation />}
    </header>
  );
}

export default Header;
