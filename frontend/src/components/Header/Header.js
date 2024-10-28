import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Vodenje dopustov</h1>
      <nav>
        <Link to="/">Domov</Link>
        <Link to="/request">Zahteva za dopust</Link>
      </nav>
    </header>
  );
};

export default Header;
