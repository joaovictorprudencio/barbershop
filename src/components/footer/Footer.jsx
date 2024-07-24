import footerimg from "../header/img/logo.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.corpo}>
      <footer className={styles.footer}>
        <img className={styles.imagem} src={footerimg} alt="" />
        <p className={styles.marca}>barbershop</p>
      </footer>
    </div>
  );
};

export default Footer
