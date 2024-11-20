import tesoura from "../img/promo.png";
import styles from "./Promocao.module.css";
const Promocao = () => {
  return (
    <div className={styles.promocao}>
      <h1 className={styles.titulo}>promoções</h1>
      <div className={styles.promocoes}>
        <img className={styles.tesoura} src={tesoura} alt="" />
      
      </div>
    </div>
  );
};

export default Promocao;
