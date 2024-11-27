import styles from "./Home.module.css";
import Mapa from "./CarMapa/Mapa";
import Promocao from "./promocao/Promocao";
import Footer from "../footer/Footer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const home = () => {
  return (
    <div className={styles.barbearia}>
      <section style={{
        height: '100vh'
      }}> 
        <Mapa />
        <Promocao />
      </section>
      <Footer />
    </div>
  );
};

export default home;
