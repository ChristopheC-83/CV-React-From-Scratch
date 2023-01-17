import React from "react";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Christophe CHIAPPETTA</h1>
          <h2>Développeur Front-End</h2>
          <div className="pdf">
            <a 
            href="https://drive.google.com/file/d/1uzDjm5l1mtG3ITJe3zwqV0962rgbHlZP/view?usp=share_link" 
            download="CV_CHIAPPETTA_Chrisotphe.pdf"
            target="_blank"
            rel="noreferrer"
            >Télécharger CV</a>
          </div>
        </div>

      </div>
    </div>
  );
}
