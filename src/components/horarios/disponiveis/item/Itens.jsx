import styles from "./item.module.css";
import disponibilidade from "../../img/ok.png";
const Item = ({ Horario }) => {
  if (!Horario) {
    return <h1>carregando....</h1>;
  }
  return (
    <div className={styles.item}>
      <div className={styles.texto}>
        <h2 className={styles.data}>
          {Horario.horaInicial} - {Horario.horaFormatada}
        </h2>
        <p className={styles.dado}> nome: {Horario.nome}</p>
        <p className={styles.dado}>contato: {Horario.contato}</p>
      </div>
       <div className={styles.icone}>
        <p className={styles.status}>Disponivel</p>
        <img src={disponibilidade} className={styles.imagemCheck} />
       </div>
       
    </div>
  );
};

export default Item;
