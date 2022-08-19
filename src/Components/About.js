import React, { useContext, useEffect } from "react";
import noteContext from "../Context/Notes/noteContext";
const About = () => {
  // const a = useContext(noteContext);
  // useEffect(() => {
  //   a.update();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      {/* About {a.state.name} and class of {a.state.class} */}
      About page
    </div>
  );
};

export default About;
