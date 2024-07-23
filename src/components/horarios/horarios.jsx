import styles from "./horarios.module.css";
import Preco from "./preços/Preco";
const Horarios = () => {
  return (
    <div className={styles.corpo}>


      <div className={styles.tabela}>
        <div className={styles.precos}>
           <Preco/>
        </div>


      </div>



    </div>
  );
};

export default Horarios;
