import { useState } from "react";
import { portfolioData } from "../../data/portefolioData";
import Project from "./Project";

export default function ProjectList() {
  // console.log(portfolioData)
  // console.log(portfolioData[1])
  // console.log(portfolioData[1].name)

  let pf = portfolioData;
  //   console.log(pf);
  //   console.log(pf[1]);
  //   console.log(pf[1].name);
  const radios = [
    { id: 1, value: "css" },
    { id: 2, value: "javascript" },
    { id: 3, value: "react" },
  ];

  const [selectedRadio, setSelectedRadio] = useState("css")

  function handleRadio(e){
    console.log(e.target.value)
    let radio = e.target.value 
    setSelectedRadio( e.target.value )

}

  return (
    <div className="portfolioContent">
      <ul className="radioDisplay">
        {
            radios
            .map((radio)=>{
                return(
                    <li key={radio.id}>
                        <input type="radio" 
                            name="radio"
                            checked = {radio.value===selectedRadio}
                            value={radio.value}
                            id={radio.value}
                            onChange={handleRadio}
                        />
                        <label htmlFor={radio.value}></label>
                        {radio.value}
                        
                        </li>
                    
                    )
            })
        
        }

      </ul>
      <div className="projects">
        {pf
        .filter(item=>item.languages.includes(selectedRadio))
        .map((item) => {
          return (
            <Project
              key={item.id}
              item={item}
              id={item.id}
              name={item.name}
              languagesIcons={item.languagesIcons}
              source={item.source}
              lien={item.lien}
              info={item.info}
              picture={item.picture}
            />
          );
        })}
      </div>
    </div>
  );
}
