import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProgressBar(props) {
  console.log("PB : ", props.languages);
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div className="languagesList" key={uuidv4()}>
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
