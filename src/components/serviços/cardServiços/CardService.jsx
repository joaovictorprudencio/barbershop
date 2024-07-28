import styles from "./CardService.module.css";

const CardService = ({ titulo, imagem, texto }) => {
  return (
    <div className={styles.componente}>
      <img className={styles.imagem} src={imagem} alt="" />

      <div className={styles.content}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.texto}>{texto}</p>
      </div>
    </div>
  );
};
export default CardService;
