import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <h3>Déolé cette page n'existe pas !</h3>
      <NavLink to="/">
        <i className="fas fa-home"></i>
        <span>Accueil</span>
      </NavLink>
    </div>
  );
}
