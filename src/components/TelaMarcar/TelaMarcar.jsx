import styles from "./TelaMarcar.module.css";
import calendario from "./img/calendario.png"
const TelaMarcar = () => {
  return (
    <div className={styles.componentTela}>

      <div className={styles.cardForm}>

        <div className={styles.titulo}>
          <img className={styles.icon} src={calendario} alt="" /> 
          <h2>agendamento</h2> 
        </div>


        <div className={styles.contentData}>
            <p>para qual data ?</p>
           <input type="date" name="" id="" /> 
        </div>
       

        


      </div>

    </div>
  );
};

export default TelaMarcar;
