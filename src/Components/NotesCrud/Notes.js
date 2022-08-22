import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../../Context/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setnote(currentNote);
  };
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleUpdClick = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/*Add Note*/}
      <AddNote />
      {/* Edit Note */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        //ref={ref}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Edit form */}
              <div className="container my-3">
                <h1>Your Note</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={note.title}
                      aria-describedby="titlelHelp"
                      placeholder="Enter title"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={note.description}
                      placeholder="Enter Description"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tag"
                      name="tag"
                      value={note.tag}
                      placeholder="Enter Tag"
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Notes</h1>
        <div className="row">
          {notes.map((note) => {
            return (
              <NoteItem note={note} updateNote={updateNote} key={note._id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
