import React, { useContext } from "react";
import noteContext from "../../Context/Notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteNote(note._id);
  };
  const handleEditClick = () => {
    updateNote(note);
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-right">
            <h5 className="card-title">{note.title}</h5>{" "}
            <div className="align-items-right">
              <i
                className="mx-2 fa-solid fa-trash-can"
                onClick={handleDeleteClick}
              ></i>
              <i
                className="mx-2 fa-solid fa-pen-to-square"
                onClick={handleEditClick}
              ></i>
            </div>
          </div>
          <p className="card-text">
            {note.description}
            <br />
            <b>{note.tag}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
