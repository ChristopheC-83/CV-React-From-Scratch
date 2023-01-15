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
            href="./media/CV_Christophe.pdf" download
            >Télécharger CV</a>
          </div>
        </div>

      </div>
    </div>
  );
}
