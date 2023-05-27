import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/"> {/*pour définir des liens cliquables dans la barre de navigation. Les liens sont configurés pour afficher les composants correspondants lorsqu'ils sont cliqués. */}
        <div className="navbar__logo">
          <img src="logo.png" alt="Logo" />
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A Propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;