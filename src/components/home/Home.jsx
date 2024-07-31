import styles from './Home.module.css'
import Mapa from './CarMapa/Mapa'
import Promocao from './promocao/Promocao';
import Footer from "../footer/Footer"
const home = () => {
    return (
      <div className={styles.barbearia}>
       < Mapa/>
       < Promocao/>
       < Footer/>

      </div>
    );
  };

export default home