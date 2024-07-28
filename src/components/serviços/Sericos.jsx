import CardService from "./cardServiços/CardService";
import Footer from '../footer/Footer'
import styles from './Servicos.module.css'
import corteTesoura from './img/corteTesoura.png'
const Servicos = () => {
  return(
    <div className={styles.paginaService} >
        <CardService 
         titulo="corte na tesoura" 
         imagem ={corteTesoura}
          texto="Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.."
         />
        <CardService/>
        <CardService/>
        <Footer/>
        
    </div>
  )
}

export default Servicos;