import React from "react";
import Experiences from "../components/knowledges/Experience";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";
import Navigation from "../components/Navigation";

export default function Knowledges() {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experiences />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
}
