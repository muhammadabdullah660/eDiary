import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import NoteState from "./Context/Notes/NoteState";
import Alert from "./Components/Alert";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
