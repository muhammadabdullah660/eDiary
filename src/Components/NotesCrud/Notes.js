import React, { useContext } from "react";
import noteContext from "../../Context/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="container my-3">
        <h1>Your Notes</h1>
        <div className="row">
          {notes.map((note) => {
            return <NoteItem note={note} key={note._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
