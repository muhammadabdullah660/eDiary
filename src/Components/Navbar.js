import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("signIn");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          eDiary
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary" to="/signIn" role="button">
                Sign In
              </Link>
              <Link className="btn btn-primary mx-2" to="/signUp" role="button">
                Sign Up
              </Link>
            </form>
          ) : (
            <button className="btn btn-primary mx-2" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
