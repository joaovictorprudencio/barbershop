import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Horarios from "./components/horarios/horarios";

function App() {
  return (
    <div>
      <Router>
        <nav  className="header">
          <ul className="lista">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/horarios">Horarios</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/horarios" element={<Horarios />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
