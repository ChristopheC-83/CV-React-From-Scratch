import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"> </div>
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fa-solid fa-map-location">
                  <span>Nîmes</span>
                </i>
              </li>
              <li>
                <i className="fa-solid fa-mobile-screen-button">
                  <CopyToClipboard text="0699812296">
                    <span
                      className="clickInput"
                      onClick={() => {
                        alert("Numéro de téléphone copié.");
                      }}
                    >
                      06 99 81 22 96
                    </span>
                  </CopyToClipboard>
                </i>
              </li>
              <li>
                <i className="fa-regular fa-envelope">
                  <CopyToClipboard text="christophe.chiappetta@gmail.com">
                    <span
                      className="clickInput mail"
                      onClick={() => {
                        alert("Adresse mail copiée.");
                      }}
                    >
                      christophe.chiappetta@gmail.com
                    </span>
                  </CopyToClipboard>
                </i>
              </li>
            </ul>
         
        </div>
        <div className="socialNetwork">
          <ul>
              <a
                href="https://www.linkedin.com/in/christophe-c-8101b4233/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Linkedin</h4>
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/christophe_poseur_cuisines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Instagram</h4>
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a
                href="https://github.com/ChristopheC-83"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github</h4>
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a
                href="https://codepen.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>CodePen</h4>
                <i className="fa-brands fa-codepen"></i>
              </a>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
