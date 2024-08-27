import Horarios from "../horarios/horarios";
import Home from "../home/Home";
import logo from "./img/logo.png";
import Botao from "../horarios/card/botao/Botao";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";
import styles from "./Header.module.css";
import Servicos from "../serviços/Sericos";
import TelaMarcar from "../TelaMarcar/TelaMarcar";

const Header = () => {
  return (
    <div>
      <Router>
        <nav className={styles.header}>
          <img className={styles.logo} src={logo} alt="" />
          <ul className={styles.lista}>
            <li>
              <NavLink
                to="/horarios"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Horarios
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Barbearia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/serviços"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Serviços
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/serviços" element={<Servicos />} />
          <Route path="/marcar" element = {<Botao/>}/>
          <Route path="/marcar/form" element = {<TelaMarcar/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
