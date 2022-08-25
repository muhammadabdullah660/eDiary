import React, { useContext, useState } from "react";
import noteContext from "../../Context/Notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleAddClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="titlelHelp"
              placeholder="Enter title"
              onChange={onChange}
              minLength={3}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter Description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Enter Tag"
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleAddClick}
            className="btn btn-primary"
            disabled={note.title.length < 3 || note.description.length < 5}
          >
            Add note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
