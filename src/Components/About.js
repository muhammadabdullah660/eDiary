import React, { useContext } from "react";
import noteContext from "../Context/Notes/noteContext";
const About = () => {
  const a = useContext(noteContext);
  return (
    <div>
      About {a.name} and class of {a.class}
    </div>
  );
};

export default About;
