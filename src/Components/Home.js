import React, { useContext, useEffect } from "react";
import noteContext from "../Context/Notes/noteContext";

const Home = () => {
  const context = useContext(noteContext);
  const { notes, setnotes } = context;
  return (
    <>
      <div>
        <div className="container my-3">
          <h1>Add a Note</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="container my-3">
          <h1>Your Notes</h1>
          {notes.map((note) => {
            return note.title;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
