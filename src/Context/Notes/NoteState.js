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
  const host = "http://localhost:5000";
  const initialNotes = [];
  const [notes, setnotes] = useState(initialNotes);

  //Fecth all notes
  const fetchNotes = async () => {
    //API Call
    // Example POST method implementation:
    // Default options are marked with *
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYmFkMjI4Mzk4YjQ2Y2MxMTE3MjA0In0sImlhdCI6MTY2MDY3MDcwNH0.YGXi9MlW0R9JgDCNXv2uzGlAJ9TqyX98y1u0f2aIiqs",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    console.log(json);
    setnotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //API Call
    // Example POST method implementation:
    // Default options are marked with *
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYmFkMjI4Mzk4YjQ2Y2MxMTE3MjA0In0sImlhdCI6MTY2MDY3MDcwNH0.YGXi9MlW0R9JgDCNXv2uzGlAJ9TqyX98y1u0f2aIiqs",
      },
      body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    let note = {
      _id: "62ffd484ed1bd8a84834ab47",
      user: "62fbad228398b46cc1117204",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-19T18:20:52.902Z",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {
    const delNote = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(delNote);
  };
  //Edit a note
  const editNote = async (id, description, title, tag) => {
    //API Call
    // Example POST method implementation:
    // Default options are marked with *
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmYmFkMjI4Mzk4YjQ2Y2MxMTE3MjA0In0sImlhdCI6MTY2MDY3MDcwNH0.YGXi9MlW0R9JgDCNXv2uzGlAJ9TqyX98y1u0f2aIiqs",
      },
      body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
