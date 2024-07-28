import CardService from "./cardServiços/CardService";
import styles from './Servicos.module.css'

const Servicos = () => {
  return(
    <div className={styles.paginaService} >
        <CardService/>
    </div>
  )
}

export default Servicos;