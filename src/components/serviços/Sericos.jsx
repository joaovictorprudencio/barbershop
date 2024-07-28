import CardService from "./cardServiços/CardService";
import Footer from '../footer/Footer'
import styles from './Servicos.module.css'

const Servicos = () => {
  return(
    <div className={styles.paginaService} >
        <CardService 
         titulo="Serviço de Barbeiro" 
         imagemSrc="https://via.placeholder.com/150" 
          detalhamento="Detalhamento do serviço de barbeiro."
         />
        <CardService/>
        <CardService/>
        <Footer/>
        
    </div>
  )
}

export default Servicos;