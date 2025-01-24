import styles from "./CardMarcar.module.css"
import BotaoComponente from "../card/botao/Botao";
import Button from '@mui/material/Button';

const CardMarcar = () =>{
    return(

        <div className={styles.bodyComponent}>
             <div className={styles.CardMarcar}>
              <h2 className={styles.titulo}>marcar outra data</h2>
              <BotaoComponente/>
        </div>
        </div>
       
    )
}

export default CardMarcar;