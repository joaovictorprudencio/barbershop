import styles from "./horarios.module.css";
import Preco from "./preços/Preco";
import Marcar from "./card/Marcar";
import CardDisponiveis from "./disponiveis/CardDisponiveis";
import Footer from "../footer/Footer";
import CardMarcar from "./CardMarcar/CardMarcar";
const Horarios = () => {
  return (
    <div className={styles.corpo}>
      <div className={styles.tabela}>
        <div className={styles.precos}>
          <Preco />
        </div>
      </div> 
      <div className={styles.cardContente}>
        <CardMarcar/>
      </div>
      <Marcar />
      <CardDisponiveis />
     
      
      <Footer />
    </div>
  );
};

export default Horarios;
