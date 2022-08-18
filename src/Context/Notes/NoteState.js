import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const state0 = {
    name: "Abd",
    class: "21",
  };
  const [state, setstate] = useState(state0);
  const update = () => {
    setTimeout(() => {
      setstate({
        name: "gg",
        class: "19",
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
