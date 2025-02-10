import CardService from "./cardServiços/CardService";
import Footer from '../footer/Footer'
import styles from './Servicos.module.css'
import corteTesoura from './img/corteTesoura.png'
import barba from './img/barba.png'
import degradeNavalhado from './img/degrade.jfif'
import social from './img/corteSocial.png'
const Servicos = () => {
  return(
    <div className={styles.paginaService} >
         <CardService 
         titulo="degrade navalhado" 
         imagem ={degradeNavalhado}
          texto="O corte na tesoura tem uma melhor remodelação, proporcionando um acabamento natural e detalhado."
         />
        <CardService 
         titulo="corte na tesoura" 
         imagem ={corteTesoura}
          texto="O corte na tesoura tem uma melhor remodelação, proporcionando um acabamento natural e detalhado."
         />
        <CardService
        titulo="barba"
        imagem={barba}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
        />
        <CardService
           titulo="corte social"
           imagem={social}
           texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
        />
        <Footer/>
        
    </div>
  )
}

export default Servicos;