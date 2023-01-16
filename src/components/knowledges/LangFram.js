
import ProgressBar from "./ProgressBar";


export default function LangFram(props) {
  const langFram = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.2 },
      { id: 2, value: "Html / CSS", xp: 1.8 },
      { id: 3, value: "Python", xp: 0.8 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 2, value: "Sass", xp: 1.5 },
      { id: 3, value: "Gsap", xp: 1 },

    ],
  }

  // Pour appeler une donnée
  let languages = langFram.languages;
  let frameworks = langFram.frameworks;
  // console.log(languages[1].value);
  // console.log(langFram.languages[1].value);

  return (
    <div>
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Languages"
        />
        <ProgressBar 
        languages={frameworks}
        className="frameworkDisplay"
        title="FrameWorks & Bibliothèques"
        />
      </div>
    </div>
  );
}
