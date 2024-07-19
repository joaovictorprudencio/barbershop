import Horarios from "../horarios/horarios";
import Home from "../home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <Router>
        <nav className={styles.header}>
          <ul className={styles.lista}>
            <li>
              <Link to="/horarios">Horarios</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/serviços">serviços</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/horarios" element={<Horarios />} />
          
          
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
