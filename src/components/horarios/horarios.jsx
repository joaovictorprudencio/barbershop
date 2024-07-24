import styles from "./horarios.module.css";
import Preco from "./preços/Preco";
import Marcar from "./card/Marcar";

const Horarios = () => {
  return (
    <div className={styles.corpo}>
      <div className={styles.tabela}>
        <div className={styles.precos}>
          <Preco />
        </div>
      </div>
      <Marcar />
    </div>
  );
};

export default Horarios;
