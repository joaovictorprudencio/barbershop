import styles from "./CardMarcar.module.css"
import Botao from "../card/botao/Botao";


const CardMarcar = () =>{
    return(
        <div className={styles.CardMarcar}>
              <h2 className={styles.titulo}>marcar outra data</h2>
               <Botao/>
        </div>
    )
}

export default CardMarcar;