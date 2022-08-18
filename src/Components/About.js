import React, { useContext, useEffect } from "react";
import noteContext from "../Context/Notes/noteContext";
const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);

  return (
    <div>
      About {a.state.name} and class of {a.state.class}
    </div>
  );
};

export default About;
