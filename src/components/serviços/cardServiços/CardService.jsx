import styles from "./CardService.module.css";

const CardService = ({titulo, imagem , texto}) => {
  return (
    <div className={styles.componente}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <img className={styles.imagem} src={imagem} alt="" />
      <p className={styles.texto}>{texto}</p>
    </div>
  );
};
export default CardService;
