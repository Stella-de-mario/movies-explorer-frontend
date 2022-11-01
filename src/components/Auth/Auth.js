import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Auth.css";

function Auth({ title, subtitle, children, route, link }) {
  return (
    <section className="auth">
      <Logo />
      <h2 className="auth__title">{title}</h2>
      {children}
      <p className="auth__subtitle">
        {subtitle}
        <Link to={route} className="auth__link">
          {link}
        </Link>
      </p>
    </section>
  );
}

export default Auth;
