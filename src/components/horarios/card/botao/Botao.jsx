import styles from "./Botao.module.css";

const Botao = () => {
  return (
    <div>
      <button className={styles.botao}>
        <p>Marcar Horario</p>
      </button>
    </div>
  );
};

export default Botao;
