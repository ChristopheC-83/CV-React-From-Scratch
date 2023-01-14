import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/kiki_saut.png" alt="profil_pict" />
          <h3>Christophe CHIAPPETTA</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/christophe-c-8101b4233/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/christophe_poseur_cuisines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a
              href="https://github.com/ChristopheC-83"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="signature">Christophe C. 2022</div>
    </div>
  );
}
