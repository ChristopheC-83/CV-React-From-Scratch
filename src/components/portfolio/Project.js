import { useState } from "react";

export default function Project({
  id,
  name,
  languagesIcons,
  source,
  lien,
  info,
  picture,
}) {
  const [showInfo, setShowInfo] = useState(false);

  function handleInfo() {
    setShowInfo(!showInfo);
    console.log(showInfo);
  }

  return (
    <div className="project">
      <div className="icons">
        {languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{name}</h3>
      <img src={picture} alt="" />
      <span
        className="infos"
        onClick={() => {
          handleInfo();
        }}
      >
        <i className="fas fa-plus-circle"></i>
      </span>

      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <div className="sourceCode">
                <a
                  href={lien}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  Lien
                </a>{" "}
              </div>
              <div className="sourceCode">
                <a
                  href={source}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  Code Source
                </a>
              </div>
            </div>
            <p className="text">{info}</p>

            <div
              className="button return"
              onClick={() => {
                handleInfo();
              }}
            >
              Retourner sur la page
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
