import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  //   const state0 = {
  //     name: "Abd",
  //     class: "21",
  //   };
  //   const [state, setstate] = useState(state0);
  //   const update = () => {
  //     setTimeout(() => {
  //       setstate({
  //         name: "gg",
  //         class: "19",
  //       });
  //     }, 1000);
  //   };
  const initialNotes = [
    {
      _id: "62fe76b18425094624b9fa6c",
      user: "62fbad228398b46cc1117204",
      title: "First note",
      description: "this is my very first note to me",
      tag: "personal",
      date: "2022-08-18T17:28:17.897Z",
      __v: 0,
    },
    {
      _id: "62ffd484ed1bd8a84834ab47",
      user: "62fbad228398b46cc1117204",
      title: "Second note",
      description: "this is my second note to me. it is 19 aug",
      tag: "personal",
      date: "2022-08-19T18:20:52.902Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
