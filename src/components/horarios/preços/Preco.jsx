import styles from "./Precos.module.css";
const Preco = (props) => {
  return (
    <div className={styles.corpo}>

      <div className={styles.servico}>
        <h1>corte degrade</h1>
        <h1>corte degrade navalhado</h1>
        <h1>corte militar </h1>
        <h1>barba </h1>
        <h1>pigmentação</h1>
      </div>

      <div className={styles.servico}>
        <h1>$ 25</h1>
        <h1>$ 30</h1>
        <h1>$ 22</h1>
        <h1>$ 15 </h1>
        <h1>$ 100 </h1>
      </div>
    </div>
  );
};

export default Preco;
