import styles from './Home.module.css'
import Mapa from './CarMapa/Mapa'
const home = () => {
    return (
      <div className={styles.barbearia}>
       < Mapa/>
      </div>
    );
  };

export default home