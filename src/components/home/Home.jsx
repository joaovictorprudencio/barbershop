import styles from "./Home.module.css";
import Mapa from "./CarMapa/Mapa";
import Promocao from "./promocao/Promocao";
import Footer from "../footer/Footer";

const home = () => {
  return (
    <div className={styles.barbearia}>
      <section
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "24px 16px",
          boxSizing: "border-box",
        }}
      >
        <Mapa />
        <Promocao />
      </section>
      <Footer />
    </div>
  );
};

export default home;
