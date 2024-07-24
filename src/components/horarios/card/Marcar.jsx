import styles from "./Marcar.module.css";
import relogio from "../img/relogioCerto.png";
const Marcar = () => {
  return (
    <div className={styles.corpo}>
      <div className={styles.card}>
        <div className={styles.horarios}>
          <img className={styles.image} src={relogio} alt="" />
          <h1 className={styles.mensagemHorarios}>horarios</h1>
        </div>
        <h3 className={styles.semana}>segunda á sabado</h3>
        <h5 className={styles.horas}>9:00 -12:00 ás 14:00 - 20:00</h5>
      </div>
    </div>
  );
};

export default Marcar;
