import styles from "./item.module.css";
import disponibilidade from "../../img/ok.png";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'


dayjs.extend(utc)
dayjs.extend(timezone)

const Item = ({ Horario }) => {




  const {  date, time } = Horario;


 

  return (
    <div className={styles.item}>
      <div className={styles.texto}>
        <h2 className={styles.data}>
          {time}
        </h2>
        <p className={styles.nome}>
            {dayjs(date).format("DD/MM")} 
   
           </p>
        <p className={styles.contato}>Barbeiro: Maikon</p>
      </div>
       <div className={styles.icone}>
        <p className={styles.status}>Disponivel</p>
        <img src={disponibilidade} className={styles.imagemCheck} />
       </div>
       
    </div>
  );
};

export default Item;
