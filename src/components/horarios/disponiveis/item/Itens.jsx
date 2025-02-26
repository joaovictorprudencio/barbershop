import styles from "./item.module.css";
import disponibilidade from "../../img/ok.png";
import dayjs from "dayjs";
const Item = ({ Horario }) => {


  const { cliente, data, horario, status } = Horario;
  const { nome, telefone } = cliente || {}; 

  const formtParans = dayjs(`${data} ${horario}`).format("HH:mm")

  return (
    <div className={styles.item}>
      <div className={styles.texto}>
        <h2 className={styles.data}>
          {formtParans} 
        </h2>
        <p className={styles.nome}> nome:{nome}</p>
        <p className={styles.contato}>Barbeiro: {telefone}</p>
      </div>
       <div className={styles.icone}>
        <p className={styles.status}>Disponivel</p>
        <img src={disponibilidade} className={styles.imagemCheck} />
       </div>
       
    </div>
  );
};

export default Item;
