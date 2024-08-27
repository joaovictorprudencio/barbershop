import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import styles from "./Botao.module.css";
import TelaMarcar from "../../../TelaMarcar/TelaMarcar";

const Botao = () => {
  return (
    <div>
      <NavLink to="/marcar/form">
        <button className={styles.botao}>
          <p>Marcar Horário</p>
        </button>
      </NavLink>
    </div>
  );
};

export default Botao;
