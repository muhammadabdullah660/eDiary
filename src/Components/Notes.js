import React, { useContext } from "react";
import noteContext from "../Context/Notes/noteContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setnotes } = context;
  return (
    <>
      <div className="container my-3">
        <h1>Your Notes</h1>
        <div className="row">
          {notes.map((note) => {
            return <NoteItem note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
