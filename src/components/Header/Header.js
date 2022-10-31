import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
