import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-right">
            <h5 className="card-title">{note.title}</h5>{" "}
            <div className="align-items-right">
              <i className="mx-2 fa-solid fa-trash-can"></i>
              <i className="mx-2 fa-solid fa-pen-to-square"></i>
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
