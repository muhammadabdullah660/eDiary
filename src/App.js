import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import NoteState from "./Context/Notes/NoteState";
import Alert from "./Components/Alert";
import SignIn from "./Components/AuthCrud/SignIn";
import SignUp from "./Components/AuthCrud/SignUp";
import { useState } from "react";
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home showAlert={showAlert} />}
              ></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route
                exact
                path="/signIn"
                element={<SignIn showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/signUp"
                element={<SignUp showAlert={showAlert} />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
